import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Business extends React.Component {

  // <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>

  componentWillReceiveProps(nextProps) {
     if (this.props.match.params.businessId !== nextProps.match.params.businessId) {
       this.props.requestSingleBusiness(nextProps.match.params.businessId);
     }
   }
  render() {
    debugger
    return (

      <div className="large-wrapper">

        <div className="business-image">
          <img className="business-pic" src={this.props.business.photos[0].image_url}></img>

        </div>

        <div className="business-info">
          <div className="main-attributes">
            <div className='link-page'>
              <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
            </div>
            <div className='review'>
              {this.props.business.reviews.length} reviews
            </div>
          </div>
          <span className='secondary-attributes'>
              <div className='secondary-attributes-container'>
              <li>
                {this.props.business.phone_number}
              </li>
              <li>
                {this.props.business.address}
              </li>
              <li>
                {this.props.business.city}
              </li>
            </div>
              <li>

              </li>

          </span>
        </div>

      </div>


    )
  }
}

export default withRouter(Business);

// <Route path="" component={bic} render(()=>{}</Route>)
