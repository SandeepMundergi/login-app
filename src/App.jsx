// src/App.js
import React, { useState } from "react";

import Navbar from "./Navbar";
import Dashboard from "./DashboardPage";
import LoginPage from "./LoginPage";
import DataTable from "./DataTable";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState("Sandeep");

  const handleLogin = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername("");
    setLoggedIn(false);
  };
  const randomData = [
    { name: "Sandeep", age: 30, email: "sandeep@example.com" },
    { name: "sandy", age: 25, email: "sandy@example.com" },
    { name: "tushar", age: 25, email: "tushar@example.com" },
    { name: "priyanka", age: 25, email: "priyanka@example.com" },
    { name: "varun", age: 25, email: "varun@example.com" },
  ];

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <Navbar username={username} onLogout={handleLogout} />
          <Dashboard />
          <button onClick={handleLogout}>logout</button>
          <div className="App">
            <DataTable data={randomData} />
          </div>
        </>
      ) : (
        <>
          <LoginPage onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
