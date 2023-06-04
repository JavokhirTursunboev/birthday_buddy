import React, { useState } from "react";

import List from "./components/List/List";
import data from "./data";
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="app">
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} className="person__container" />
      </section>
    </div>
  );
};

export default App;
