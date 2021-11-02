import { useState } from "react";
import "./style.css";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  function HandleLogin() {
    setUser(userInput);
    setIsLoggedIn(true);
  }

  return (
    <>
      <form className="form">
        <input
          placeholder="your name here"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
      </form>
      <button className="button" onClick={HandleLogin}>
        Enter your name
      </button>
    </>
  );
}

export default GetUserComponent;
