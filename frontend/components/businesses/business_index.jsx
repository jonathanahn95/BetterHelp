import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ReactStars from 'react-stars';
import BusinessToWriteReview from './business_to_write_review';
import BusinessMap from '../map/business_map';
import MarkerManager from '../../util/marker_manager';
import SearchFormContainer from '../search/search_form_container';

class BusinessIndex extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount() {
    this.props.requestAllBusinesses();
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

    let businesses;
    if (this.props.businesses) {
       businesses = this.props.businesses.map( (business, idx) =>
        <BusinessToWriteReview key={business.id}  business={business}  idx={idx} />)
    } else {
      businesses = <div></div>
    }

    let brandName;
    if (this.props.currentUser){
      debugger
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

          <div className='first-review-container'>
            <div className='awaits-container'>
                <h1 className='write-first-review'>Your First Review Awaits</h1>
                <h2 className='need-help-p'>Review your favorite businesses and share your experiences with our community. Need a little help getting started?</h2>
                <div><SearchFormContainer className={'nav-sear-container'}/></div>
            </div>
            <img className="write-pic" src="https://s3.amazonaws.com/betterhelp-dev/first_review.png"></img>
          </div>

          <div className="write-review-main-business-container">
            <div className='recent-businesses'>
              Been to these businesses recently?
            </div>
            <div className="write-review-business-container" >
              {businesses}
            </div>
          </div>

        </div>
      )
  }
}

export default withRouter(BusinessIndex);

// <Route path="" component={bic} render(()=>{}</Route>)
