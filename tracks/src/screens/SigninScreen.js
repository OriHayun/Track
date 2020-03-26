import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const signinScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign In'
                buttonTitle='Sign In'
                errorMessage={state.errorMessage}
                onSubmit={signin}
            />
            <NavLink
                routeName='Signup'
                text='Dont have an account? Sign up instead'
            />
        </View>
    );
}

signinScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default signinScreen;