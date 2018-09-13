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
            <img className="img-logo" src={window.handsUrl}></img>
          </div>
        </div>
      );
    } else {
      return (
        <div >
          <div className='container'>
            <div className="header">
              <div className="header-nav">
                <ul className="header-review">
                  <Link className="write-review" to="/review/">Write a Review</Link>
                </ul>
                <ul className="header-list">
                  <Link className="log-in" to='/login'>Log In</Link>
                  <Link className="sign-up" to='/signup'>Sign Up</Link>
                </ul>
              </div>
            </div>
            <div className="brand-name">
              BetterHelp
              <img className="img-logo" src={window.handsUrl}></img>
            </div>
          </div>
          <footer className="footer">
              <ul className="about-list">
                About
                <li>
                  <a href="https://github.com/jonathanahn95">BetterHelp Wiki</a>
                </li>
              </ul>
              <img className="footerImg" src={window.footerCityscape}></img>
              <ul className="discover-list">
                Discover
                <a href="https://github.com/jonathanahn95">Learn about me</a>
              </ul>
          </footer>
        </div>
      );
    }
  }
}


export default Splash;
