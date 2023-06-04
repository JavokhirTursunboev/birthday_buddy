import React from "react";
import Person from "./../Person/Person";
import './list.css'
const List = (props) => {
  return (
    <div className="list">
      {props.people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
