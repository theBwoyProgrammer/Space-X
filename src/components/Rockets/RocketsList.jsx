import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';

const SkyRockets = () => {
  const skyRoc = useSelector((state) => state.rocket);
  console.log(skyRoc);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div>
      Rockets here.
    </div>
  );
};

export default SkyRockets;
