import React from 'react';
import Rockets from './Rockets';

function RocketsList() {
  const state = {
    title: 'Falcon 1',
    descrip: 'Lorem Ipsum is a text used by developers for draft works showing where texts will appear',
  };
  return (
    <>
      <div>
        <Rockets
          title={state.title}
          descrip={state.descrip}
        />
      </div>
    </>
  );
}

export default RocketsList;
