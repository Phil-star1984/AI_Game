import { React, useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  const URL = "http://localhost:8000/api";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
