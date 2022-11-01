import { StyleSheet } from 'react-native';
import React, { useRef, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { selectOrigin,  selectDestination, setTravelTimeInformation, setInitialTravelInformation, setInitialTravelDuration, setEarthDistance } from '../store/slices/navSlice';
import { useSelector, useDispatch } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';

const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: {top: 100, right: 100, bottom: 1000, left: 100}
        });
    }, [origin, destination]);

    useEffect(() => {

        if (!origin || !destination) return;

        const lat1 = origin?.location.lat;
        const lon1 = origin?.location.lng;
        const lat2 = destination?.location.lat;
        const lon2 = destination?.location.lng;



        // To calculate crow fly distance between two points
        const getDistance = (lat1, lon1, lat2, lon2) => {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2-lat1);  // deg2rad below
            var dLon = deg2rad(lon2-lon1); 
            var a = 
              Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2)
              ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            return d;
        }

          getDistance(lat1, lon1, lat2, lon2);


        // To calculate the shortest way between two points with GOOGLE DISTANCE MATRIX API
        const getTravelTime = async () => {
            await fetch(
            `https://maps.googleapis.com/maps/api/distancematrix/json?
            units=imperial&origins=${origin.description}
            &destinations=${destination.description}
            &key=${GOOGLE_MAPS_APIKEY}`
            ).then((res) => res.json())
            .then((data)=>{
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
                dispatch(setInitialTravelInformation(data.rows[0].elements[0].distance.text));
                dispatch(setInitialTravelDuration(data.rows[0].elements[0].duration.text));
                dispatch(setEarthDistance(getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)));
                
            });
        };

        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_APIKEY]);


    const getDistance = () => {
        if (origin && destination) {
            return (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            );
        }
    }

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d.toFixed(1);
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }

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