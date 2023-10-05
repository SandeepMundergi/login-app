import React, { useState } from "react";

const DataTable = ({ data }) => {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="data-table">
      <input
        type="text"
        placeholder="Search by name..."
        value={filter}
        onChange={handleFilterChange}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
