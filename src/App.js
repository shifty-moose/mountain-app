import React, { useState } from 'react';
import './App.css';
import AppInfo from './AppInfo';
import CreateCanvas from './CreateCanvas';

function App() {
  const [name, setName] = useState('');
  const [elevation, setElevation] = useState(1000);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    if (name === 'name') {
      setName(value);
    } else if (name === 'elevation') {
      const newElevation = value.trim() === '' ? value : parseInt(value, 10);
      setElevation(newElevation);
    };
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation logic here
    const isNameValid = name.trim() !== '';
    const isElevationValid = elevation.trim() !== '';

    setIsValid(isNameValid && isElevationValid);
  };

  return (
    <div>
      <h1>Welcome to the Mountain App!</h1>
      <form onSubmit={handleSubmit}>
        <p>Please enter your name:</p>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <p>Please enter the elevation climbed:</p>
        <input type="text" name="elevation" value={elevation} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

            <AppInfo 
            name={name}
            elevation= {elevation}
            isValid={isValid} />

            <CreateCanvas 
            elevation= {elevation}
            />

            <div className='footerDiv'>
              
            </div>

      
    </div>
  );
}

export default App;
