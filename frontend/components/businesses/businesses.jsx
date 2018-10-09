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
    const businesses = this.props.businesses.map( (business, idx) =>
      <Business key={business.id}  business={business}  idx={idx}/>)
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
                <Link to={`/businesses`}><p className='nav-bar-item'>Write a Review</p></Link>
                </div>
              </ul>
            </div>
          <div>
        </div>

        <div className="main-business-container">
          <div className="business-container" >
            {businesses}
          </div>
          <div className='cat-ad-cont'>
            <BusinessMap/>
            <a href="https://github.com/jonathanahn95/"><img className="under-map-pic" src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"></img></a>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(Businesses);

// <Route path="" component={bic} render(()=>{}</Route>)
