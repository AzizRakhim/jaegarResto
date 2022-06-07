import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Foods from './object';
import Discount from './components/DIscount/Discount';
import Chart from './components/Chart/Chart';
import Mail from './components/Mail/Mail';
import Bell from './components/Bell/Bell';
import Setting from './components/Setting/Setting';
import { useState } from 'react';

function App() {
  let [chosen, setChosen] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home 
          obj={Foods} 
          chosen={chosen}
          setChosen={setChosen}  
        />} />
        <Route path='/discount' element={<Discount 
          obj={Foods} 
          chosen={chosen}
          setChosen={setChosen}
        />} />
        <Route path='/chart' element={<Chart 
          obj={Foods} 
          chosen={chosen}
          setChosen={setChosen}
        />} />
        <Route path='/mail' element={<Mail 
          obj={Foods} 
          chosen={chosen}
          setChosen={setChosen}
        />} />
        <Route path='/bell' element={<Bell 
          obj={Foods} 
          chosen={chosen}
          setChosen={setChosen}
        />} />
        <Route path='/setting' element={<Setting 
          obj={Foods} 
          chosen={chosen}
          setChosen={setChosen}
        />} />
      </Routes>
    </div>
  );
}

export default App;
