import React from 'react';

import CurrentWeather from './Components/CurrentWeather';
import FutureWeather from './Components/FutureWeather';
import TwitterFeed from './Components/TwitterFeed';

import twitterIcon from './image/Twitter-icon.png';
import './App.css';

import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="head">
          =
        </div>

        <div className="main">
          <div className="leftSide">
              <div className="backButton">
                <div className="backImg">                  
                  <FontAwesomeIcon icon={faArrowCircleLeft} />  
                </div>
                <div className="backCaption">
                  BACK
                </div>
              </div>
          </div>

          <div className="mainTab">

            <div className="mainTop">
              <div className="topLeft rowElements">
                <CurrentWeather />
              </div>
      
              <div className="topMid rowElements">
              </div>
      
              <div className="topRight rowElements">
                <div className="mainLocation">
                  <div className="locationCaption">FRANCE</div> 
                  <div className="slidebar"></div>
                </div>
              </div>
            </div>
      
            <div className="mainBottom">
              
              <div className="twitter rowElements">
                <div className="twitterTitle">
                  <div className="twitterLogo rowElements">
                    <img src={twitterIcon} alt="logo" />
                  </div>
                  <div className="titleCaption rowElements">
                    Twitter Feed
                  </div>
                  <div className="twitterLocation rowElements">
                    #France
                  </div>
                </div>
      
                <div className="twitterPosts">      
                  <TwitterFeed props="#France"/>
                </div>
              </div>
      
              <div className="futureWeather rowElements">
                <FutureWeather />
              </div>      
            </div>
              
          </div>

          <div className="rightSide">
          </div>
        </div>

        <div className="footer"></div>  
      </div>

    </div>
  );
}

export default App;