import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

class BusinessToWriteReview extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.businessId !== nextProps.match.params.businessId
    ) {
      this.props.requestSingleBusiness(nextProps.match.params.businessId);
    }
  }

  render() {
    const review = this.props.business.reviews;

    let reviewScore = [];
    review.forEach(review => {
      reviewScore.push(review.rating);
    });

    reviewScore =
      reviewScore.reduce((acc, el) => {
        return acc + el;
      }) / review.length;

    return (
      <div className="write-review-large-wrapper">
        <div className="write-review-business-image">
          <Link
            className="write-review-bus-name"
            to={`/businesses/${this.props.business.id}`}
          >
            <img
              className="write-review-business-pic"
              src={this.props.business.photos[0].photo_image_url}
            />
          </Link>
        </div>
        <div className="write-review-business-info">
          <div className="write-review-main-attributes">
            <div className="write-review-link-page">
              <Link
                className="write-review-bus-name"
                to={`/businesses/${this.props.business.id}`}
              >
                {this.props.business.name}
              </Link>
            </div>
          </div>
          <span className="write-review-secondary-attributes">
            <div className="write-review-secondary-attributes-container">
              <li className="write-review-business-address">
                {this.props.business.address}
              </li>
              <li className="write-review-business-city">
                {this.props.business.city}
              </li>
            </div>
            <div className="write-review-review">
              <ReactStars
                className="write-review-stars"
                count={5}
                edit={false}
                value={reviewScore}
                onChange={this.ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(BusinessToWriteReview);

// <Route path="" component={bic} render(()=>{}</Route>)
