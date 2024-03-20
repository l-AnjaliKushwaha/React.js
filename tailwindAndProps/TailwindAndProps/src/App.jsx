import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  
    let myObj = {
      username : "anjali",
      age: 20
    }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card channel="react" btnTxt="click me" />
      <Card channel="anjali" btnTxt="visit me" />
    </>
  );
}

export default App
