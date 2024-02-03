import React from "react";

export default function User(props) {
  const user = props.user;
  return (
    <div>
      <div>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
      </div>
      <br />
      <hr></hr>
      <br />
    </div>
  );
}
