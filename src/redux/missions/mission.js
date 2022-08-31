/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSION = 'missions/mission/GET_MISSION';
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

const missionResucer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSION}/fulfilled`:
      return action.payload;
    default: return state;
  }
};

export default missionResucer;
