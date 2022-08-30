/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function Rockets({ title, descrip }) {
  return (
    <>
      <p>{title}</p>
      <p>{descrip}</p>
    </>
  );
}

Rockets.propTypes = { title: PropTypes.string.isRequired, descrip: PropTypes.string.isRequired };
export default Rockets;
