import React from "react";
import satData from "./satData";
import "./styling.css";


/*Four clickable buttons
Three of them will use the props you passed from the App() function
One will display all of the satellites

Pass the props created from the App() function: filterByType, setSat, and displaySats.
Update the first button!
Provide two callbacks for the map function: id and sat.
The map function will return the first <button>.
An onClick method that points to filterByType() function.
Set the key equal to id.
Update the second button:
This button needs to be outside of the map function.
Inside the <button> tag, create an onClick function that points to setSat. Pass satData to setSat.
 */

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
    {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
          </button>
          
        );
    })}

    <button onClick={() => setSat(satData)}>All Orbits</button>
  </div>
);
};

export default Buttons;