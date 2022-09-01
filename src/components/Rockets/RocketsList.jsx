import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button, Badge } from 'react-bootstrap';
import { getRockets, reservedRocket, cancelledReserve } from '../../redux/rockets/rockets';

const SkyRockets = () => {
  const skyRoc = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const reserve = (e) => {
    const { id } = e.target;
    dispatch(reservedRocket(id));
  };

  const cancel = (e) => {
    const { id } = e.target;
    dispatch(cancelledReserve(id));
  };

  return (
    <ListGroup>
      {skyRoc.map((rocket) => (
        <ListGroup.Item key={rocket.id} className="rockets border-0">
          <div>
            <img src={rocket.image} alt="" height={200} width={200} />
          </div>
          <div>
            <p className="heads">{rocket.name}</p>
            <p>
              {rocket.reserved && <Badge className="bg-info me-1">Reserved</Badge>}
              {rocket.description}
            </p>
            {!rocket.reserved && <Button type="button" variant="primary" onClick={reserve} id={rocket.id}>Reserve Rocket</Button>}
            {rocket.reserved && <Button type="button" variant="secondary" onClick={cancel} id={rocket.id}>Cancel Reservation</Button>}
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SkyRockets;
