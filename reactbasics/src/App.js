import React from "react";
import peoples from "./database";

function App() {
  return (
    <div className="container">
      <Person person={peoples[0]}>
        <span> Address: 1878, Willington st. </span>
      </Person>
      <Person person={peoples[1]} />
      <Person person={peoples[2]} />
      <Person person={peoples[3]} />
      <Person person={peoples[4]} />
      <Person person={peoples[5]} />
    </div>
  );
}

function Person(props) {
  const { name, job, age, company } = props.person;

  return (
    <div className="person">
      <h2> {name} </h2>
      <p> {job} </p>
      <span>{age} </span>
      <h4>{company}</h4>
      <h6>{props.children}</h6>
    </div>
  );
}

export default App;

// {person:{ name, job, age, company }} // props destructuring way
// const { children } = props;
