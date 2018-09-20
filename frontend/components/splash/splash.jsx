import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCategoryIndexContainer from '../business_category/business_category_index_container';
import SearchFormContainer from '../search/search_form_container';
import BusinessIndexContainer from '../businesses/business_index_container';

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
    debugger
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
              <Link to={`/business_categories/89`}><img className="pop-cat" src="https://s3.amazonaws.com/betterhelp-dev/new-res.jpg"></img></Link>
              <Link to={`/business_categories/90`}><img className="pop-cat" src={window.homeServices}></img></Link>
              <Link to={`/business_categories/91`}><img className="pop-cat" src={window.cafe}></img></Link>
              <Link to={`/business_categories/92`}><img className="pop-cat" src={"https://s3.amazonaws.com/betterhelp-dev/node.jpg"}></img></Link>
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
              <Link to={`/business_categories/89`}><img className="pop-cat" src="https://s3.amazonaws.com/betterhelp-dev/new-res.jpg"></img></Link>
              <Link to={`/business_categories/90`}><img className="pop-cat" src={window.homeServices}></img></Link>
              <Link to={`/business_categories/91`}><img className="pop-cat" src={window.cafe}></img></Link>
              <Link to={`/business_categories/92`}><img className="pop-cat" src={"https://s3.amazonaws.com/betterhelp-dev/node.jpg"}></img></Link>
            </div>
          </div>
        </div>
      );
    }
  }
}


export default Splash;
