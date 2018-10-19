import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';


class Business extends React.Component {

  // <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>

  componentWillReceiveProps(nextProps) {
     if (this.props.match.params.businessId !== nextProps.match.params.businessId) {
       this.props.requestSingleBusiness(nextProps.match.params.businessId);
     }
   }

  render() {

    const review = this.props.business.reviews;
    const reviewCount = review ? review.length : 0;
    const reviewBody = reviewCount > 0 && review ? review[0].body : '';

    let reviewScore = [];
    review.forEach( review => {
      reviewScore.push(review.rating);
    });
    reviewScore = reviewScore.reduce( (acc, el) => { return acc + el }) / review.length;

    return (
      <div className="large-wrapper">

        <div className="business-image">
          <Link className='rev-edit-link'to={`/businesses/${this.props.business.id}/`}>
<img className="business-pic" src={this.props.business.photos[0].photo_image_url}></img></Link>

        </div>

        <div className="business-info">
          <div className="main-attributes">
            <div className='link-page'>
              <div className='link-page-numbers'>
                {this.props.idx + 1.}.
              </div>
              <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
            </div>
            <div className='review'>
              <ReactStars
                className='stars'
                count={5}
                half={false}
                value={reviewScore}
                onChange={this.ratingChanged}
                size={24}
                color2={'#ffd700'} />
              <p className='bus-num-rev'>
                { reviewCount } reviews
              </p>
            </div>
          </div>
          <span className='secondary-attributes'>
              <div className='secondary-attributes-container'>
              <li className='bus-num'>
                {this.props.business.phone_number}
              </li>
              <li className='business-address'>
                {this.props.business.address}
              </li>
              <li className='business-city'>
                {this.props.business.city}
              </li>
              <li className='bus-review-body'>
                {reviewBody}

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
