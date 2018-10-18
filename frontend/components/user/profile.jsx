import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCategoryIndexContainer from '../business_category/business_category_index_container';
import SearchFormContainer from '../search/search_form_container';
import BusinessIndexContainer from '../businesses/business_index_container';
import Business from '../businesses/business_index_container';

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
    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>
              <SearchFormContainer className={'nav-sear-container'}/>

          </h1>
        </header>
        <ul className='ul-nav-bar-item2'>
          <div className='nav-bar-container1'>
            <Link className='nav-bar-container1-links' to={`/business_categories/${res}`}><i class="fas fa-utensils"></i><p >Restaurant</p></Link>
            <Link className='nav-bar-container1-links' to={`/business_categories/${home}`}><i class="fas fa-home"></i><p >Home Services</p></Link>
            <Link className='nav-bar-container1-links' to={`/business_categories/${cafe}`}><i class="fas fa-coffee"></i><p >Cafes</p></Link>
            <Link className='nav-bar-container1-links' to={`/business_categories/${boot}`}><i class="fas fa-keyboard"></i><p >Bootcamps</p></Link>
          </div>
          <div className='review-bar-container1'>
            <Link className='review-bar-container1-link' to={`/businesses/`}><i class="fas fa-pen"></i><p >Write a Review</p></Link>
          </div>
        </ul>

        <div className='top-results-wrapper'>
          <div className='top-results-wrapper2'>
            <img className='drop-down-pic' src='https://s3.amazonaws.com/betterhelp-dev/dropdown.png'></img>

          </div>
        </div>
      </div>
    )
  }

}


export default Profile;
