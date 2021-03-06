import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import {
  requestSingleBusiness,
  requestAllBusinesses
} from "../../actions/businesses_actions";
import AdjectiveShow from "../adjective/adjective_show.jsx";

class SplashReviews extends React.Component {
  componentDidMount() {
    // this.props.requestSingleBusiness(this.props.review.business_id);
    this.props.requestAllBusinesses();
  }

  asd() {
    let a = [this.props.review].map(review => {
      return (
        <AdjectiveShow
          key={review.id}
          review={this.props.review}
          currentUser={this.props.currentUser}
          class="splash"
          history={this.props.history}
        />
      );
    });
    return a;
  }

  render() {
    const review = this.props.review;
    const b = this.asd();
    const user = this.props.review.user;
    const business = this.props.business;
    const businessLength = Object.values(this.props.business).length;
    let matchedBusiness = business[review.business_id];
    let photo;
    if (matchedBusiness) {
      photo = matchedBusiness.photos[0].photo_image_url;
    } else {
      matchedBusiness = "";
    }

    return (
      <div className="activity-wrapper">
        <div className="activity-user-info">
          <div className="activity-wrapper-1">
            <div className="activity-user-pic">
              <img className="splash-user-pic" src={window.profPic} />
            </div>
            <div className="activity-user-name">
              <div className="activity-full-name">
                {user.fname} {user.lname}
              </div>
              <div>Wrote a review</div>
            </div>
          </div>
          <div className="splash-review-pic-wrapper">
            <Link to={`/businesses/${matchedBusiness.id}`}>
              <img className="splash-review-pic" src={photo} />
            </Link>
          </div>
          <div className="activity-bus-name">
            <Link
              className="splash-review-bus-name"
              to={`/businesses/${matchedBusiness.id}`}
            >
              {matchedBusiness.name}
            </Link>
          </div>
          <div className="activity-review-wrapper">
            <div className="activity-stars">
              <ReactStars
                className="stars"
                count={5}
                edit={false}
                value={review.rating}
                size={20}
                color2={"#ffd700"}
              />
            </div>
            <div className="activity-review-body">{review.body}</div>
          </div>
          {b}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    business: state.entities.businesses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: id => dispatch(deleteReview(id)),
    updateReview: review => dispatch(updateReview(review)),
    requestSingleBusiness: id => dispatch(requestSingleBusiness(id)),
    requestAllBusinesses: () => dispatch(requestAllBusinesses())
  };
};
// export default withRouter(SplashReviews);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashReviews);

// <Route path="" component={bic} render(()=>{}</Route>)
