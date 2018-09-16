import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.action(this.state).then(() => {
      const businessId = this.props.review.business_id;
      this.props.history.push(`/businesses/${businessId}`)
    });
    // this.props.clearErrors();
  }

  updateBody() {
      return (e) => {
        this.setState({ body: e.target.value});
      };
    }

  renderErrors() {
    return (
      <ul className="ike-review-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  // <Link to={`/businesses/${this.props.business.id}/`}></Link>
  // debugger
  // const business = this.props.business;
  // if(!this.props.business) {
  //   return (
  //     <div className='empty'/>
  //   );
  // }
  render() {
    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>
          </h1>
        </header>
        {this.renderErrors()}
        <div className="main-review-form-container">
          <div className="review-form-container">
            <form className="review-form" onSubmit={this.handleSubmit}>
              <ul className='form-rating-list'>

                <li onClick={() => this.setState({ rating: 1 })}>1</li>
                <li onClick={() => this.setState({ rating: 2 })}>2</li>
                <li onClick={() => this.setState({ rating: 3 })}>3</li>
                <li onClick={() => this.setState({ rating: 4 })}>4</li>
                <li onClick={() => this.setState({ rating: 5 })}>5</li>
              </ul>
              <textarea value={this.state.body} onChange={this.updateBody()} className="form-body" placeholder="Your review helps others learn about great local businesses. Please do not review this business if you received a freebie for writing this review, or if you are connected in any way to the owner or employees.">
              </textarea>

              <button className="review-form-button">{this.props.formType}</button>
            </form>
          </div>
          <div className='button-container'>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
