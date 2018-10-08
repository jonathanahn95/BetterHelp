import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchData: ''
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
    };
  }

  render() {
    return (
      <div className='sear-container'>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="restaurants, bootcamps, cafes..." onChange={this.update('searchData')} className= "search" type="search" value={this.state.searchData}></input>
            <button  className="search-pic"><i className='fa fa-search'></i></button>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchForm);

// <Route path="" component={bic} render(()=>{}</Route>)
