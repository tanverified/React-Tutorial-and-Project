import React from "react";

function Person({ name, job, id, gender }) {
  return (
    <div className="person">
      <img
        src={`https://randomuser.me/api/portraits/med/${gender}/${id}.jpg`}
        alt={`${id}thumbnail`}
      />
      <h3>{name}</h3>
      <h4>{job}</h4>
    </div>
  );
}

export default Person;
