import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Club from './components/Club/Club';
// import playerData from './components/data/data.json';
import Header from './components/Header/Header';



function App() {
  // const [player, setPlayer] = useState([]);

  // useEffect(() => {
  //   setPlayer(playerData);
  //   console.log(playerData);
  //   // console.log(playerData);
  // }, [])

  return (
    <div >

      <Header></Header>
      <Club></Club>


    </div>
  );
}

export default App;
