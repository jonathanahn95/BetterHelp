import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import { requestSingleBusiness, requestAllBusinesses } from '../../actions/businesses_actions';


class SplashReviews extends React.Component {

  componentDidMount(){
    // this.props.requestSingleBusiness(this.props.review.business_id);
    this.props.requestAllBusinesses();
  }

  render() {
    const review = this.props.review;
    const user = this.props.review.user;
    const business = this.props.business;
    const businessLength = Object.values(this.props.business).length;
    let matchedBusiness = business[review.business_id];
    let photo;
    if (matchedBusiness){
      // const x = Math.floor(Math.random() * businessLength);
      // const y = Math.floor(x * 0.5);
      // if (x > 0 && y < 4){
      //   photo = matchedBusiness.photos[y].photo_image_url;
      // } else {
        photo = matchedBusiness.photos[0].photo_image_url;
    //   }
    } else {
      matchedBusiness = '';
    }

    return (
      <div className='activity-wrapper'>
        <div className="activity-user-info">
          <div className='activity-wrapper-1'>
            <div className='activity-user-pic'>
              <img className="splash-user-pic" src={window.profPic}></img>
            </div>
            <div className='activity-user-name'>
              <div className='activity-full-name'>
                {user.fname} {user.lname}
              </div>
              <div>
                Wrote a review
              </div>
            </div>
          </div>
          <div className='splash-review-pic-wrapper'>
            <img className="splash-review-pic" src={photo}></img>
          </div>
          <div className='activity-bus-name'>
            {matchedBusiness.name}
          </div>
          <div className='activity-review-wrapper'>
            <div className='activity-stars'>
              <ReactStars
                className='stars'
                count={5}
                edit={false}
                value={review.rating}
                size={20}
                color2={'#ffd700'} />
            </div>
            <div className='activity-review-body'>
              {review.body}
            </div>
          </div>
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {

  return {
    business: state.entities.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (id) => dispatch(deleteReview(id)),
    updateReview: review => dispatch(updateReview(review)),
    requestSingleBusiness: (id) => dispatch(requestSingleBusiness(id)),
    requestAllBusinesses: () => dispatch(requestAllBusinesses())
  }
}
// export default withRouter(SplashReviews);
export default connect(mapStateToProps, mapDispatchToProps)(SplashReviews);

// <Route path="" component={bic} render(()=>{}</Route>)
