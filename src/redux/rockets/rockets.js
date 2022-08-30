import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKET = 'rockets/rocket/FETCH_ROCKET';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export const getRockets = createAsyncThunk(
  FETCH_ROCKET,
  async () => {
    const data = await fetch(`${BASE_URL}`);
    const response = await data.json();
    console.log(response);
  },
);

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ROCKET}`:
      return [...state, action.payload];
    default: return state;
  }
};

export default rockets;
