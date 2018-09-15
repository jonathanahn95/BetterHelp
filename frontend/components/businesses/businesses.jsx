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
      <Business key={business.id}  business={business}  />)

        // debugger
    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>
          </h1>
        </header>

        <div className="main-business-container">
          <div className="business-container" >
            {businesses}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Businesses);

// <Route path="" component={bic} render(()=>{}</Route>)
