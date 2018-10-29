import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCategoryIndexContainer from '../business_category/business_category_index_container';
import SearchFormContainer from '../search/search_form_container';
import BusinessIndexContainer from '../businesses/business_index_container';
import Business from '../businesses/business_index_container';
import UserReview from './user_reviews'

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchCurrentUser(this.props.currentUser.id);
    this.props.requestAllBusinessCategories();
  }

  render() {

    let res, home, cafe, boot;
    if (this.props.businessCategories.length > 0){
      res = this.props.businessCategories[0].id;
      home = this.props.businessCategories[1].id;
      cafe = this.props.businessCategories[2].id;
      boot = this.props.businessCategories[3].id;
    }

    let reviewLength;
    if (this.props.reviews){
      reviewLength =
      <div className='num-of-reviews'>
        You have {this.props.reviews.length} written reviews
      </div>
    }

    let userReviews;
    if (this.props.reviews){
      userReviews = this.props.reviews.map( review => {
        return <UserReview review={review}/>
      })
	}

  let brandName;
  if (this.props.currentUser){
    brandName = 'small-brand-name2'
  } else {
    brandName = 'small-brand-name'
  }



    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            <Link to="/"><img className={brandName} src={window.betterHelpSplash}></img></Link>
              <SearchFormContainer className={'nav-sear-container'}/>

          </h1>
        </header>
        <div className='ul-nav-bar-item2-wrapper'>
          <ul className='ul-nav-bar-item2'>
            <div className='nav-bar-container1'>
              <Link className='nav-bar-container1-links' to={`/business_categories/${res}`}><i className="fas fa-utensils"></i><p >Restaurant</p></Link>
              <Link className='nav-bar-container1-links' to={`/business_categories/${home}`}><i className="fas fa-home"></i><p >Home Services</p></Link>
              <Link className='nav-bar-container1-links' to={`/business_categories/${cafe}`}><i className="fas fa-coffee"></i><p >Cafes</p></Link>
              <Link className='nav-bar-container1-links' to={`/business_categories/${boot}`}><i className="fas fa-keyboard"></i><p >Bootcamps</p></Link>
            </div>
            <div className='review-bar-container1'>
              <Link className='review-bar-container1-link' to={`/businesses/`}><i className="fas fa-pen"></i><p >Write a Review</p></Link>
            </div>
          </ul>
        </div>


        <div className='user-prof-wrapper'>
          <img className='user-prof-picture' src='https://s3.amazonaws.com/betterhelp-dev/dropdown.png'></img>
          <div className='user-prof-wrapper2'>
            <div className='user-prof-full-name'>
              <div className='user-prof-fname'>
                {this.props.currentUser.fname}
              </div>
              <div>
                {this.props.currentUser.lname}
              </div>
            </div>
            <div className='user-prof-location'>
              Manhattan, NY
            </div>
          </div>
        </div>

        {reviewLength}

        <div className='user-reviews-wrapper'>
          {userReviews}
        </div>
      </div>
    )
  }

}


export default Profile;
