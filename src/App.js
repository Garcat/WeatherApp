import React from 'react';

import BackButton from './Components/Buttons/BackButton';
import City from './Components/City';
import CurrentWeather from './Components/CurrentWeather';
import FutureWeather from './Components/FutureWeather';
import TwitterFeed from './Components/TwitterFeed';

import './App.css';

import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="container">
      <header>
        <FontAwesomeIcon icon={faBars} />
      </header>

      <main>
        <div className="leftSide">          
          <BackButton />                 
        </div>

        <div className="card">

          <div className="card_title">
            <div className="card_title_Left rowElements">
              <CurrentWeather />
            </div>
    
            <div className="card_title_Mid rowElements">
            </div>
    
            <div className="card_title_Right rowElements">
              <City name="FRANCE"/>
            </div>
          </div>
    
          <div className="card_detail">            
            <TwitterFeed />    
            <FutureWeather />    
          </div>
            
        </div>

        <div className="rightSide">
        </div>
      </main>
    </div>
  );
}

export default App;