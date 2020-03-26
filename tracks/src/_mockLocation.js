import * as Location from 'expo-location';

const tenMettersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        coords: {
            longitude: 34.9970993 + increment * tenMettersWithDegrees,
            latitude: 32.3550974 + increment * tenMettersWithDegrees,
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5
        },
        timestamp: 10000000,
    };
};

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000)