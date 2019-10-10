import React, {Component} from 'react';
import './FutureWeather.css';

class FutureWeather extends Component{

  render(){
    const { forecastday } = this.props;
    const weekday=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

    return(
      <div className="rowElements">
        <ul className="futureWeather">
          {forecastday.map( (item,key)=>
              <li key={key} className="day rowElements">
                <h1 className="day-label">
                  { weekday[new Date(item.date).getDay()]}
                </h1>
                <p>                    
                  <img src={item.day.condition.icon} alt={item.day.condition.text} />
                </p>
                <p>
                  {item.day.maxtemp_c}°
                </p>
                <p>
                  <small>{item.day.condition.text}</small>                  
                </p>              
              </li>
            )        
          }
        </ul>
      </div>
    )
  }
}
export default FutureWeather;