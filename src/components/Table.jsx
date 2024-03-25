import React from "react";
import "./styling.css";

 /*
     The body of the table will use the map function to render the data based on which button a user selects.
Iterate through the sat prop using map; use the following callbacks: id and data.
The map function will return data to each row in the table.
The <tr> tag in the table body needs a key. Set the key equal to the id.*/

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
     {sat.map((data) => (
        <tr key={data.id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{data.operational ? "Active":"Inactive"}</td>
          
        </tr>
      ))}
     </tbody>
   </table>
  );
};

export default Table;