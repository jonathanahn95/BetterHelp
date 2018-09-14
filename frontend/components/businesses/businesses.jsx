import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Business from './business';
import { Route } from 'react-router-dom';


class Businesses extends React.Component {

  componentDidMount() {
    // debugger
    this.props.requestSelectedBusinessCategories(this.props.category);
  }
  render() {
    // debugger
    const businesses = this.props.businesses.map( business =>
      <Business key={business.id}  business={business} />)


    return (
      <div>
        <ol>
          {businesses}
        </ol>
      </div>
    )
  }
}

export default withRouter(Businesses);

// <Route path="" component={bic} render(()=>{}</Route>)
