import React, {Component} from 'react';

import './City.css';

class City extends Component{  
  render(){
    let defaultValue = this.props.name || 'FRANCE';
    return(    
      <div className="mainLocation">
        <div className="locationLabel">{defaultValue}</div> 
        <div className="slidebar"></div>
      </div>
    )
  }
}
export default City;