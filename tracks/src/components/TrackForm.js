import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements'
import Spacer from './spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
const trackForm = () => {
    const [saveTrack] = useSaveTrack()

    const { state: { name, recording, locations },
        changeName, startRecording, stopRecording, } = useContext(LocationContext);
    
        return (
        <>
            <Spacer>
                <Input
                    placeholder="Enter Track Name"
                    onChangeText={changeName}
                    value={name}
                />
            </Spacer>
            <Spacer>
                {recording
                    ? <Button title="Stop" onPress={stopRecording} />
                    : <Button title="Start recording" onPress={startRecording} />
                }
            </Spacer>

            {!recording && locations.length ?
                <Button
                    title='Save'
                    onPress={saveTrack}
                />
                : null
            }
        </>
    );
};

export default trackForm