import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Business from '../businesses/business';
import BusinessMap from '../map/business_map';
import BusinessIndexContainer from '../businesses/business_index_container';

class Search extends React.Component {


  render() {

    return (
      <div id='map-container' ref='map'>
        <BusinessIndexContainer/>
        <BusinessMap/>

      </div>

    )
  }
}

export default withRouter(Search);

// <Route path="" component={bic} render(()=>{}</Route>)
