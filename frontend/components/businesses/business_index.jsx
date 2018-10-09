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
  }




  render() {

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
              <SearchFormContainer/>
            </h1>
          </header>
          <div className='header-nav-bar'>
                <ul className='ul-nav-bar-item1'>
                  <div className='nav-bar-container'>
                    <Link to={`/business_categories/9`}><p className='nav-bar-item'>Restaurant</p></Link>
                    <Link to={`/business_categories/10`}><p className='nav-bar-item'>Home Services</p></Link>
                    <Link to={`/business_categories/11`}><p className='nav-bar-item'>Cafes</p></Link>
                    <Link to={`/business_categories/12`}><p className='nav-bar-item'>Bootcamps</p></Link>
                  </div>
                  <div className='review-bar-container'>
                    <Link to={`/businesses/`}><p className='nav-bar-item'>Write a Review</p></Link>
                  </div>
                </ul>
              </div>
              <div>
              </div>

          <div className="main-business-container">
            <div className="business-container" >
              {businesses}
            </div>
            <div className='map-ad'>
              <BusinessMap businesses={businesses}/>
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
