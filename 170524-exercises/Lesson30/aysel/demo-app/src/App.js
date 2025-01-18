import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

export function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin() {
    setCurrentPage("login");
    setMessage("Successfully logged in!");
  }
  function handleRegister() {
    setCurrentPage("register");
    setMessage("Account created successfully!");
  }

  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>Welcome to my very first React app!</p>
      <div className="row">
        <Button label="Log in" handleClick={handleLogin} />
        <Button label="Register" handleClick={handleRegister} />
      </div>
      {message && <p className="message">{message}</p>}
      {currentPage === "login" && <p>Log in component</p>}
      {currentPage === "register" && <p>Register component</p>}
    </div>
  );
}
