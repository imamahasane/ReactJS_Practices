import React from 'react';
import Card from './components/Card.js';
import Data from './data.json';

function App() {
  
  let items = [];
  for (let i = 0; i < Data.length; i++) {
    items.push(<Card titleText={Data[i].title} descText={Data[i].desc} />);
  }

  return (
    <div className="app">
      <h1 className="headerStyle">To Do App</h1>
      {items}
    </div>
  );
}

export default App;
