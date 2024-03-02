import React from 'react';
import Navbar from './Containers/Navbar';
import Intro from './Containers/Intro';
import Contents from './Containers/Contents'
import Menus from './Containers/Menus';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Intro/>
      <Contents/>
      <Menus/>
    </React.Fragment>
  );
}

export default App;
