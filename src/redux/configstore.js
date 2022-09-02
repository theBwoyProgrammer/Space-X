import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rockets from './rockets/rockets';
import missionResucer from './missions/mission';

const rootReducer = combineReducers({ mission: missionResucer, rocket: rockets });
const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

export default store;
