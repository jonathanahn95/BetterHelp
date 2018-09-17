import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateBody = this.updateBody.bind(this);
    this.giveOneStars = this.giveOneStars.bind(this);
   this.giveTwoStars = this.giveTwoStars.bind(this);
   this.giveThreeStars = this.giveThreeStars.bind(this);
   this.giveFourStars = this.giveFourStars.bind(this);
   this.giveFiveStars = this.giveFiveStars.bind(this);
   this.clearRating = this.clearRating.bind(this);
   this.clickedRating = this.clickedRating.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
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
  // <li onClick={() => this.setState({ rating: 5 })}>5</li>

//
giveOneStars() {
   switch (parseInt(this.state.rating)) {
     case 1:
       return " one-star  default";
     case 2:
       return " two-star  default";
     case 3:
       return " three-star  default";
     case 4:
       return " four-star  default";
     case 5:
       return " five-star  default";
      default:
       return " default";
   }
 }
 giveTwoStars() {
   switch (parseInt(this.state.rating)) {
     case 1:
       return " default";
     case 2:
       return " two-star  default";
     case 3:
       return " three-star  default";
     case 4:
       return " four-star  default";
     case 5:
       return " five-star  default";
      default:
       return " default";
   }
 }
 giveThreeStars() {
   switch (parseInt(this.state.rating)) {
     case 1:
       return " default";
     case 2:
       return " default";
     case 3:
       return " three-star  default";
     case 4:
       return " four-star  default";
     case 5:
       return " five-star  default";
      default:
       return " default";
   }
 }
 giveFourStars() {
   switch (parseInt(this.state.rating)) {
     case 1:
       return " default";
     case 2:
       return " default";
     case 3:
       return " default";
     case 4:
       return " four-star  default";
     case 5:
       return " five-star  default";
     default:
       return " default";
   }
 }
 giveFiveStars() {
   switch (parseInt(this.state.rating)) {
     case 1:
       return "  default";
     case 2:
       return " default";
     case 3:
       return " default";
     case 4:
       return " default";
     case 5:
       return "  five-star default";
     default:
       return " default";
   }
 }

 clickedRating() {
   document.getElementById("five").className = this.giveFiveStars();
   document.getElementById("four").className = this.giveFourStars();
   document.getElementById("three").className = this.giveThreeStars();
   document.getElementById("two").className =  this.giveTwoStars();
   document.getElementById("one").className = this.giveOneStars();
 }

 clearRating() {
   document.getElementById("five").className = " default";
   document.getElementById("four").className = " default" ;
   document.getElementById("three").className = " default";
   document.getElementById("two").className =  " default";
   document.getElementById("one").className = " default";
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
        <div className="main-review-form-container">
          <div className="review-form-container">
            <form className="review-form" onSubmit={this.handleSubmit}>
              <ul className="review-form-rating-list" onMouseOver={this.clearRating} onMouseOut={this.clickedRating}>
                <label id="one" className={this.giveOneStars()} >
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <input type="radio" name="radio-rating" value="1" onClick={() => this.setState({ rating: 5 })} />
                </label>
                <label id="two" className={this.giveTwoStars()} >
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <input type="radio" name="radio-rating" value="2" onClick={() => this.setState({ rating: 5 })} />
                </label>
                <label id="three" className={this.giveThreeStars()} >
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <input type="radio" name="radio-rating" value="3" onClick={() => this.setState({ rating: 5 })} />
                </label>
                <label id="four" className={this.giveFourStars()} >
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <input type="radio" name="radio-rating" value="4" onClick={() => this.setState({ rating: 5 })} />
                </label>
                <label id="five" className={this.giveFiveStars()} >
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <input type="radio" name="radio-rating" value="5" onClick={() => this.setState({ rating: 5 })} />
                </label>
              </ul>

              <textarea value={this.state.body} onChange={this.updateBody()} className="form-body" placeholder="Your review helps others learn about
                      great local businesses.&#10;Please don't review this business
                      if you received a freebie for writing this review, or if
                      you're connected in any way to the owner or employees.">
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
