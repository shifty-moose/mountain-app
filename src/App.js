import React, { useState } from 'react';
import './App.css';
import AppInfo from './AppInfo';
import CreateCanvas from './CreateCanvas';
import Header from './Header';
import TrophyCabinet from './TrophyCabinet';

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
      <Header />



            <AppInfo 
            name={name}
            elevation= {elevation}
            isValid={isValid} />

            <CreateCanvas 
            elevation= {elevation}
            />

            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={name} onChange={handleChange} />
              <input type="text" name="elevation" value={elevation} onChange={handleChange} />
              <button type="submit">Submit</button>
            </form>

            <TrophyCabinet />

            <div className='footerDiv'>
              
            </div>

      
    </div>
  );
}

export default App;
