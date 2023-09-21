import React from 'react';
import './App.css';
import Counter from './components/counter';
import Collectable from "./components/collectable";
import CollectableList from "./components/collectableList";

function App() {
  return (
    <div>
      <div>
      <hr></hr>
      <h1>Her er en PWA</h1>
      < Collectable />
      <hr></hr>
      </div>
      <Counter />
      <hr />
      < CollectableList />
    </div>
  );
}

export default App;