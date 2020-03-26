import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';


const trackDetailsScreen = ({ navigation }) => {

    const id = navigation.getParam('id');
    const { state } = useContext(TrackContext);

    const track = state.find(t => t._id === id);
    const initialCoords = track.locations[0].coords;

    return (
        <>
            <Text style={{ fontSize: 48 }}>{track.name}</Text>
            <MapView style={styles.map}
                initialRegion={{
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    ...initialCoords
                }}
            >
                <Polyline
                    coordinates={track.locations.map(loc => loc.coords)}
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

export default trackDetailsScreen;