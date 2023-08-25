import React, { useState } from "react";
import Create from "./components/create";
import Show from "./components/show";


const App = () => {
  //vanilla javascript isme likhengen

const [users, setusers] = useState([
  { username: "Moied khan", skill: "Back-end developer🧑🏻‍💻"},
]);

  
  return (

<div>
            <Create users={users} setusers={setusers} />
            <hr />
            <Show users={users} setusers={setusers} />
        </div>

  );
};

export default App
