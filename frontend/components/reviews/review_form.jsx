import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';


class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateBody = this.updateBody.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.requestSingleBusiness(this.props.match.params.businessId);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => {
      const businessId = this.state.business_id;
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
      <ul className="review-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  // <Link to={`/businesses/${this.props.business.id}/`}></Link>
  //
  // const business = this.props.business;
  // if(!this.props.business) {
  //   return (
  //     <div className='empty'/>
  //   );
  // }
  // <li onClick={() => this.setState({ rating: 5 })}>5</li>

//

ratingChanged(newRating) {
   this.setState({rating: newRating})
 }


  render() {

    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>
          </h1>
        </header>

        {this.renderErrors()}
        <div className='contain-name-form'>
          <div className='review-form-business-name'>
            {this.props.business.name}
          </div>
          <div className="main-review-form-container">
            <div className="review-form-container">
              <form className="review-form" onSubmit={this.handleSubmit}>

                <ReactStars
                  count={5}
                  half={false}
                  value={this.state.rating ? this.state.rating : 0}
                  onChange={this.ratingChanged}
                  size={24}
                  color2={'#ffd700'} />

                <textarea value={this.state.body} onChange={this.updateBody()} className="form-body" placeholder="Your review helps others learn about
                  great local businesses.&#10;Please don't review this business
                  if you received a freebie for writing this review, or if
                  you're connected in any way to the owner or employees.">
                </textarea>

                <button className="review-form-button">{this.props.formType}</button>
              </form>
            </div>
        </div>
          <div className='button-container'>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
