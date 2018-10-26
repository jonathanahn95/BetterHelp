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
    this.state = {
      price: '',
      noise: "",
      delivery: ""
    };
    this.priceOne = this.priceOne.bind(this);
    this.priceTwo = this.priceTwo.bind(this);
    this.priceThree = this.priceThree.bind(this);
    this.priceFour = this.priceFour.bind(this);
    this.noiseQuiet = this.noiseQuiet.bind(this);
    this.noiseAverage = this.noiseAverage.bind(this);
    this.noiseLoud = this.noiseLoud.bind(this);
    this.noiseVeryLoud = this.noiseVeryLoud.bind(this);
    this.deliveryYes = this.deliveryYes.bind(this);
    this.deliveryNo = this.deliveryNo.bind(this);
  }

  componentDidMount() {
    this.props.searchBusinesses(this.props.location.search.slice(1));
    this.props.requestAllBusinessCategories();
  }

  componentWillReceiveProps(nextProps){

    if (this.props.location.search.slice(1) !== nextProps.location.search.slice(1)){
      this.props.searchBusinesses(nextProps.location.search.slice(1));
    }
  }

  priceOne(){
    if (this.state.price === ""){
      this.setState({ price: '1' });
      this.props.history.push(`/search`);
    } else {
      this.setState({ price: '' });
      this.props.history.push(`/search?price=${this.state.price}`);
    }
  }
  priceTwo(){
    if (this.state.price === ""){
      this.setState({ price: '2' });
      this.props.history.push(`/search`);
    } else {
      this.setState({ price: '' });
      this.props.history.push(`/search?price=${this.state.price}`);
    }
  }
  priceThree(){
    if (this.state.price === ""){
      this.setState({ price: '3' });
      this.props.history.push(`/search`);
    } else {
      this.setState({ price: '' });
      this.props.history.push(`/search?price=${this.state.price}`);
    }
  }
  priceFour(){
    if (this.state.price === ""){
      this.setState({ price: '4' });
      this.props.history.push(`/search`);
    } else {
      this.setState({ price: '' });
      this.props.history.push(`/search?price=${this.state.price}`);
    }
  }

  noiseQuiet(){
    if (this.state.noise === ""){
      this.setState({ noise: 'quiet' });
      this.props.history.push(`/search`);
    } else {
      this.setState({ noise: '' });
      this.props.history.push(`/search?noise=${this.state.noise}`);
    }
  }

  noiseAverage(){
    if (this.state.noise === ""){
      this.setState({ noise: 'average' });
      this.props.history.push(`/search`);
    } else {
      this.setState({ noise: '' });
      this.props.history.push(`/search?noise=${this.state.noise}`);
    }
  }

  noiseLoud(){
    if (this.state.noise === ""){
      this.setState({ noise: 'loud' });
      this.props.history.push(`/search`);
    } else {
      this.setState({ noise: '' });
      this.props.history.push(`/search?noise=${this.state.noise}`);
    }
  }

  noiseVeryLoud(){
    if (this.state.noise === ""){
      this.setState({ noise: 'very loud' });
      this.props.history.push(`/search`);
    } else {
      this.setState({ noise: '' });
      this.props.history.push(`/search?noise=${this.state.noise}`);
    }
  }

  deliveryNo(){
    if (this.state.delivery === ""){
      this.setState({ delivery: "false" });
      this.props.history.push(`/search`);
    } else {
      this.setState({ delivery: '' });
      this.props.history.push(`/search?delivery=${this.state.delivery}`);
    }
  }
  deliveryYes(){
    if (this.state.delivery === ""){
      this.setState({ delivery: "true" });
      this.props.history.push(`/search`);
    } else {
      this.setState({ delivery: '' });
      this.props.history.push(`/search?delivery=${this.state.delivery}`);
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
    let searchedBusinesses = this.props.searchedBusinesses.map( (business, idx) =>
       <Business key={business.id}  business={business} idx={idx} />
     );
    let searchedBusinesses1 = this.props.searchedBusinesses.map( (business, idx) =>
       <SearchDropDown key={business.id}  business={business} idx={idx} />
     );

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
            <div className='top-category-results'>
              <div className='top-res-name'>
                <div className='top-results-home'>
                  Top Search Results
                </div>
              </div>
              <div className='top-res-cat'>
                in New York, NY
              </div>
            </div>
            <div className='top-results-wrapper3'>
              <ul className='top-wrapper3-sec-1'>
                <li className='sec-1-li' onClick={this.priceOne}>$</li>
                <li className='sec-2-li' onClick={this.priceTwo}>$$</li>
                <li className='sec-3-li' onClick={this.priceThree}>$$$</li>
                <li className='sec-4-li' onClick={this.priceFour}>$$$$</li>
              </ul>
              <div className='top-wrapper3-sec-2'>
                <div className='sec-2-noise'>
                  Noise Level:
                </div>
                <ul className='sec-2-noise-levels'>
                  <li className='noise-1-li' onClick={this.noiseQuiet}>Quiet</li>
                  <li className='noise-2-li' onClick={this.noiseAverage}>Average</li>
                  <li className='noise-3-li' onClick={this.noiseLoud}>Loud</li>
                  <li className='noise-4-li' onClick={this.noiseVeryLoud}>Very Loud</li>
                </ul>
              </div>
              <div className='top-wrapper3-sec-3'>
                <div className='sec-3-del'>
                  Delivers:
                </div>
                <ul className='sec-3-del-options'>
                  <li onClick={this.deliveryYes}>
                    Yes
                  </li>
                  <li onClick={this.deliveryNo}>No</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <div className="main-business-container">
        <div className="business-container" >
          {searchedBusinesses}
        </div>
        <div className='sear-ad-cont'>
          <BusinessMap id={'map-container'} businesses={this.props.searchedBusinesses}/>
          <a href="https://github.com/jonathanahn95/"><img className="under-map-pic" src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"></img></a>
        </div>
      </div>

    </div>


    );
  }


}

export default withRouter(SearchBusinessPage);
