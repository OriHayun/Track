import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './spacer';


const authForm = ({ headerText, buttonTitle, errorMessage, onSubmit }) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}

            />
            <Spacer>
                {errorMessage ?
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    : null}
                <Button
                    title={buttonTitle}
                    onPress={() => onSubmit(email, password )}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginVertical: 15
    }
})

export default authForm;
