// Import the new Banner component you created.
// Nest the Banner component inside the App() function.

import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";

// Import useState from "react".
import React, {useState} from "react"

//Import satData.jsx as satData.
import satData from "./components/satData";


function App() {
  //sat will be used to compare changes in state. setSat is a function that will be used to update the state.
  //We set this array equal to the useState function. useState is passed satData.
  const [sat, setSat] = useState(satData);

  //create the second variable, called displaySats
  //displaySats variable will use the Set method to create a new array that holds unique elements. 
  //This function will be used to create the buttons, so we want to pull out the orbitType values of each object inside satData.
  //The Set method prevents duplicate elements.
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  
  /*This function will take a parameter that you can call currentType.
Inside this function, you will update the displaySats variable using the filter method.
filter is similar to map, in that it will iterate through a collection until it finds the desired element.
filter requires a callback, call the callback newSatDisplay.
The filter function will return the newSatDisplay.orbitType that is equal to currentType.
Close the filter function’s return statement.
Before closing the arrow function, we want to update setSat by passing it the newly updated displaySats
  */
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };
  return (
    //we need to provide props for the Buttons and Table components.
     <div>
        <Banner />
        <Buttons
     filterByType={filterByType}
     setSat={setSat}
     displaySats={displaySats}
   />
   <Table sat={sat} />
     </div>
  );
}

export default App;