import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ReactStars from 'react-stars';


class BusinessShow extends React.Component {
  constructor(props){
    super(props);
    this.navigateToEdit = this.navigateToEdit.bind(this);

  }


  componentDidMount() {
    this.props.requestSingleBusiness(this.props.match.params.businessId);
  }


  componentWillReceiveProps(nextProps) {
     if (this.props.match.params.businessId !== nextProps.match.params.businessId) {
       this.props.requestSingleBusiness(nextProps.match.params.businessId);
     }
   }

  navigateToEdit(review) {
    return (e) => {
      this.props.history.push(`/businesses/${review.business_id}/reviews/${review.id}`);
    };
  }

  moreBusinessInfo() {
    return (
      <ul className='more-business-info-container'>
        <h1 className='more-business-info'>
          More business info
        </h1>
        <li className='bus-info'>
          <p>
            Liked by Vegans
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Has Gluten-free Options
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Liked by Vegetarians
          </p>
            <p className='answer'>
              Yes
            </p>
        </li>
        <li className='bus-info'>
          <p>
            Takes Reservations
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Delivery
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Take-out
          </p>
            <p className='answer'>
              Yes
            </p>
        </li>
        <li className='bus-info'>
          <p>
            Accepts Credit Cards
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Accepts Apple Pay
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Accepts Google Pay
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Accepts Bitcoin
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Good For Lunch
          </p>
          <p className='answer'>
            Dinner
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Parking Street
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Bike Parking
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Wheelchair Accessible
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Good for Kids
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Good for Groups
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Attire Casual
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Noise Level
          </p>
          <p className='answer'>
            Average
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Alcohol Full
          </p>
          <p className='answer'>
            Bar
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Outdoor Seating
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Wi-Fi
          </p>
          <p className='answer'>
            Free
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Has TV
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Dogs Allowed
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Waiter Service
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Caters
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
        <li className='bus-info'>
          <p>
            By Appointment Only
          </p>
          <p className='answer'>
            No
          </p>
        </li>
        <li className='bus-info'>
          <p>
            Gender Neutral Restrooms
          </p>
          <p className='answer'>
            Yes
          </p>
        </li>
      </ul>
    )
  }

  // <button className='button-img' onClick={e => this.props.deleteReview(review.id)}><img className="dub" src={window.trashBin}></img></button>
  // <button className='button-img' onClick={ this.navigateToEdit(review) }><img className="dub" src={window.trashBin}></img>
  //
  // </button>

  render() {
    const business = this.props.business;
    if(!this.props.business) {
      return (
        <div className='empty'/>
      );
    }

    let reviewScore = []
    const reviewAvg = this.props.reviews.forEach( review => {
      reviewScore.push(review.rating)
    })
    reviewScore = reviewScore.reduce( (acc, el) => { return acc + el}) / this.props.reviews.length


    debugger

    const imagesArr = this.props.business.photos.slice(1).map( photo => {
      return <img key={photo.id} className="bus-show-pics" src={photo.image_url}></img>
    })

    const reviewsArr = this.props.reviews.map( review => {
      debugger
      return (
      <div className='lets-see'>
        <div className='user-name'>
          <img className="prof-pic" src={window.profPic}></img>

          <li className='fname1'>{review.user ? review.user.fname : ""}</li>
          <li className='lname1'>{review.user ? review.user.lname : ""}</li>
        </div>
        <div className='reviews-container' key={review.id}>

          <div className='rating-created-at'>
            <li className='review-rating'>
            <ReactStars
              count={5}
              edit={false}
              value={review.rating ? review.rating : 0}
              size={24}
              color2={'#ffd700'} />
          </li>

            <li className='review-created-at'>{review.created_at}</li>
          </div>
          <li className='review-body'>{review.body}</li>
          <div className='dub-container'>
            <img key="trash" onClick={e => this.props.deleteReview(review.id)} className="dub" src={window.trashBin}></img>
            <img key="edit" onClick={ this.navigateToEdit(review) } className="dub" src={window.edit}></img>
          </div>

        </div>
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
        <ul className='ul-nav-bar-item1'>
          <div className='nav-bar-container'>
            <Link to={`/business_categories/33`}><p className='nav-bar-item'>Restaurant</p></Link>
            <Link to={`/business_categories/34`}><p className='nav-bar-item'>Home Services</p></Link>
            <Link to={`/business_categories/35`}><p className='nav-bar-item'>Cafes</p></Link>
            <Link to={`/business_categories/36`}><p className='nav-bar-item'>Bootcamps</p></Link>
          </div>
          <div className='review-bar-container'>
            <Link to={`/businesses/`}><p className='nav-bar-item'>Write a Review</p></Link>
          </div>
        </ul>
        <main className='top-shelf'>
          <div className='content'>
            <div className='page-header'>
              <div className='left'>
                {business.name}
                <div className='num-reviews'>

                  <ReactStars
                    count={5}
                    half={false}
                    value={reviewScore}
                    onChange={this.ratingChanged}
                    size={24}
                    color2={'#ffd700'} />
                  {reviewsArr.length} reviews

                </div>
                <div className='num-reviews'>
                </div>
              </div>
              <div className='right'>
                <Link to={`/businesses/${business.id}/review`}><button className='right-button'>Write a review</button></Link>
              </div>
            </div>
            <div className='subheader'>
              <div className='info'>
                <li className='bus-address'>{business.address}</li>
                <li className='bus-city'>{business.city}</li><li className='bus-state'>{business.state}</li><li className='bus-zipcode'>{business.zipcode}</li>
                <li>
                  {business.phone_number}
                </li>
                <li className='bus-website'>
                  {business.website}
                </li>
              </div>
              <div className='show-pics'>
                {imagesArr}
              </div>
            </div>
          </div>
        </main>
        <div className='main-reviews-container'>

          <div className='reviews'>
            { reviewsArr }
          </div>
          <div className="business-show-container">
            <div className='imag'>
              <img className="tidy" src={window.tidy}></img>

            </div>

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
               {this.moreBusinessInfo()}

           </div>
        </div>

      </div>
    )
  }
}

export default withRouter(BusinessShow);

// <Route path="" component={bic} render(()=>{}</Route>)
