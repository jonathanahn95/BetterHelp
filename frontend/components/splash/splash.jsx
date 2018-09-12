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
        <div className="header">
          <h3 className="name">BetterHelp</h3>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div >
          <header className="header">
            <h3 className="name">
              BetterHelp
            </h3>
          </header>
          <Link className="sign-up" to='/signup'>Sign Up</Link>
          <Link className="log-in" to='/login'>Log In</Link>
        </div>
      );
    }
  }
}

export default Splash;
