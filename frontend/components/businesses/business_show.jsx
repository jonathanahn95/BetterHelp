import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import ReactStars from "react-stars";
import AdjectiveShow from "../adjective/adjective_show.jsx";
import BusinessMap from "../map/business_map";
import SearchFormContainer from "../search/search_form_container";
import { businessInfo } from "./business_info";

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToEdit = this.navigateToEdit.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleBusiness(this.props.match.params.businessId);
    this.props.requestAllBusinessCategories();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.businessId !== nextProps.match.params.businessId
    ) {
      this.props.requestSingleBusiness(nextProps.match.params.businessId);
    }
  }

  navigateToEdit(review) {
    return e => {
      this.props.history.push(
        `/businesses/${review.business_id}/reviews/${review.id}`
      );
    };
  }

  // <button className='button-img' onClick={e => this.props.deleteReview(review.id)}><img className="dub" src={window.trashBin}></img></button>
  // <button className='button-img' onClick={ this.navigateToEdit(review) }><img className="dub" src={window.trashBin}></img>
  //
  // </button>

  priceRange() {
    switch (this.props.business.price) {
      case 1:
        return "Cheap";
      case 2:
        return "Moderate";
      case 3:
        return "Expensive";
      case 4:
        return "Very Expensive";
      default:
        return "Cheap";
    }
  }

  userReviews(review) {
    // ;
    if (this.props.session === review.user_id) {
      return (
        <div className="user-review-div">
          <img
            key="edit"
            onClick={this.navigateToEdit(review)}
            className="dub"
            src={window.edit}
          />
          <img
            key="trash"
            onClick={e => this.props.deleteReview(review.id)}
            className="dub"
            src={window.trashBin}
          />
        </div>
      );
    } else {
      return (
        <AdjectiveShow
          review={review}
          currentUser={this.props.currentUser}
          history={this.props.history}
        />
      );
    }
  }

  reviewsArr() {
    let reviewsArr = null;

    if (this.props.reviews.length > 0) {
      reviewsArr = this.props.reviews.map((review, idx) => {
        return (
          <div key={review.id} className="revi-wrapper">
            <div className="user-name">
              <img className="prof-pic" src={window.profPic} />

              <li className="fname1">{review.user ? review.user.fname : ""}</li>
              <li className="lname1">{review.user ? review.user.lname : ""}</li>
            </div>
            <div className="reviews-container">
              <div className="rating-created-at">
                <li className="review-rating">
                  <ReactStars
                    count={5}
                    edit={false}
                    value={review.rating}
                    size={24}
                    color2={"#ffd700"}
                  />
                </li>
                <li className="review-created-at">
                  {review.created_at.slice(0, 10)}
                </li>
              </div>
              <li className="review-body">{review.body}</li>
              <div className="dub-container">{this.userReviews(review)}</div>
            </div>
          </div>
        );
      });
    }

    return reviewsArr;
  }

  render() {
    let brandName;
    if (this.props.currentUser) {
      brandName = "small-brand-name2";
    } else {
      brandName = "small-brand-name";
    }

    const business = this.props.business;
    if (!business) {
      return <div className="empty" />;
    }

    //// reverse mutattes array so orderby in backend.
    let reviewScore = [];
    const reviewAvg = this.props.reviews.forEach(review => {
      reviewScore.push(review.rating);
    });
    reviewScore =
      reviewScore.reduce((acc, el) => {
        return acc + el;
      }) / this.props.reviews.length;
    const imagesArr = this.props.business.photos.slice(1).map((photo, idx) => {
      return (
        <img key={idx} className="bus-show-pics" src={photo.photo_image_url} />
      );
    });

    let res, home, cafe, boot;
    if (this.props.businessCategories.length > 0) {
      res = this.props.businessCategories[0].id;
      home = this.props.businessCategories[1].id;
      cafe = this.props.businessCategories[2].id;
      boot = this.props.businessCategories[3].id;
    }

    console.log(1);

    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            <Link to="/">
              <img className={brandName} src={window.betterHelpSplash} />
            </Link>
            <SearchFormContainer className={"nav-sear-container"} />
          </h1>
        </header>

        <div className="ul-nav-bar-item2-wrapper">
          <ul className="ul-nav-bar-item2">
            <div className="nav-bar-container1">
              <Link
                className="nav-bar-container1-links"
                to={`/business_categories/${res}`}
              >
                <i className="fas fa-utensils" />
                <p>Restaurant</p>
              </Link>
              <Link
                className="nav-bar-container1-links"
                to={`/business_categories/${home}`}
              >
                <i className="fas fa-home" />
                <p>Home Services</p>
              </Link>
              <Link
                className="nav-bar-container1-links"
                to={`/business_categories/${cafe}`}
              >
                <i className="fas fa-coffee" />
                <p>Cafes</p>
              </Link>
              <Link
                className="nav-bar-container1-links"
                to={`/business_categories/${boot}`}
              >
                <i className="fas fa-keyboard" />
                <p>Bootcamps</p>
              </Link>
            </div>
            <div className="review-bar-container1">
              <Link className="review-bar-container1-link" to={`/businesses/`}>
                <i className="fas fa-pen" />
                <p>Write a Review</p>
              </Link>
            </div>
          </ul>
        </div>

        <main className="top-shelf">
          <div className="content">
            <div className="page-header">
              <div className="left">
                {business.name}
                <div className="num-reviews-container">
                  <ReactStars
                    className="stars"
                    count={5}
                    edit={false}
                    value={reviewScore}
                    onChange={this.ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                  />
                  {this.props.reviews.length} reviews
                </div>
                <div className="num-reviews" />
              </div>
              <div className="right">
                <div className="right-review">
                  <div className="right-review1">
                    <Link to={`/businesses/${business.id}/review`}>
                      <button className="right-button">
                        <i className="fa fa-star" />Write a Review
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="subheader">
              <div className="info">
                <div className="show-buss-map">
                  <BusinessMap
                    id={"show-map-container"}
                    business={this.props.business}
                    single={true}
                  />
                </div>
                <div className="show-li-container">
                  <li className="bus-address">
                    <i className="fa fa-map-marker-alt" />
                    {business.address}
                  </li>
                  <div className="show-info-container">
                    <li className="bus-city">{business.city},</li>
                    <li className="bus-state">{business.state}</li>
                    <li className="bus-zipcode">{business.zip_code}</li>
                  </div>
                  <li>
                    <i className="fa fa-phone" />
                    {business.phone_number}
                  </li>
                  <li className="bus-website">
                    <i className="fa fa-directions" />
                    {business.website}
                  </li>
                </div>
              </div>
              <div className="show-pics">{imagesArr}</div>
            </div>
          </div>
        </main>
        <div className="rec-reviews">
          Recommended Reviews for {this.props.business.name}
        </div>
        <div className="main-reviews-container">
          <div className="reviews">{this.reviewsArr()}</div>
          <div className="business-show-container">
            <div className="today-info-wrapper">
              <ul className="today-hours-wrapper">
                <li className="clock-a-icon">
                  <i className="fa fa-clock" />
                </li>
                <li className="today-hours">
                  <div className="today">Today</div>
                  <div className="today-hour">{business.hours[0]}</div>
                </li>
              </ul>
              <ul className="price-range-wrapper">
                <li className="price-range-icon">
                  <i className="fa fa-dollar-sign" />
                </li>
                <li className="today-hours">
                  <div className="price">Price range</div>
                  <div className="range-type">{this.priceRange()}</div>
                </li>
              </ul>
            </div>

            <div className="imag">
              <a href="https://github.com/jonathanahn95/">
                <img
                  className="tidy"
                  src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"
                />
              </a>
            </div>

            <ul className="business-hours">
              <h1 className="header-hours">Hours</h1>
              <li className="day-container">
                <p className="day">Mon:</p>
                <p>{business.hours[0]}</p>
              </li>
              <li className="day-container">
                <p className="day">Tues:</p>
                <p>{business.hours[1]}</p>
              </li>
              <li className="day-container">
                <p className="day">Wed:</p>
                <p>{business.hours[2]}</p>
              </li>
              <li className="day-container">
                <p className="day">Thurs:</p>
                <p>{business.hours[3]}</p>
              </li>
              <li className="day-container">
                <p className="day">Fri:</p>
                <p>{business.hours[4]}</p>
              </li>
              <li className="day-container">
                <p className="day">Sat:</p>
                <p>{business.hours[5]}</p>
              </li>
              <li className="day-container">
                <p className="day">Sun:</p>
                <p>{business.hours[6]}</p>
              </li>
            </ul>
            {businessInfo()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BusinessShow);
