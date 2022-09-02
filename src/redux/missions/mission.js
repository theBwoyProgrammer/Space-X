/* eslint-disable no-fallthrough */
/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSION = 'missions/mission/GET_MISSION';
const JOIN_MISSION = 'missions/mission/JOIN_MISSION';
const LEAVE_MISSION = 'missions/mission/LEAVE_MISSION';
const BASE_URL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const getMission = createAsyncThunk(
  GET_MISSION,
  async () => {
    const data = await fetch(`${BASE_URL}`);
    const response = await data.json();
    const arry = [];
    response.map((res) => {
      arry.push(
        {
          id: res.mission_id,
          Mname: res.mission_name,
          description: res.description,
        },
      );
      return res;
    });
    return arry;
  },
);

export const joinMissions = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMissions = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const missionResucer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSION}/fulfilled`:
      return action.payload;
    case `${JOIN_MISSION}`:
      return state.map((state) => {
        if (state.id === action.payload) {
          return {
            ...state,
            reserved: true,
          };
        }
        return state;
      });
    case `${LEAVE_MISSION}`:
      return state.map((state) => {
        if (state.id === action.payload) {
          return {
            ...state,
            reserved: false,
          };
        }
        return state;
      });
    default: return state;
  }
};

export default missionResucer;
