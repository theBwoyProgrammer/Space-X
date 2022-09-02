import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.mission);
  const rocket = useSelector((state) => state.rocket);
  const reservedmission = missions.filter((mission) => mission.reserved === true);
  const reservedrockets = rocket.filter((rockets) => rockets.reserved === true);
  return (
    <div className="grid">
      <div className="mission">
        <h3>My missions</h3>
        <ul className="ul">
          { reservedmission.map((mission) => (
            <li key={mission.id}>{mission.Mname}</li>
          )) }
        </ul>
      </div>
      <div className="mission">
        <h3>My rockets</h3>
        <ul className="ul">
          { reservedrockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          )) }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
