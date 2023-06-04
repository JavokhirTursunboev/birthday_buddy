import React, { useState } from "react";
import List from "./components/List/List";
import data from "./data";
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
      </section>
      <List people={people} />
    </div>
  );
};

export default App;
