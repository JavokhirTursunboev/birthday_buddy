import React from "react";
import './person.css'
const Person = (props) => {
  return (
    <div className="person">
      <img src={props.image} alt={props.name} className="image" />
      <div className="text">
        <h4>{props.name}</h4>
        <p>{props.age} years</p>
      </div>
    </div>
  );
};

export default Person;
