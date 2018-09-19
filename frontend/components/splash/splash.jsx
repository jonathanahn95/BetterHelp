import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCategoryIndexContainer from '../business_category/business_category_index_container';
import SearchFormContainer from '../search/search_form_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = this.props.businessCategories;
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  // componentDidMount() {
  //   this.props.fetchBusinessCategories();
  // }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <div className="container" style={{backgroundImage: `url(${window.splashBackground})`}}>

            <div className="header">
              <div className='header-nav'>
                <ul className="header-review">
                  <Link className="write-review" to="/businesses">Write a Review</Link>
                </ul>
                <button className="logout" onClick={this.handleClick}>Log Out</button>
              </div>
            </div>
            <div className="brand-name" >
              <BusinessCategoryIndexContainer/>
              <div className="search-bar-container">
                <SearchFormContainer/>
              </div>
              <Link to="/"><img className="brand" src={window.betterHelpSplash}></img></Link>
            </div>

          </div>
          <div className='slogan-container'>
            <h3 className="slogan">
              Find the Best Businesses in Town
            </h3>
          </div>
          <div className="popular-categories-container">
            <div className='popular-categories'>
              <Link to={`/business_categories/9`}><img className="pop-cat" src={window.restaurant}></img></Link>
              <Link to={`/business_categories/10`}><img className="pop-cat" src={window.homeServices}></img></Link>
              <Link to={`/business_categories/11`}><img className="pop-cat" src={window.cafe}></img></Link>
              <Link to={`/business_categories/12`}><img className="pop-cat" src={window.codingBootcamp}></img></Link>

            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div >
          <div className="container" style={{backgroundImage: `url(${window.splashBackground})`}}>

            <div className="header">
              <div className="header-nav">
                <ul className="header-review">
                  <Link className="write-review" to="/businesses/">Write a Review</Link>
                </ul>
                <ul className="header-list">
                  <Link className="log-in" to='/login'>Log In</Link>
                  <Link className="sign-up" to='/signup'>Sign Up</Link>
                </ul>
              </div>
            </div>
            <div className="brand-name" >
              <BusinessCategoryIndexContainer/>
              <div className="search-bar-container">

                <input className= "search" type="search"></input>
              </div>
              <Link to="/"><img className="brand" src={window.betterHelpSplash}></img></Link>
            </div>

          </div>

          <div className='slogan-container'>
            <h3 className="slogan">
              Find the Best Businesses in Town
            </h3>
          </div>
          <div className="popular-categories-container">
            <div className='popular-categories'>
              <Link to={`/business_categories/9`}><img className="pop-cat" src={window.restaurant}></img></Link>
              <Link to={`/business_categories/10`}><img className="pop-cat" src={window.homeServices}></img></Link>
              <Link to={`/business_categories/11`}><img className="pop-cat" src={window.cafe}></img></Link>
              <Link to={`/business_categories/12`}><img className="pop-cat" src={window.codingBootcamp}></img></Link>

            </div>
          </div>

        </div>
      );
    }
  }
}


export default Splash;
