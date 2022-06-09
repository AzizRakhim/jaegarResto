import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Foods from './object';
import Discount from './components/DIscount/Discount';
import Chart from './components/Chart/Chart';
import Mail from './components/Mail/Mail';
import Bell from './components/Bell/Bell';
import Setting from './components/Setting/Setting';
import { useEffect, useState } from 'react';

function App() {
  let [obj, setObj] = useState(Foods);
  let [chosen, setChosen] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home 
          obj={obj} 
          chosen={chosen}
          setChosen={setChosen}  
        />} />
        <Route path='/discount' element={<Discount 
          obj={obj} 
          chosen={chosen}
          setChosen={setChosen}
        />} />
        <Route path='/chart' element={<Chart 
          obj={obj} 
          chosen={chosen}
          setChosen={setChosen}
        />} />
        <Route path='/mail' element={<Mail 
          obj={obj} 
          chosen={chosen}
          setChosen={setChosen}
        />} />
        <Route path='/bell' element={<Bell 
          obj={obj} 
          chosen={chosen}
          setChosen={setChosen}
        />} />
        <Route path='/setting' element={<Setting 
          obj={obj} 
          setObj={setObj}
          chosen={chosen}
          setChosen={setChosen}
        />} />
      </Routes>
    </div>
  );
}

export default App;
