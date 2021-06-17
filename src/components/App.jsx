import React from "react";
import Login from "./Login"
import Input from "./Input"

var isLoggedIn = false; 

const currentTime = new Date(2021, 6, 16, 9).getHours();
console.log(currentTime);

function App() {
   return <div className="container" >{

    currentTime > 12 ? <h1>Why are you still working?</h1>  : <Login />

  }</div>
}

export default App;
