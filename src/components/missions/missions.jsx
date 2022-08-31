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
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>

      </tbody>
    </table>
  );
};

export default Missions;
