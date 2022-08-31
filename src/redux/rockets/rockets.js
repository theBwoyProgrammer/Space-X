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
    const arr = [];
    response.map((res) => {
      arr.push(
        {
          id: res.id,
          name: res.rocket_name,
          description: res.description,
          image: res.flickr_images[0],
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
    default: return state;
  }
};

export default rockets;
