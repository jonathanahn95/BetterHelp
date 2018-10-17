import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';


class SplashReviews extends React.Component {


  render() {
    const review = this.props.review;
    const user = this.props.review.user;
    const business = this.props.review.business;
    
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
          <div>
            <img className="splash-review-pic" src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"></img>
          </div>
          <div className='activity-bus-name'>
            {business.name}
          </div>
          <div className='activity-review-wrapper'>
            <div className='activity-stars'>
              <ReactStars
                className='stars'
                count={5}
                half={false}
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

export default withRouter(SplashReviews);

// <Route path="" component={bic} render(()=>{}</Route>)
