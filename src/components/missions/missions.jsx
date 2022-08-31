import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMission } from '../../redux/missions/mission';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>mission</td>
          <td>description</td>
          <td>status</td>
          <td>kikitu</td>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.Mname}</td>
            <td>
              {mission.description}
            </td>
            <td><button type="button">active</button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
