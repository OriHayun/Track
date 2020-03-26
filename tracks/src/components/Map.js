import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext';

const map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    return (
        <>
            <MapView
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                region={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                {/* <Circle
                    center={{ latitude: 32.355014, longitude: 34.997364 }}
                    radius={30}
                    strokeColor="rgba(158,158,255,1.0)"
                    fillColor="rgba(158,158,255,0.3)"
                /> */}
                <Polyline
                    coordinates={locations.map(location => location.coords)}
                />
            </MapView>

        </>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 250
    }
})

export default map