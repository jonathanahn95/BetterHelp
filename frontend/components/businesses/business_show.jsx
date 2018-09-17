import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


class BusinessShow extends React.Component {
  constructor(props){
    super(props);
    this.navigateToEdit = this.navigateToEdit.bind(this);

  }


  componentDidMount() {
    this.props.requestSingleBusiness(this.props.match.params.businessId);
  }

  navigateToEdit(review) {
    return (e) => {
      this.props.history.push(`/businesses/${review.business_id}/reviews/${review.id}`)
    }
  }
  render() {
    const business = this.props.business;
    if(!this.props.business) {
      return (
        <div className='empty'/>
      );
    }

    const reviewsArr = this.props.reviews && Object.values(this.props.reviews).map( review => {
      return (
        <div className='reviews-container'>
          <li className='review-body'>{review.body}</li>
          <li className='review-rating'>{review.rating}</li>
          <button onClick={e => this.props.deleteReview(review.id)}>deltee</button>
          <button onClick={ this.navigateToEdit(review) }>edit</button>
        </div>
      )
    })


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
                {business.name}
              </div>
              <div className='right'>
                <Link to={`/businesses/${business.id}/review`}><button className='right-button'>Write a review</button></Link>
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
        <div className='main-reviews-container'>
          <div className='placeholder'>
            placeholder
            asdasdasd
          </div>
          <div className='reviews'>
            { reviewsArr }
          </div>
          <div className="business-show-container">


               <ul className="business-hours">
                 <h1 className='header-hours'>Hours</h1>
                   <li className='day-container'>
                     <p className='day'>
                       Mon:
                     </p>
                     <p>
                       {business.hours[0]}
                     </p>
                   </li>
                   <li className='day-container'>
                     <p className='day'>
                       Tues:
                     </p>
                     <p>
                       {business.hours[1]}
                     </p>
                   </li>
                   <li className='day-container'>
                     <p className='day'>
                       Wed:
                     </p>
                     <p>
                       {business.hours[2]}
                     </p>
                   </li>
                   <li className='day-container'>
                     <p className='day'>
                       Thurs:
                     </p>
                     <p>
                       {business.hours[3]}
                     </p>
                   </li>
                   <li className='day-container'>
                     <p className='day'>
                       Fri:
                     </p>
                     <p>
                       {business.hours[4]}
                     </p>
                   </li>
                   <li className='day-container'>
                     <p className='day'>
                       Sat:
                     </p>
                     <p>
                       {business.hours[5]}
                     </p>
                   </li>
                   <li className='day-container'>
                     <p className='day'>
                       Sun:
                     </p>
                     <p>
                       {business.hours[6]}
                     </p>
                   </li>


               </ul>


           </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BusinessShow);

// <Route path="" component={bic} render(()=>{}</Route>)
