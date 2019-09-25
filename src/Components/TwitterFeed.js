import React, {Component} from 'react';
import './TwitterFeed.css';
import avatarIcon from '../image/avatar-icon.png';
class TwitterFeed extends Component{

  render(){
    //let defaultValue = this.props.defaultValue || {};
    return(
      <React.Fragment>
        <div className="twitterPost">
          <div className="twitterPostIcon rowElements">
            <img src={avatarIcon} alt="icon" />
          </div>
          <div className="twitterPostContent rowElements">
            Don't forget your sunscreen tomorrow.
          </div>
        </div>

        <div className="twitterPost">
          <div className="twitterPostIcon rowElements">
            <img src={avatarIcon} alt="icon" />
          </div>
          <div className="twitterPostContent rowElements">
            Amazing weather in Paris!
          </div>
        </div>                
      </React.Fragment>
    )
  }
}
export default TwitterFeed;