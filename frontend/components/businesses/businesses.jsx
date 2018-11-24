import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Business from "./business";
import { Route } from "react-router-dom";
import BusinessMap from "../map/business_map";
import SearchFormContainer from "../search/search_form_container";

class Businesses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: [],
      noise: [],
      delivery: [],
      name: ""
    };
    this.addtoArray = this.addtoArray.bind(this);
  }

  componentDidMount() {
    this.props.requestSelectedBusinessCategories(this.props.category);
    this.props.requestAllBusinessCategories();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      this.props.searchBusinesses(this.generateQuery(nextState));
    } else if (nextProps.category !== this.props.category) {
      this.setState({
        price: [],
        noise: [],
        delivery: []
      });
      this.props.requestSelectedBusinessCategories(nextProps.category);
    }
  }

  generateQuery(nextState) {
    const queries = Object.keys(nextState);
    let queryString = "";
    queries.forEach(query => {
      queryString += `${query}=(${nextState[query]})&`;
    });
    return queryString;
  }

  addtoArray(field) {
    return e => {
      const val = e.target.value;

      let newArr = this.state[field];
      if (newArr.includes(val)) {
        newArr = newArr.filter(ele => ele !== val);
      } else {
        newArr.push(val);
      }
      this.setState({
        [field]: newArr
      });
    };
  }

  renderToggle(type, val) {
    if (type === "price" && this.state.price.includes(val)) {
      return `${type}-${val}-li-toggle`;
    } else if (type === "noise" && this.state.noise.includes(val)) {
      return `${type}-${val}-li-toggle`;
    } else if (type === "delivery" && this.state.delivery.includes(val)) {
      return `${type}-${val}-li-toggle`;
    } else {
      return `${type}-${val}-li`;
    }
  }

  renderFilterText() {
    if (this.props.businesses.length === 0) {
      return "No Results";
    } else if (
      this.state.price.length > 0 ||
      this.state.noise.length > 0 ||
      this.state.delivery.length > 0
    ) {
      return "Top Filtered Results";
    } else {
      return `Top ${this.props.businessCategoryName} Results`;
    }
  }

  render() {
    let res, home, cafe, boot;
    const businessCategory = this.props.businessCategories;
    if (businessCategory.length > 0) {
      res = businessCategory[0].id;
      home = businessCategory[1].id;
      cafe = businessCategory[2].id;
      boot = businessCategory[3].id;
    }
    let selectedBusCategories = [];
    this.props.businesses.forEach(business => {
      if (this.props.category === business.business_category_id.toString()) {
        selectedBusCategories.push(business);
      }
    });
    let businesses = selectedBusCategories.map((business, idx) => (
      <Business key={business.id} business={business} idx={idx} />
    ));

    if (
      this.state.price.length > 0 ||
      this.state.noise.length > 0 ||
      this.state.delivery.length > 0
    ) {
      businesses = this.props.businesses.map((business, idx) => (
        <Business key={business.id} business={business} idx={idx} />
      ));
      selectedBusCategories = this.props.businesses;
    }

    if (businesses.length === 0) {
      businesses = (
        <ul className="no-res-wrapper">
          <li className="suggestions">
            Suggestions for improving the results:
          </li>
          <li>Try a different search.</li>
          <li>Check the spelling or try alternate spellings.</li>
          <li>
            Try a more general search. e.g. "pizza" instead of "pepperoni"
          </li>
        </ul>
      );
    }

    let brandName;
    if (this.props.currentUser) {
      brandName = "small-brand-name2";
    } else {
      brandName = "small-brand-name";
    }

    let map;
    if (this.props.businesses.length > 0) {
      map = (
        <div>
          <div />
          <div className="map-ad">
            <BusinessMap
              id={"map-container"}
              businesses={selectedBusCategories}
              multiple={true}
            />
            <a href="https://github.com/jonathanahn95/">
              <img
                className="under-map-pic"
                src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"
              />
            </a>
          </div>
        </div>
      );
    } else {
      map = (
        <div>
          <div />
          <div className="map-ad">
            <BusinessMap
              id={"map-container"}
              businesses={this.props.businesses}
              multiple={true}
            />
            <a href="https://github.com/jonathanahn95/">
              <img
                className="under-map-pic"
                src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"
              />
            </a>
          </div>
        </div>
      );
    }
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

        <div />
        <div className="top-results-wrapper">
          <div className="top-results-wrapper2">
            <div className="top-category-results">
              <div className="top-category-results1">
                <div className="top-res-name">
                  <div className="top-results-home">
                    {this.renderFilterText()}
                  </div>
                </div>
                <div className="top-res-cat">in New York, NY</div>
              </div>
              <div className="show-num-bus">
                Showing 1-{businesses.length} of 20
              </div>
            </div>
            <div className="top-results-wrapper3">
              <ul className="top-wrapper3-sec-1">
                <li
                  className={this.renderToggle("price", 1)}
                  onClick={this.addtoArray("price")}
                  value="1"
                >
                  $
                </li>
                <li
                  className={this.renderToggle("price", 2)}
                  onClick={this.addtoArray("price")}
                  value="2"
                >
                  $$
                </li>
                <li
                  className={this.renderToggle("price", 3)}
                  onClick={this.addtoArray("price")}
                  value="3"
                >
                  $$$
                </li>
                <li
                  className={this.renderToggle("price", 4)}
                  onClick={this.addtoArray("price")}
                  value="4"
                >
                  $$$$
                </li>
              </ul>
              <div className="top-wrapper3-sec-2">
                <div className="sec-2-noise">Noise Level:</div>
                <ul className="sec-2-noise-levels">
                  <li
                    className={this.renderToggle("noise", 1)}
                    onClick={this.addtoArray("noise")}
                    value="1"
                  >
                    Quiet
                  </li>
                  <li
                    className={this.renderToggle("noise", 2)}
                    onClick={this.addtoArray("noise")}
                    value="2"
                  >
                    Average
                  </li>
                  <li
                    className={this.renderToggle("noise", 3)}
                    onClick={this.addtoArray("noise")}
                    value="3"
                  >
                    Loud
                  </li>
                  <li
                    className={this.renderToggle("noise", 4)}
                    onClick={this.addtoArray("noise")}
                    value="4"
                  >
                    Very Loud
                  </li>
                </ul>
              </div>
              <div className="top-wrapper3-sec-3">
                <div className="sec-3-del">Delivers:</div>
                <ul className="sec-3-del-options">
                  <li
                    className={this.renderToggle("delivery", 1)}
                    onClick={this.addtoArray("delivery")}
                    value="1"
                  >
                    Yes
                  </li>
                  <li
                    className={this.renderToggle("delivery", 0)}
                    onClick={this.addtoArray("delivery")}
                    value="0"
                  >
                    No
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-business-container">
          <div className="business-container">{businesses}</div>
          {map}
        </div>
      </div>
    );
  }
}

export default withRouter(Businesses);

// <Route path="" component={bic} render(()=>{}</Route>)
