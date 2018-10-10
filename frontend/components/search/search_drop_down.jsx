import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SearchDropDown extends React.Component {

  render() {
    return (
      <div className='drop-down-div'>
        <Link className='drop-down-list' to={`/businesses/${this.props.business.id}`}><p>{this.props.business.name}</p></Link>
      </div>
    )
  }
}

export default withRouter(SearchDropDown);
