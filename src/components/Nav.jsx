import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Rockets from './Rockets';
import Profile from './Profile';
import Missions from './Missions';

const Nav = () => (
  <>
    <header className="header">
      <div className="divIcon">
        <h6>icon</h6>
        <h1>Space Travel`s` Hub</h1>
      </div>
      <nav className="nav">
        <NavLink className="link" to="/Rockets">rockets</NavLink>
        <NavLink className="link" to="/Missions">missions</NavLink>
        <NavLink className="link" to="/Profile">my profile</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/Rockets" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
);

export default Nav;
