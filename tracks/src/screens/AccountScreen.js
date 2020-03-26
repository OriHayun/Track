import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/spacer';
import { Context as AuthContext } from '../context/AuthContext';
import {AntDesign} from '@expo/vector-icons';

const accountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Text style={{ fontSize: 48 }}>accountScreen</Text>
            <Spacer>
                <Button title="Sign out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
}

accountScreen.navigationOptions = () => {
    return {
        title: 'Me',
        tabBarIcon: <AntDesign size={20} name='user' />
    };
};

const styles = StyleSheet.create({})

export default accountScreen;