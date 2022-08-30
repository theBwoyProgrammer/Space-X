import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMission } from '../../redux/missions/mission';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  console.log(missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, []);

  return (
    <div>
      hellow
    </div>
  );
};

export default Missions;
