import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Badge } from 'react-bootstrap';
import { getMission, joinMissions, leaveMissions } from '../../redux/missions/mission';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  console.log(missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  const joinmission = (e) => {
    e.preventDefault();
    dispatch(joinMissions(e.target.parentNode.parentNode.id));
  };

  const leavemission = (e) => {
    e.preventDefault();
    dispatch(leaveMissions(e.target.parentNode.parentNode.id));
  };

  return (
    <Table responsive>
      <thead>
        <tr>
          <td>mission</td>
          <td>description</td>
          <td>status</td>
          <td> </td>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id} id={mission.id}>
            <td>{mission.Mname}</td>
            <td>
              {mission.description}
            </td>
            <td>
              {mission.reserved && <Badge bg="info">Active Member</Badge>}
              {!mission.reserved && <Badge bg="secondary">NOT A MEMBER</Badge>}
            </td>
            <td>
              {mission.reserved && (
              <Button
                className="leave-btn"
                size="sm"
                variant="outline-danger"
                onClick={leavemission}
              >
                Leave Mission
              </Button>
              )}
              {!mission.reserved && (
                <Button
                  className="join-btn"
                  size="sm"
                  variant="outline-secondary"
                  onClick={joinmission}
                >
                  Join Mission
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
