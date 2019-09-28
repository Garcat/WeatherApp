import React, {Component} from 'react';
import './CurrentWeather.css';

class CurrentWeather extends Component{  

  render(){
    //let defaultValue = this.props.defaultValue || 'Sydney';
    return(
      <React.Fragment>
        <div className="mainTemp">12°</div>
        <div className="mainCondition">CLOUDY</div>

        <ul className="conditions">
          <li className="mainHum rowElements">
            <h1>humidity</h1> 
            <p>64%</p>
          </li>

          <li className="mainWind rowElements">
            <h1>wind</h1>
            <p>12 k/M</p> 
          </li>
        </ul>
      </React.Fragment>  
    )
  }
}
export default CurrentWeather;