import React from 'react';
import Profilecomposant from "./profile/Profilecomposant"
import './App.css';
const profile ={}
function App() {
  return (
    <div className="App">
     <Profilecomposant fullName="kjhds" bio="ddss" profession="dqsqd">
       <img style={{borderradius: "20px" }} src="https://i.skyrock.net/8034/92018034/pics/3238631469_1_3_x5cYkxeV.jpg" alt="" width="300" height="300" />
     </Profilecomposant>
    </div>
  );
}

export default App;
