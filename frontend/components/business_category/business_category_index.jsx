import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import BusinessCategory from "./business_category";

class BusinessCategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllBusinessCategories();
  }

  toggleIcons(category) {
    switch (category.category) {
      case "Cafes":
        return "fas fa-coffee one";
      case "Restaurants":
        return "fal fa-utentils one";
      case "Home Services":
        return "fas fa-home one";
      case "Bootcamps":
        return "fas fa-keyboard one";
      default:
        return "fa fa-utensils one";
    }
  }

  render() {
    const businessCategories = this.props.businessCategories.map(
      (category, idx) => (
        <BusinessCategory
          className={this.toggleIcons(category)}
          key={category.id}
          category={category}
          idx={idx}
        />
      )
    );

    return (
      <div className="business-categories-container">
        <ol className="business-categories">{businessCategories}</ol>
      </div>
    );
  }
}

export default withRouter(BusinessCategoryIndex);
