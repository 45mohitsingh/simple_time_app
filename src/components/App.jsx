import React, { useState } from "react";

function App() {
var [time,timefn]=useState(new Date().toLocaleTimeString());
  function getTime(){
  let timeNow = new Date().toLocaleTimeString();
  // console.log(timeNow);
   timefn(timeNow);
   {setInterval(getTime, 1000)}
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>GetTime</button>
      
     
    </div>
  );
}

export default App;
