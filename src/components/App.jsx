import React, { useState } from "react";

function App() {
  setInterval(showTime, 1000);

  const now = new Date().toLocaleTimeString();
  var [Time, setTime] = useState(now);
  function showTime() {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }
  return (
    <div className="container">
      <h1>{Time}</h1>
    </div>
  );
}

export default App;
