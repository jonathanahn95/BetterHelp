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
      price: [],
      noise: [],
      delivery: [],
      name: ''
    };
    this.addtoArray = this.addtoArray.bind(this);
    // this.generateQuery = this.generateQuery.bind(this);
    // this.createDeliveryToggle = this.createDeliveryToggle.bind(this);
  }

  componentDidMount() {

    if (this.props.location.search.slice(1).length > 0){
      debugger
      this.props.searchBusinesses(`dropdown=(true)&price=()&noise=()&delivery=()&name=${this.props.location.search.slice(1)}`);
    } else  {
      this.props.searchBusinesses(this.generateQuery(this.state));
      this.props.requestAllBusinessCategories();
    }
  }

  generateQuery(nextState) {
  	const queries = Object.keys(nextState);
  	let queryString = '';
  	queries.forEach(query => {
  		queryString += `${query}=(${nextState[query]})&`;
  	});
  	return queryString;
  }

  componentWillUpdate(nextProps, nextState) {
    debugger
    if (this.state !== nextState){
      this.props.searchBusinesses(this.generateQuery(nextState));
    } else if (nextProps.location.search !== this.props.location.search){
      this.props.searchBusinesses(`dropdown=(true)&price=()&noise=()&delivery=()&name=${nextProps.location.search.slice(1)}`);
    }
  }



  addtoArray(field){
    return(e) => {
      const val = e.target.value;

      let newArr = this.state[field];
      if (newArr.includes(val)){
        newArr = newArr.filter( ele => ele !== val);
      } else {
        newArr.push(val);
      }
      this.setState({
        [field]: newArr
      });
    };
  }

  renderToggle(type,val){

    if (type === 'price' &&  this.state.price.includes(val)){
      return `${type}-${val}-li-toggle`;
    } else if (type === 'noise' && this.state.noise.includes(val)){
      return `${type}-${val}-li-toggle`;
    } else if (type === 'delivery' && this.state.delivery.includes(val)){
      return `${type}-${val}-li-toggle`;
    } else {
      return `${type}-${val}-li`;
    }
  }


  createToggles(type) {
    let elements;
    if (type === 'price'){
      elements = ["$","$$","$$$","$$$$"];
    } else if (type === 'noise'){
      elements = ['Quiet', 'Average', 'Loud', 'Very Loud'];
    }

  	return (
  		<ul className='top-wrapper3-sec-1'>
  		{ [1, 2, 3, 4].map((val, idx) => {
  			return <li className={ this.renderToggle(type, val)} onClick={this.addtoArray(type)} value={val}>
          {elements[idx]}
  			</li>
  		})}
  		</ul>
  	)
  }

  createDeliveryToggle() {
    return (
      <ul className='sec-3-del-options'>
        <li  className={this.renderToggle('delivery',1)} onClick={this.addtoArray('delivery')} value='1'>
          Yes
        </li>
        <li className={this.renderToggle('delivery',0)} onClick={this.addtoArray('delivery')} value='0'>No</li>
      </ul>
    )
  }

  createBusinessComponent(Component) {
  	return this.props.searchedBusinesses.map( (business, idx) => {
  		return <Component key={business.id} business={business} idx={idx} />
  	})
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

    let searchedBusinesses = this.createBusinessComponent(Business)
    let searchedBusinesses1 = this.createBusinessComponent(SearchDropDown)

    let brandName;
    if (this.props.currentUser){
      brandName = 'small-brand-name2'
    } else {
      brandName = 'small-brand-name'

    }
    const priceToggles = this.createToggles('price')
   	const noiseToggles = this.createToggles('noise')
    const deliveryToggle = this.createDeliveryToggle()

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


        <div className='top-results-wrapper'>
          <div className='top-results-wrapper2'>
            <div className='top-category-results'>
              <div className='top-category-results1'>
              <div className='top-res-name'>
                <div className='top-results-home'>
                  Top Search Results
                </div>
              </div>
              <div className='top-res-cat'>
                in New York, NY
              </div>
            </div>
              <div className='show-num-bus'>
                Showing 1-{searchedBusinesses.length} of 20
              </div>
            </div>
            <div className='top-results-wrapper3'>
              {priceToggles}
              <div className='top-wrapper3-sec-2'>
                <div className='sec-2-noise'>
                  Noise Level:
                </div>
                {noiseToggles}
              </div>
              <div className='top-wrapper3-sec-3'>
                <div className='sec-3-del'>
                  Delivers:
                </div>
                {deliveryToggle}
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
