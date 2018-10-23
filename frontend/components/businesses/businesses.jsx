import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Business from './business';
import { Route } from 'react-router-dom';
import BusinessMap from '../map/business_map';
import SearchFormContainer from '../search/search_form_container';

class Businesses extends React.Component {
  componentDidMount() {
    this.props.requestSelectedBusinessCategories(this.props.category);
    this.props.requestAllBusinessCategories();
  }

  componentDidUpdate(previousProps) {
    // gets hit anytime comp receive new props/new state
    // works same as componentWillReceiveProps
    if (previousProps.category !== this.props.category)
    {
      this.props.requestSelectedBusinessCategories(this.props.category);
    }
  }

  render() {

    let res, home, cafe, boot;
    const businessCategory = this.props.businessCategories;
    if (businessCategory.length > 0){
      res = businessCategory[0].id;
      home = businessCategory[1].id;
      cafe = businessCategory[2].id;
      boot = businessCategory[3].id;
    }
    let selectedBusCategories = [];
    this.props.businesses.forEach( business => {
      if (this.props.category === business.business_category_id.toString()){
        selectedBusCategories.push(business);
      }
    });

    const businesses = selectedBusCategories.map( (business, idx) =>
        <Business key={business.id}  business={business}  idx={idx}/>)
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

          <div>
        </div>
        <div className='top-results-wrapper'>
          <div className='top-results-wrapper2'>
            <div className='top-res-name'>
              <div className='top-results-home'>
                Top {this.props.businessCategoryName} Results
              </div>
            </div>
            <div className='top-res-cat'>
              in New York, NY
            </div>
          </div>
        </div>

        <div className="main-business-container">
          <div className="business-container" >
            {businesses}
          </div>
          <div className='map-ad'>
            <BusinessMap id={'map-container'} businesses={selectedBusCategories} multiple={true}/>
            <a href="https://github.com/jonathanahn95/"><img className="under-map-pic" src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"></img></a>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(Businesses);

// <Route path="" component={bic} render(()=>{}</Route>)
