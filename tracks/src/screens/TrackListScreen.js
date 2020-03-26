import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import Spacer from '../components/spacer';

const trackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <Spacer>
                            <TouchableOpacity onPress={() =>
                                navigation.navigate('TrackDetails', { id: item._id })
                            }>
                                <ListItem
                                    chevron
                                    title={item.name}
                                />
                            </TouchableOpacity>
                        </Spacer>
                    );
                }}
            />
        </SafeAreaView>
    );
}

trackListScreen.navigationOptions = () => {
    return {
        title: 'Tracks',
        headerTitleAlign: 'center',
    };
};

const styles = StyleSheet.create({})

export default trackListScreen;