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
    };
    this.addtoArray = this.addtoArray.bind(this);
  }

  componentDidMount() {
    this.props.searchBusinesses(this.props.location.search.slice(1));
    this.props.requestAllBusinessCategories();
  }

  // componentWillReceiveProps(nextProps){
  //   debugger
  //   if (this.props.location.search.slice(1) !== nextProps.location.search.slice(1)){
  //     this.props.searchBusinesses(nextProps.location.search.slice(1));
  //   }
  // }

  componentWillUpdate(nextProps, nextState) {
    if (this.state !== nextState){
      this.props.searchBusinesses(nextState);
    }
  }

  addtoArray(field){
    return(e) => {
      const val = e.target.value;

      let newArr = this.state[field];
      if (newArr.includes(val)){
        newArr = newArr.filter( ele => ele !== val);
        this.toggle(field,val);
      } else {
        newArr.push(val);
        this.toggle(field,val);
      }
      this.setState({
        [field]: newArr
      });
    };
  }

  toggle(type,val){
    debugger
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

  //
  // priceOne(){
  //   if (this.price1 === ""){
  //     this.price1 = 1;
  //     this.props.searchBusinesses(`price=${this.price1}`);
  //     this.toggleClass = `selectedToggleClass`;
  //   } else {
  //     this.price1 = "";
  //     this.props.searchBusinesses(``);
  //     this.toggleClass = '';
  //   }
  // }
  // priceTwo(){
  //   if (this.price2 === ""){
  //     this.price2 = 2;
  //     this.props.searchBusinesses(`price=${this.price2}`);
  //     this.toggleClass2 = `selectedToggleClass2`;
  //   } else {
  //     this.price2 = "";
  //     this.props.searchBusinesses(``);
  //     this.toggleClass2 = '';
  //   }
  // }
  // priceThree(){
  //   if (this.price3 === ""){
  //     this.price3 = 3;
  //     this.props.searchBusinesses(`price=${this.price3}`);
  //     this.toggleClass3 = `selectedToggleClass3`;
  //   } else {
  //     this.price3 = "";
  //     this.props.searchBusinesses(``);
  //     this.toggleClass3 = '';
  //   }
  // }
  // priceFour(){
  //   if (this.price4 === ""){
  //     this.price4 = 4;
  //     this.props.searchBusinesses(`price=${this.price4}`);
  //     this.toggleClass4 = `selectedToggleClass4`;
  //   } else {
  //     this.price4 = "";
  //     this.props.searchBusinesses(``);
  //     this.toggleClass4 = '';
  //   }
  // }

  render() {
    console.log(this.state);
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

     // debugger
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
              <ul className='top-wrapper3-sec-1'>
                <li className={this.toggle('price',1)} onClick={this.addtoArray('price')} value="1">$</li>
                <li className={this.toggle('price',2)} onClick={this.addtoArray('price')} value="2">$$</li>
                <li className={this.toggle('price',3)} onClick={this.addtoArray('price')} value="3">$$$</li>
                <li className={this.toggle('price',4)} onClick={this.addtoArray('price')} value="4">$$$$</li>
              </ul>
              <div className='top-wrapper3-sec-2'>
                <div className='sec-2-noise'>
                  Noise Level:
                </div>
                <ul className='sec-2-noise-levels'>
                  <li className={this.toggle('noise',1)} onClick={this.addtoArray('noise')} value="1"  >Quiet</li>
                  <li className={this.toggle('noise',2)} onClick={this.addtoArray('noise')} value='2' >Average</li>
                  <li className={this.toggle('noise',3)} onClick={this.addtoArray('noise')} value='3'  >Loud</li>
                  <li className={this.toggle('noise',4)} onClick={this.addtoArray('noise')} value='4' >Very Loud</li>
                </ul>
              </div>
              <div className='top-wrapper3-sec-3'>
                <div className='sec-3-del'>
                  Delivers:
                </div>
                <ul className='sec-3-del-options'>
                  <li  className={this.toggle('delivery',1)} onClick={this.addtoArray('delivery')} value='1'>
                    Yes
                  </li>
                  <li className={this.toggle('delivery',0)} onClick={this.addtoArray('delivery')} value='0'>No</li>
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
