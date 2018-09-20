import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchData: ''
    };
  }
  // //
  // componentDidMount() {
  //   this.props.searchBusinesses(this.state.searchData);
  // }

  // handleSubmit(e){
  //   e.preventDefault();
  //   this.props.searchBusinesses(this.state.searchData);
  // }
  //

  update(field){
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    debugger
    return (
      <div>
        <form onSubmit={() => this.props.searchBusinesses(this.state.searchData)}>
          <input placeholder="restaurants, bootcamps, cafes..." onChange={this.update('searchData')} className= "search" type="search" value={this.state.searchData}></input>
            <button className="search-pic">Search</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchForm);

// <Route path="" component={bic} render(()=>{}</Route>)
