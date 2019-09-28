import React, {Component} from 'react';
import './TwitterFeed.css';
import twitterIcon from '../image/Twitter-icon.png';
import avatarIcon from '../image/avatar-icon.png';
class TwitterFeed extends Component{

  render(){
    //let defaultValue = this.props.defaultValue || {};
    return(
        <div className="twitter rowElements">
          <div className="twitterTitle">
            <div className="twitterLogo rowElements">
              <img src={twitterIcon} alt="logo" />
            </div>
            <h1>
              Twitter Feed <small>#France</small>
            </h1>
          </div>

          <ul>
            <li className="twitterPost">              
              <img src={avatarIcon} alt="icon" className="twitterPostIcon" />              
              <p>
                Don't forget your sunscreen tomorrow.
              </p>
            </li>

            <li className="twitterPost">
              <img src={avatarIcon} alt="icon" className="twitterPostIcon" />              
              <p>
                Amazing weather in Paris!
              </p>
            </li>                
          </ul>

        </div>
    )
  }
}
export default TwitterFeed;