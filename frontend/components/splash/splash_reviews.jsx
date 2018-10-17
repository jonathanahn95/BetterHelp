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
      <div>
        <div>
          {user.fname} {user.lname}
        </div>
      </div>
    )
  }

}

export default withRouter(SplashReviews);

// <Route path="" component={bic} render(()=>{}</Route>)
