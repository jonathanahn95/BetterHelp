import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ReactStars from 'react-stars';
import BusinessMap from '../map/business_map';
import SearchFormContainer from '../search/search_form_container';
import { businessInfo } from './business_info';


class BusinessShow extends React.Component {
  constructor(props){
    super(props);
    this.navigateToEdit = this.navigateToEdit.bind(this);

  }

  componentDidMount() {
    this.props.requestSingleBusiness(this.props.match.params.businessId);
    this.props.requestAllBusinessCategories();

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



  // <button className='button-img' onClick={e => this.props.deleteReview(review.id)}><img className="dub" src={window.trashBin}></img></button>
  // <button className='button-img' onClick={ this.navigateToEdit(review) }><img className="dub" src={window.trashBin}></img>
  //
  // </button>

  userReviews(review) {

    if (this.props.session === review.user_id ){
      return (
        <div >
          <img key="edit" onClick={ this.navigateToEdit(review) } className="dub" src={window.edit}></img>
          <img key="trash" onClick={e => this.props.deleteReview(review.id)} className="dub" src={window.trashBin}></img>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }

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

    const imagesArr = this.props.business.photos.slice(1).map( photo => {
      return <img key={photo.id} className="bus-show-pics" src={photo.photo_image_url}></img>
    })

    const reviewsArr = this.props.reviews.map( review => {
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

            <li className='review-created-at'>{review.created_at.slice(0,10)}</li>
          </div>
          <li className='review-body'>{review.body}</li>
          <div className='dub-container'>

            {this.userReviews(review)}
         </div>

        </div>
      </div>
      )
    })

    let res, home, cafe, boot;
    if (this.props.businessCategories.length > 0){
      res = this.props.businessCategories[0].id;
      home = this.props.businessCategories[1].id;
      cafe = this.props.businessCategories[2].id;
      boot = this.props.businessCategories[3].id;
    }

    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            <Link to="/"><img className="small-brand-name" src={window.betterHelpSplash}></img></Link>
              <SearchFormContainer className={'nav-sear-container'}/>

          </h1>
        </header>

        <ul className='ul-nav-bar-item2'>
          <div className='nav-bar-container1'>
            <Link className='nav-bar-container1-links' to={`/business_categories/${res}`}><i class="fas fa-utensils"></i><p >Restaurant</p></Link>
            <Link className='nav-bar-container1-links' to={`/business_categories/${home}`}><i class="fas fa-home"></i><p >Home Services</p></Link>
            <Link className='nav-bar-container1-links' to={`/business_categories/${cafe}`}><i class="fas fa-coffee"></i><p >Cafes</p></Link>
            <Link className='nav-bar-container1-links' to={`/business_categories/${boot}`}><i class="fas fa-keyboard"></i><p >Bootcamps</p></Link>
          </div>
          <div className='review-bar-container1'>
            <Link className='review-bar-container1-link' to={`/businesses/`}><i class="fas fa-pen"></i><p >Write a Review</p></Link>
          </div>
        </ul>

        <main className='top-shelf'>
          <div className='content'>
            <div className='page-header'>

              <div className='left'>
                {business.name}
                <div className='num-reviews-container'>

                  <ReactStars
                    className='stars'
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
                <div className='right-review'>
                  <Link to={`/businesses/${business.id}/review`}><button className='right-button'><i class="fa fa-star"></i>Write a Review</button></Link>
                </div>
              </div>
            </div>
            <div className='subheader'>
              <div className='info'>
                <div className='show-buss-map'>
                  <BusinessMap id={'show-map-container'} business={this.props.business} single={true}/>
                </div>
                <div className='show-li-container'>
                  <li className='bus-address' ><i class="fa fa-map-marker-alt"></i>{business.address}</li>
                  <div className='show-info-container'>
                    <li className='bus-city'>{business.city},</li>
                    <li className='bus-state'>{business.state}</li>
                    <li className='bus-zipcode'>{business.zip_code}</li>
                  </div>
                  <li><i class="fa fa-phone"></i>{business.phone_number}</li>
                  <li className='bus-website'>
                    <i class="fa fa-directions"></i>{business.website}
                  </li>
              </div>
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
              <a href="https://github.com/jonathanahn95/"><img className="tidy" src="https://s3.amazonaws.com/betterhelp-dev/ad.jpg"></img></a>

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
               {businessInfo()}

           </div>
        </div>

      </div>
    )
  }
}

export default withRouter(BusinessShow);

// <Route path="" component={bic} render(()=>{}</Route>)
