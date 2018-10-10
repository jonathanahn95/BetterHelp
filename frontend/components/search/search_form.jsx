import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchDropDown from '../search/search_drop_down';
import BusinessCategory from '../business_category/business_category';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchData: '',
      searchLocation: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  // //
  // componentDidMount() {
  //   this.props.searchBusinesses(this.state.searchData);
  // }

  handleSubmit(e){
    e.preventDefault();
    this.props.searchBusinesses(this.state.searchData);
    this.props.history.push(`/search?${this.state.searchData}`);
  }

  update(field){
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
      this.props.searchBusinesses(this.state.searchData);

      // this.renderBusinesses();
    };
  }

  render() {
    let searchedBusinesses1 = this.props.searchedBusinesses.map( (business, idx) =>
       <SearchDropDown key={business.id}  business={business} idx={idx} />
     );

    return (
      <div className='sear-container'>

        <form className='search-form' onSubmit={this.handleSubmit}>
          <div className='find'>
            Find
          </div>
          <input placeholder="restaurants, bootcamps, cafes..." onChange={this.update('searchData')} className= "search" type="search" value={this.state.searchData}></input>
          <div className='near'>
            Near
          </div>
          <input placeholder="Current Location" onChange={this.update('searchLocation')} className= "location" type="search" value={this.state.searchLocation}></input>

          <button  className="search-pic"><i className='fa fa-search'></i></button>
        </form>

        <div className='drop-down'>
          {searchedBusinesses1}
        </div>

      </div>
    )
  }
}

export default withRouter(SearchForm);

// <Route path="" component={bic} render(()=>{}</Route>)
