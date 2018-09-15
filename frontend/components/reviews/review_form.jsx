import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    });
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
        <div className="main-review-form-container">
          <div className="review-form-container">
            <form onSubmit={this.handleSubmit}>
              <textarea value={this.state.body} onChange={this.updateBody} className="form-body" placeholder="Your review helps others learn about great local businesses. Please do not review this business if you received a freebie for writing this review, or if you are connected in any way to the owner or employees.">
              </textarea>
              <Link to={`/businesses/${this.props.review.businessId}/`}><button className="review-form-button">{this.props.formType}</button></Link>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
