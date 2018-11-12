import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchDropDown from '../search/search_drop_down';
import BusinessCategory from '../business_category/business_category';
import {DebounceInput} from 'react-debounce-input';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      searchLocation: '',
      dropdown: "show",
      hidden: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleIcon = this.toggleIcon.bind(this);
  }

  // componentWillUnmount(){
  //   this.props.clearSearch();
  //
  // }

  componentDidMount(){
    this.setState({
      name: ''
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.requestDropdownBusinesses(`dropdown=(true)&price=()&noise=()&delivery=()&name=${this.state.name}`);
    this.setState({ name: ''});
    this.props.history.push(`/search?${this.state.name}`);
  }

  update(field){
    return (e) => {
      this.setState({
        [field]: e.target.value,
        dropdown: "show",
      });
      this.props.requestDropdownBusinesses(`dropdown=(true)&price=()&noise=()&delivery=()&name=${this.state.name}`);
    };
  }

  toggleClass() {
     const currentState = this.state.hidden;
     this.setState({ hidden: !currentState });
   }

  toggleIcon(){
    if (this.props.show === 'false' ||this.props.className === 'sear-container'){
      return (
        <div></div>
      )
    }
    else if (this.props.userLoggedIn === 'nav-sear-container-true'){
      let toggle = "dropped-down-list-hidden";
      let hiddenCar = 'fas fa-caret-up-hidden'
      if (!this.state.hidden === true) {
        toggle = "dropped-down-list1";
        hiddenCar = 'fas fa-caret-up three'
      }

      return (
        <div>
        <div className='logout-nav'>
          <img onClick={this.toggleClass} className='drop-down-pic' src='https://s3.amazonaws.com/betterhelp-dev/dropdown.png'></img>
          <div onClick={this.toggleClass} className='caret-drop-down'><i className="fas fa-caret-down"></i></div>
        </div>
        <i className={hiddenCar}></i>
        <div className={toggle}>
          <div className='dropped-down-first'>
            <img  className='dropped-down-pic' src='https://s3.amazonaws.com/betterhelp-dev/dropdown.png'></img>
            <div  className='dropped-down-info-wrapper'>
              <div className='dropped-down-name'>
                <Link className='user-prof-link'to={`/user_prof/${this.props.currentUser.id}`}><div className='dropped-down-fname'>{this.props.currentUser.fname}</div></Link>
                <Link className='user-prof-link'to={`/user_prof/${this.props.currentUser.id}`}><div className='dropped-down-fname'>{this.props.currentUser.lname}</div></Link>
              </div>
              <div className='dropped-down-location'>
                Manhattan, NY
              </div>
            </div>
          </div>
          <div className='dropped-down-about2'>
            <div>
              <i className="fas fa-user"></i>
            </div>
            <div className='dropped-down-about-me'>
              <Link className='user-prof-link'to={`/user_prof/${this.props.currentUser.id}`}><p>About Me</p></Link>
            </div>
          </div>
          <button className="dropped-down-logout-btn" onClick={this.handleClick}>Log Out</button>
        </div>
    </div>

      )
    } else if (this.props.userLoggedIn === 'nav-sear-container-false'){
      return (
        <div className='login-signup-nav'>
        <Link className="log-in" to='/login'>  <div className='login-sear-nav'>
            Log In
          </div></Link>
        <Link className="log-in" to='/signup'>  <div className='signup-sear-nav'>
            Sign Up
          </div></Link>
        </div>
      )
    }
  }

  render() {
    let searchedBusinesses1 = this.props.searchedBusinesses.map( (business, idx) =>
       <SearchDropDown key={business.id}  business={business} idx={idx} name={this.state.name} />
     );

    return (
      <div className={this.props.className}>
        <form className={`search-form` + `-${this.props.className}`} onSubmit={this.handleSubmit}>
          <div className={'find' + `-${this.props.className}`}>
            Find
          </div>
          <DebounceInput
           placeholder="restaurants, bootcamps, cafes..."
           className={"search" + `-${this.props.className} `}
           minLength={1}
           debounceTimeout={300}
           value={this.state.name}
           onChange={this.update('name')} />

          <div className={'near' + `-${this.props.className}`}>
            Near
          </div>
          <input placeholder="Current Location" onChange={this.update('searchLocation')} className={"location" + `-${this.props.className}`} onKeyDown={this.keydown} type="search" value={this.state.searchLocation}></input>

          <button  className={"search-pic" + `-${this.props.className}`}><i className='fa fa-search'></i></button>
          {this.toggleIcon()}
        </form>

        <div className={'drop-down' + `-${this.props.className} ${this.state.dropdown}`}>
          {searchedBusinesses1}
        </div>


      </div>
    )
  }
}

export default withRouter(SearchForm);

// <Route path="" component={bic} render(()=>{}</Route>)
