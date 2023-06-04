import React from "react";
import Person from "./../Person/Person";

const List = (people) => {
  return (
    <>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </>
  );
};
export default List;
