import React, {Component} from 'react';

import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

import './BackButton.css';

class BackButton extends Component{  

  render(){
    //let defaultValue = this.props.defaultValue || 'Back';
    return(
      <div className="backButton">                      
        <FontAwesomeIcon icon={faArrowCircleLeft} />        
        <p>BACK</p>                
      </div>
    )
  }
}
export default BackButton;