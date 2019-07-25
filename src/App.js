import React, { useState } from 'react';
import Form from './form'
import logo from './logo.svg';
import './App.css';

function App() {

  const [formState, setformState] = useState({
    name: "",
    email: "",
    role: ""
  });


  return (
    <div className="App">
      <Form formStateName={formState.name}/>
    </div>
  );
}

export default App;
