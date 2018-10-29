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

    let map;
    if (this.props.businesses.length > 0){
      map =
       <div>
        <div></div>
        <div className='map-ad'>
          <BusinessMap id={'map-container'} businesses={selectedBusCategories} multiple={true}/>
          <a href="https://github.com/jonathanahn95/"><img className="under-map-pic" src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"></img></a>
        </div>
      </div>
    }

    const businesses = selectedBusCategories.map( (business, idx) =>
        <Business key={business.id}  business={business}  idx={idx}/>)


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


          <div>
        </div>
        <div className='top-results-wrapper'>
          <div className='top-results-wrapper2'>
            <div className='top-category-results'>
              <div className='top-category-results1'>
              <div className='top-res-name'>
                <div className='top-results-home'>
                  Top {this.props.businessCategoryName} Results
                </div>
              </div>
              <div className='top-res-cat'>
                in New York, NY
              </div>
            </div>
              <div className='show-num-bus'>
                Showing 1-{businesses.length} of 20
              </div>
            </div>
            <div className='top-results-wrapper3'>
              <ul className='top-wrapper3-sec-1'>
                <li className='sec-1-li'>$</li>
                <li className='sec-2-li'>$$</li>
                <li className='sec-3-li'>$$$</li>
                <li className='sec-4-li'>$$$$</li>
              </ul>
              <div className='top-wrapper3-sec-2'>
                <div className='sec-2-noise'>
                  Noise Level:
                </div>
                <ul className='sec-2-noise-levels'>
                  <li className='noise-1-li'>Quiet</li>
                  <li className='noise-2-li' >Average</li>
                  <li className='noise-3-li' >Loud</li>
                  <li className='noise-4-li' >Very Loud</li>
                </ul>
              </div>
              <div className='top-wrapper3-sec-3'>
                <div className='sec-3-del'>
                  Delivers:
                </div>
                <ul className='sec-3-del-options'>
                  <li >
                    Yes
                  </li>
                  <li>No</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-business-container">
          <div className="business-container" >
            {businesses}
          </div>
          {map}
       </div>

      </div>
    )
  }
}

export default withRouter(Businesses);

// <Route path="" component={bic} render(()=>{}</Route>)
