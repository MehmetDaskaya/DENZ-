import { StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { selectOrigin,  selectDestination } from '../store/slices/navSlice';
import { useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useEffect } from 'react';

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: {top: 100, right: 50, bottom: 800, left: 50}
        });
    }, [origin, destination]);

  return (
    
        <MapView
            ref={mapRef}
            style={styles.map}
            mapType="mutedStandard"
            initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        >

            {origin && destination && (
                <MapViewDirections
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
                />
            )}

            {origin?.location && (
            <Marker
                coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,}}
                title="Origin"
                description={origin.description}
                identifier="origin"
            />
            )}

            {destination?.location && (
            <Marker
                coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,}}
                title="Destination"
                description={destination.description}
                identifier="destination"
            />
            )}
        </MapView>
    
  )
}

export default Map;

const styles = StyleSheet.create({
    map:{
        flex:1,
        minHeight: "100%",
        height: "100%",
        width: "100%",
    },
})