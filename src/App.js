import React, { useState } from 'react';
import './App.css';
import AppInfo from './AppInfo';
import CreateCanvas from './CreateCanvas';
import Header from './Header';
import TrophyCabinet from './TrophyCabinet';

function App() {
  const [name, setName] = useState('');
  const [elevation, setElevation] = useState(5800);

  return (
    <div className='appWrapper'>
      <Header />



            <AppInfo 
            name={name}
            elevation= {elevation}
            />

            <CreateCanvas 
            elevation= {elevation}
            />

            <TrophyCabinet
            elevation= {elevation}
            />

            <div className='footerDiv'>

            </div>

      
    </div>
  );
}

export default App;
