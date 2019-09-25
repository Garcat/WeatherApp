import React, {Component} from 'react';
import './CurrentWeather.css';

class CurrentWeather extends Component{  

  render(){
    //let defaultValue = this.props.defaultValue || 'Sydney';
    return(
      <React.Fragment>
        <div className="mainTemp">12°</div>
        <div className="mainCondition">CLOUDY</div>

        <div className="conditions">
          <div className="mainHum rowElements">
              <div className="conditionCaption">HUMIDITY</div> 
              <div className="conditionValue">64%</div>
          </div>

          <div className="divider rowElements">
          </div>

          <div className="mainWind rowElements">
            <div className="conditionCaption">WIND</div>
            <div className="conditionValue">12 k/M</div> 
          </div>
        </div>
      </React.Fragment>  
    )
  }
}
export default CurrentWeather;