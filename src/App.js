import './App.css';
import React,{useState} from 'react'
import { Main } from './Pages/Main';

function App() {
  return (
    <div className="App">
      {/* <nav>
        <button onClick={()=>setActive("firstCard")}>Home</button>
        <button onClick={()=>setActive("secondCard")}>About</button>
        <button onClick={()=>setActive("thirdCard")}>Contact</button>
      </nav>
      {active==="firstCard" && <Navbar title='1' />}
      {active==="secondCard" && <First title='2' />}
      {active==="thirdCard" && <Navbar title='3' />} */}
      <Main />
    </div>
  );
}

export default App;
