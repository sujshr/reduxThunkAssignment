import React, { useState } from "react";
import { fetchUserData, showError } from "./redux/Action";
import axios from "axios";
import { store } from "./redux/Store";
import User from "./components/User";
function fetchData() {
  return function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const userData = res.data;
        store.dispatch(fetchUserData(userData));
      })
      .catch((error) => {
        store.dispatch(showError(error.message));
      });
  };
}

export default function Counter() {
  console.log("called");
  const [userData, setData] = useState([]);

  store.subscribe(() => {
    setData(store.getState().users);
  });

  return (
    <div>
      <button onClick={store.dispatch(fetchData)}>Fetch Data</button>

      <br />
      <br />

      <button
        onClick={() => {
          setData([]);
        }}
      >
        Clear
      </button>

      <br />
      <br />
      <div>
        {userData.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}
