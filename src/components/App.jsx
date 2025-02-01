import React, { useState } from "react";

function App() {
  const [FName, setfName] = useState("");
  const [LName, setlName] = useState("");
  const [fullname, setFullName] = useState("");

  function fname(event) {
    setfName(event.target.value);
  }

  function lname(event) {
    setlName(event.target.value);
  }

  function handleClick(event) {
    setFullName(FName + " " + LName);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {fullname}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={fname}
          value={FName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={lname}
          value={LName}
          name="lName"
          placeholder="Last Name"
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
