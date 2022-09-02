import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.mission);
  const reservedmission = missions.filter((mission) => mission.reserved === true);
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
          <li>seee</li>
          <li>saw</li>
          <li>sawn</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
