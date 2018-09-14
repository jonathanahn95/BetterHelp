import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Business extends React.Component {


  render() {
    debugger
    return (
      <div>
        <li>
          HIII
          {this.props.business.name}
          {this.props.business.address}
        </li>
      </div>
    )
  }
}

export default withRouter(Business);

// <Route path="" component={bic} render(()=>{}</Route>)
