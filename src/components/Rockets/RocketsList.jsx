import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Table } from 'react-bootstrap';
import { getRockets } from '../../redux/rockets/rockets';

const SkyRockets = () => {
  const skyRoc = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div>
      <>
        {skyRoc.map((rocket) => (
          <div key={rocket.id} className="rockets">
            <li>
              <img src={rocket.image} alt="" height={200} width={200} />
            </li>
            <div className="namerow">
              <li>{rocket.name}</li>
              <li>
                {rocket.description}
              </li>
              <li><button type="button">Reserve Rocket</button></li>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default SkyRockets;
