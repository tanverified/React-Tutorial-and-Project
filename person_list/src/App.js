import React from "react";
import Person from "./Person";

function App() {
  return <div className="person_list">
      <Person id="61" name="Kim Harris" job="CEO" gender="men"/>
      <Person id="76" name="John Doe" job="Full Stack Developer" gender="men"/>
      <Person id="60" name="Nina Romero" job="UI Designer" gender="women"/>
      <Person id="44" name="Enrique Anderson " job="Accountant" gender="men"/>
      <Person id="51" name="Anna Hernandez" job="Human Resource Manager" gender="women"/>
      <Person id="67" name="Wesley Dunn" job="Sales Manager" gender="men"/>
  </div>;
}

export default App;
