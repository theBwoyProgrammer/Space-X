import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKET = 'rockets/rocket/FETCH_ROCKET';
const RESERVED_ROCKET = 'rockets/rocket/RESERVED_ROCKET';
const CANCELLED_RESERVE = 'rockets/rocket/CANCELLED_RESERVE';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export const getRockets = createAsyncThunk(
  FETCH_ROCKET,
  async () => {
    const data = await fetch(`${BASE_URL}`);
    const response = await data.json();
    const arr = [];
    response.map((res) => {
      arr.push(
        {
          id: res.rocket_id,
          name: res.rocket_name,
          description: res.description,
          image: res.flickr_images[0],
          reserved: false,
        },
      );
      return res;
    });
    return arr || [];
  },
);

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ROCKET}/fulfilled`:
      return action.payload;
    case RESERVED_ROCKET:
      return state.map((state) => {
        if (state.id !== action.id) {
          return state;
        }
        return { ...state, reserved: true };
      });
    case CANCELLED_RESERVE: {
      return state.map((state) => {
        if (state.id !== action.id) {
          return state;
        }
        return { ...state, reserved: false };
      });
    }
    default: return state;
  }
};

export const reservedRocket = (id) => ({
  type: RESERVED_ROCKET,
  id,
});

export const cancelledReserve = (id) => ({
  type: CANCELLED_RESERVE,
  id,
});

export default rockets;
