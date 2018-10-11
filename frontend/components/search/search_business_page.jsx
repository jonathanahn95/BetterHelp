import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Business from '../businesses/business';
import BusinessMap from '../map/business_map';
import SearchFormContainer from '../search/search_form_container';
import SearchDropDown from '../search/search_drop_down';

class SearchBusinessPage extends React.Component {
  constructor(props){
    super(props);
  }

  //
  componentDidMount() {
    this.props.searchBusinesses(this.props.location.search.slice(1));
  }

  render() {
    let searchedBusinesses = this.props.searchedBusinesses.map( (business, idx) =>
       <Business key={business.id}  business={business} idx={idx} />
     );
    let searchedBusinesses1 = this.props.searchedBusinesses.map( (business, idx) =>
       <SearchDropDown key={business.id}  business={business} idx={idx} />
     );

    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>
              <SearchFormContainer className={'nav-sear-container'}/>
          </h1>
        </header>
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
      <div className="main-business-container">
        <div className="business-container" >
          {searchedBusinesses}
        </div>
        <div className='sear-ad-cont'>
          <BusinessMap/>
          <a href="https://github.com/jonathanahn95/"><img className="under-map-pic" src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"></img></a>
        </div>
      </div>

    </div>


    );
  }


}

export default withRouter(SearchBusinessPage);
