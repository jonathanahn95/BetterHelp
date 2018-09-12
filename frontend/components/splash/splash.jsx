import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="container">
          <div className="header">
            <div className='header-nav'>
              <button className="logout" onClick={this.handleClick}>Log Out</button>
            </div>
          </div>
          <div className="brand-name">
            BetterHelp
            <img className="img-logo" src="https://www.logolynx.com/images/logolynx/fc/fc2799793124eaf88bc00b8339adbac7.jpeg"></img>
          </div>
        </div>
      );
    } else {
      return (
        <div >
          <div className='container'>
            <div className="header">
              <div className="header-nav">
                <p>logo</p>
                <ul className="header-list">
                  <Link className="log-in" to='/login'>Log In</Link>
                  <Link className="sign-up" to='/signup'>Sign Up</Link>
                </ul>
              </div>
            </div>
            <div className="brand-name">
              BetterHelp
              <img className="img-logo" src="https://www.logolynx.com/images/logolynx/fc/fc2799793124eaf88bc00b8339adbac7.jpeg"></img>
            </div>
          </div>
        </div>
      );
    }
  }
}


export default Splash;
