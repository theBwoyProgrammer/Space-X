import { configureStore } from '@reduxjs/toolkit';
import missionResucer from './missions/mission';

const rootReducer = { mission: missionResucer };

const store = configureStore({ reducer: rootReducer });
export default store;
