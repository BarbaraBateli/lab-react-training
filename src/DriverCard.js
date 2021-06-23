import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h5 className="card-title"><Rating>{props.Rating}</Rating>
          </h5>
          <h5 className="card-title">{props.car.model}</h5>
          <h5 className="card-title">{props.car.licensePlate}</h5>
        </div>
      </div>
    </div>
  );
}
export default DriverCard;
