import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';


const signupScreen = () => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign Up for Tracker'
                buttonTitle='Sign Up'
                errorMessage={state.errorMessage}
                onSubmit={signup}
            />
            <NavLink
                routeName='Signin'
                text='Already have an account? Sign in instead'
            />
        </View>
    );
}

signupScreen.navigationOptions = () => {
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

export default signupScreen;