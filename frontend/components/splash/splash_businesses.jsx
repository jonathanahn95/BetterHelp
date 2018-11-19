import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

class SplashBusinesses extends React.Component {
  render() {
    let business = this.props.business;
    let numReviews = this.props.business.reviews.length;
    let reviewScore = [this.props.business.reviews[0].rating];
    let reviewCount = this.props.business.reviews.slice(1).forEach(review => {
      reviewScore.push(review.rating);
    });

    reviewScore =
      reviewScore.reduce((acc, el) => {
        return acc + el;
      }) / numReviews;

    return (
      <div className="splash-pics-container">
        <Link to={`/businesses/${business.id}`}>
          <img
            className="splash-pics"
            src={business.photos[0].photo_image_url}
          />
        </Link>
        <Link to={`/businesses/${business.id}`}>
          <li className="splash-bus-name">{business.name}</li>
        </Link>
        <div className="splash-star-review">
          <li>
            <ReactStars
              count={5}
              edit={false}
              value={reviewScore}
              size={24}
              color2={"#ffd700"}
            />
          </li>
          <li className="splash-star-num-reviews">{numReviews} reviews</li>
        </div>

        <li>{business.city}</li>
        <li className="fire-opening">
          {" "}
          <i className="fa fa-fire" /> Opened 6 weeks ago{" "}
        </li>
      </div>
    );
  }
}

export default withRouter(SplashBusinesses);

// <Route path="" component={bic} render(()=>{}</Route>)
