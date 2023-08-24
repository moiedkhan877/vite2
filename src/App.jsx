import React, { useState } from "react";
const App = () => {
  //vanilla javascript isme likhengen

  const [username, setusername] = useState("");
    const [skill, setskill] = useState("");

  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(username, skill);
};

  return (
    <div>

<form onSubmit={SubmitHandler}>
  <input  
  onChange={(e) => setusername(e.target.value)}
  value={username}
  type="text"
  placeholder="username" 
  />

<br /> <br />

  <input 
 onChange={(e) => setskill(e.target.value)}
 value={skill}
 type="text"
 placeholder="skill" 
  />

<br /> <br />

  <button>submit</button>
</form>

    </div>

  );
};

export default App
