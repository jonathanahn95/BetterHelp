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
      searchLocation: '',
      dropdown: "show"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keydown = this.keydown.bind(this);

  }

  // componentWillUnmount(){
  //   this.props.clearSearch();
  //
  // }

  handleSubmit(e){
    e.preventDefault();
    this.props.searchBusinesses(this.state.searchData);
    this.props.history.push(`/search?${this.state.searchData}`);
  }

  update(field){
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
        dropdown: "show",
      });
      this.props.searchBusinesses(this.state.searchData);
    };
  }

  keydown(e) {
    if (e.keyCode === 13) {
      this.setState({dropdown: "hide"});
    } else if (e.keyCode === 8 && this.state.searchData.length <= 1){
      this.setState({dropdown: "hide"});
    }
  }

  render() {
    let searchedBusinesses1 = this.props.searchedBusinesses.map( (business, idx) =>
       <SearchDropDown key={business.id}  business={business} idx={idx} searchData={this.state.searchData}/>
     );

    return (
      <div className={this.props.className}>
        <form className={`search-form` + `-${this.props.className}`} onSubmit={this.handleSubmit}>
          <div className={'find' + `-${this.props.className}`}>
            Find
          </div>
          <input placeholder="restaurants, bootcamps, cafes..." onChange={this.update('searchData')} className={"search" + `-${this.props.className} `}
             onKeyDown={this.keydown} type="search" value={this.state.searchData}></input>
          <div className={'near' + `-${this.props.className}`}>
            Near
          </div>
          <input placeholder="Current Location" onChange={this.update('searchLocation')} className={"location" + `-${this.props.className}`} onKeyDown={this.keydown} type="search" value={this.state.searchLocation}></input>

          <button  className={"search-pic" + `-${this.props.className}`}><i className='fa fa-search'></i></button>
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
