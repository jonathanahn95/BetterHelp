import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ReactStars from 'react-stars';
import Business from './business';
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
        <Business key={business.id}  business={business}  idx={idx} />)
    } else {
      businesses = <div></div>
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
              <Link className='nav-bar-container1-links' to={`/business_categories/${res}`}><i className="fas fa-utensils"></i><p >Restaurant</p></Link>
              <Link className='nav-bar-container1-links' to={`/business_categories/${home}`}><i className="fas fa-home"></i><p >Home Services</p></Link>
              <Link className='nav-bar-container1-links' to={`/business_categories/${cafe}`}><i className="fas fa-coffee"></i><p >Cafes</p></Link>
              <Link className='nav-bar-container1-links' to={`/business_categories/${boot}`}><i className="fas fa-keyboard"></i><p >Bootcamps</p></Link>
            </div>
            <div className='review-bar-container1'>
              <Link className='review-bar-container1-link' to={`/businesses/`}><i className="fas fa-pen"></i><p >Write a Review</p></Link>
            </div>
          </ul>

              <div>
              </div>

          <div className="main-business-container">
            <div className="business-container" >
              {businesses}
            </div>
            <div className='map-ad'>
              <BusinessMap id={'map-container'} businesses={this.props.businesses}/>
              <a href="https://github.com/jonathanahn95/"><img className="under-map-pic" src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"></img></a>
            </div>
            <div>
            </div>

          </div>

        </div>
      )
  }
}

export default withRouter(BusinessIndex);

// <Route path="" component={bic} render(()=>{}</Route>)
