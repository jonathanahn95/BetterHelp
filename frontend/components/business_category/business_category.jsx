import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class BusinessCategory extends React.Component {
  render() {
    return (
      <div>
        <li className='business-categories-list'>
          <Link to={`/business_categories/${this.props.category.id}`}><i class={this.props.className}></i>{this.props.category.category}</Link>
        </li>
      </div>
    )
  }
}

export default withRouter(BusinessCategory);

// <Route path="" component={bic} render(()=>{}</Route>)
