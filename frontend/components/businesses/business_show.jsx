import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


class BusinessShow extends React.Component {

  componentDidMount() {
    debugger
    this.props.requestSingleBusiness(this.props.business.id);
  }
  render() {
    debugger
    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>
          </h1>
        </header>

        <main className='top-shelf'>
          <div className='content'>
            <div className='page-header'>
              <div className='left'>
                {this.props.business.name}
              </div>
              <div className='right'>
                <button className='right-button'>Write a review</button>
              </div>
            </div>
            <div className='subheader'>
              <div className='map'>
              </div>
              <div className='show-pics'>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default withRouter(BusinessShow);

// <Route path="" component={bic} render(()=>{}</Route>)
