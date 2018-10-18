import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCategoryIndexContainer from '../business_category/business_category_index_container';
import SearchFormContainer from '../search/search_form_container';
import BusinessIndexContainer from '../businesses/business_index_container';
import Business from '../businesses/business_index_container';
import SplashBusinesses from './splash_businesses';
import SplashReviews from './splash_reviews';
import SplashBusinessCategories from './splash_business_categories';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = this.props.businessCategories;
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {hidden: true};
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  componentDidMount() {
    this.props.requestAllBusinesses();
    this.props.fetchAllUnrelatedReviews();
  }

  toggleClass() {
     const currentState = this.state.hidden;
     this.setState({ hidden: !currentState });
   }


  render() {
    let businesses;
    let reviews  = this.props.reviews;
    let businessCategories;

    if (this.props.businessCategories){
      businessCategories = this.props.businessCategories.map( category =>
        <SplashBusinessCategories key={category.id} category={category} />)
    } else {
      businessCategories = <div></div>

    }
    if (this.props.reviews){
      reviews = this.props.reviews.reverse().slice(0,9).map( review =>
        <SplashReviews key={review.id} review={review} />)
    } else {
      reviews = <div></div>
    }
    if (this.props.businesses){
      businesses = this.props.businesses.slice(0,3).map( business =>
        <SplashBusinesses key={business.id} business={business} />)
    } else {
      businesses = <div></div>
    }


    let toggle = "dropped-down-list-hidden";
    let hiddenCar = 'fas fa-caret-up-hidden'
    if (!this.state.hidden === true) {
      toggle = "dropped-down-list";
      hiddenCar = 'fas fa-caret-up'
    }

    if (this.props.currentUser) {
      return (
        <div>
          <div className="container" style={{backgroundImage: `url(${window.splashBackground})`}}>

            <div className="header">
              <div className='header-nav'>
                <ul className="header-review">
                  <Link className="write-review" to="/businesses">Write a Review</Link>
                </ul>
                  <div className='logout'>
                    <img onClick={this.toggleClass} className='drop-down-pic' src='https://s3.amazonaws.com/betterhelp-dev/dropdown.png'></img>
                    <div onClick={this.toggleClass} className='caret-drop-down'><i class="fas fa-caret-down"></i></div>
                  </div>

              </div>


              <i className={hiddenCar}></i>
              <div className={toggle}>
                <div className='dropped-down-first'>
                  <img  className='dropped-down-pic' src='https://s3.amazonaws.com/betterhelp-dev/dropdown.png'></img>
                  <div  className='dropped-down-info-wrapper'>
                    <div className='dropped-down-name'>
                      <Link className='user-prof-link'to={`/user_prof/${this.props.currentUser.id}`}><div className='dropped-down-fname'>{this.props.currentUser.fname}</div></Link>
                      <Link className='user-prof-link'to={`/user_prof/${this.props.currentUser.id}`}><div className='dropped-down-fname'>{this.props.currentUser.lname}</div></Link>
                    </div>
                    <div className='dropped-down-location'>
                      Manhattan, NY
                    </div>
                  </div>
                </div>
                <div className='dropped-down-about'>
                  <div>
                    <i class="fas fa-user"></i>
                  </div>
                  <div className='dropped-down-about-me'>
                    <Link className='user-prof-link'to={`/user_prof/${this.props.currentUser.id}`}><p>About Me</p></Link>
                  </div>
                </div>
                <button className="dropped-down-logout-btn" onClick={this.handleClick}>Log Out</button>
              </div>
            </div>
            <div className="brand-name" >
              <BusinessCategoryIndexContainer/>
              <div className="search-bar-container">
                <SearchFormContainer className={'sear-container'}/>
              </div>
              <Link to="/"><img className="brand" src={window.betterHelpSplash}></img></Link>

            </div>
          </div>
          <div className='slogan-container'>
            <h3 className="slogan">
              Find the Best Businesses in Town
            </h3>
          </div>
          <div className='hot-new-sign'> Hot & New Businesses </div>

          <div className='display-bus'>
            {businesses}
          </div>

          <div className='recent-activity-wrapper'>
            <div className='recent-activity'>
              Recent Activities
            </div>
          </div>

          <div className='review-bus'>
            {reviews}
          </div>
          <div className='browse-category-container'>
            <div className='browse-category-wrapper'>
              <div className='browse-category'>
                Browse Businesses By Category
              </div>
            </div>
            <div className='category-bus'>
              {businessCategories}
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

                <SearchFormContainer className={'sear-container'} />
              </div>
              <Link to="/"><img className="brand" src={window.betterHelpSplash}></img></Link>
            </div>
          </div>

          <div className='slogan-container'>
            <h3 className="slogan">
              Find the Best Businesses in Town
            </h3>
          </div>

          <div className='hot-new-sign'> Hot & New Businesses </div>

          <div className='display-bus'>
            {businesses}
          </div>

          <div className='recent-activity-wrapper'>
            <div className='recent-activity'>
              Recent Activity
            </div>
          </div>

          <div className='review-bus'>
            {reviews}
          </div>

          <div className='browse-category-container'>
            <div className='browse-category-wrapper'>
              <div className='browse-category'>
                Browse Businesses By Category
              </div>
            </div>
            <div className='category-bus'>
              {businessCategories}
            </div>
          </div>


        </div>
      );
    }
  }
}


export default Splash;
