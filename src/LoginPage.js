import React from "react";
import "./App.css";
import DataTable from "./DataTable";

const randomData = [
  { name: "Sandeep", age: 30, email: "sandeep@example.com" },
  { name: "sandy", age: 25, email: "sandy@example.com" },
  { name: "tushar", age: 25, email: "tushar@example.com" },
  { name: "priyanka", age: 25, email: "priyanka@example.com" },
  { name: "varun", age: 25, email: "varun@example.com" },
];

function App() {
  return (
    <div className="App">
      <DataTable data={randomData} />
    </div>
  );
}

export default App;
