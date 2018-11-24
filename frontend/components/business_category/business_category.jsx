import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class BusinessCategory extends React.Component {
  render() {
    return (
      <div>
        <li className="business-categories-list">
          <Link to={`/business_categories/${this.props.category.id}`}>
            <i className={this.props.className} />
            {this.props.category.category}
          </Link>
        </li>
      </div>
    );
  }
}

export default withRouter(BusinessCategory);
