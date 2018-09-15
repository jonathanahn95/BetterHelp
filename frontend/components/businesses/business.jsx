import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Business extends React.Component {

  // <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>

  render() {
    return (

      <div className="large-wrapper">

        <div className="business-image">
          <img className="business-pic" src={window.handsUrl}></img>
        </div>

        <div className="business-info">
          <div className="main-attributes">
            <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>

          </div>
          <span className='secondary-attributes'>
              <li>
                {this.props.business.phone_number}
              </li>
              <li>
                {this.props.business.address}
              </li>
              <li>
                {this.props.business.city}
              </li>
              <li>
                {this.props.business.city}
              </li>
              <li>
                {this.props.business.city}
              </li>
              <li>
                {this.props.business.city}
              </li>
          </span>
        </div>

      </div>


    )
  }
}

export default withRouter(Business);

// <Route path="" component={bic} render(()=>{}</Route>)
