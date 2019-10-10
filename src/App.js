import React, {Component} from 'react';

import BackButton from './Components/Buttons/BackButton';
import City from './Components/City';
import CurrentWeather from './Components/CurrentWeather';
import FutureWeather from './Components/FutureWeather';
import TwitterFeed from './Components/TwitterFeed';
import fetchData from './Util';

import './App.css';

import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class App extends Component{
  constructor(){
    super();
    this.state = {
      isLoading: true,
      city: 'Paris',
      currentParams: {
        url: 'http://api.weatherstack.com/current',
        access_key: '9df6988d3d9d5066e26865e2b682d21c',
        query: 'Paris',        
      },
      forecastParams: {
        url: 'https://api.apixu.com/v1/forecast.json',
        key: '1eb8b1de06614af3a3423418171609',
        q: 'Paris',        
      }
    }

  }

  fetchWeatherForecastData = async (days)=> {
    const {url} = this.state.forecastParams;    
    const param = {
      ...this.state.forecastParams,
      days
    };
    const res = await fetchData(url, param);
    const data = res.data;
    console.log(data)
    if (!data.error) {
      this.setState({
        data,
        isLoading: false,
      });
    }    
  }

  componentDidMount(){
    this.setState({
      isLoading: true,      
    })
    this.fetchWeatherForecastData(5);
  }

  render (){
    const { isLoading, city } = this.state;

    if (isLoading) return 'Loading...';

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
                <CurrentWeather { ...this.state.data.current }/>
              </div>
      
              <div className="card_title_Mid rowElements">
              </div>
      
              <div className="card_title_Right rowElements">
                <City name={city}/>
              </div>
            </div>
      
            <div className="card_detail">            
              <TwitterFeed />    
              <FutureWeather { ...this.state.data.forecast }/>    
            </div>
              
          </div>

          <div className="rightSide">
          </div>
        </main>
      </div>
    )
  };
}

export default App;