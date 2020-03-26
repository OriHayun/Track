import CreateDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const treackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    };
};

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
};

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations });
};



export const { Context, Provider } = CreateDataContext(
    treackReducer,
    { fetchTracks, createTrack },
    []);
