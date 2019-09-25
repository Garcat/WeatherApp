import React, {Component} from 'react';
import './FutureWeather.css';

import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import {
   faCloudRain,  
   faSun, 
   faCloudSun, 
   faWind, 
   faUmbrella 
  } from '@fortawesome/free-solid-svg-icons'

class FutureWeather extends Component{

  render(){
    //let defaultValue = this.props.defaultValue || {};
    return(
      <React.Fragment>
        <div className="next1Day rowElements">
          <div className="nextDayCaption">
            MON
          </div>
          <div className="next1DayImg">                    
            <FontAwesomeIcon icon={faUmbrella} />
          </div>
          <div className="next1DayTemp">
            9
          </div>
          <div className="next1DayCondition">
            RAINING
          </div>              
        </div>

        <div className="next1Day rowElements">
          <div className="nextDayCaption">
            TUE
          </div>
          <div className="next1DayImg">                    
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className="next1DayTemp">
            15
          </div>
          <div className="next1DayCondition">
            RAINING
          </div>
        </div>   

        <div className="next1Day rowElements">
          <div className="nextDayCaption">
            WED
          </div>
          <div className="next1DayImg">                    
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="next1DayTemp">
            11
          </div>
          <div className="next1DayCondition">
            RAINING
          </div>
        </div>   
          
        <div className="next1Day rowElements">
          <div className="nextDayCaption">
            THU
          </div>
          <div className="next1DayImg">                    
            <FontAwesomeIcon icon={faCloudRain} />
          </div>
          <div className="next1DayTemp">
            7
          </div>
          <div className="next1DayCondition">
            RAINING
          </div>
        </div>   
          
        <div className="next1Day rowElements">
          <div className="nextDayCaption">
            FRI
          </div>
          <div className="next1DayImg">
            <FontAwesomeIcon icon={faWind} />
          </div>
          <div className="next1DayTemp">
            18°
          </div>
          <div className="next1DayCondition">
            WINDY
          </div>
        </div>          
      </React.Fragment>
    )
  }
}
export default FutureWeather;