import React, {Component} from 'react';
import './CurrentWeather.css';

class CurrentWeather extends Component{  

  render(){    
    const { condition: 
              {text},
            humidity,
            temp_c,
            wind_kph              
          } = this.props          

    return(
      <React.Fragment>
        <div className="currentTemp">{temp_c}°</div>
        <div className="currentCondition">{text}</div>

        <ul className="conditions">
          <li className="currentHumidity rowElements">
            <h1>humidity</h1> 
            <p>{humidity}%</p>
          </li>

          <li className="currentWind rowElements">
            <h1>wind</h1>
            <p>{wind_kph}km/h</p> 
          </li>
        </ul>
      </React.Fragment>  
    )
  }
}
export default CurrentWeather;