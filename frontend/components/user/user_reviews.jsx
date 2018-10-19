import React from 'react';
import { connect } from 'react-redux';
import { requestSingleBusiness } from '../../actions/businesses_actions';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import { deleteReview, updateReview } from '../../actions/reviews_actions';

class UserReview extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleBusiness(this.props.review.business_id);
  }

  render() {
    const review = this.props.review;
    const reviewBus = review.business_id;
    const matchedBus = this.props.business[review.business_id];
    let busName;
    let bus;
    let photo;
    if (matchedBus && matchedBus.id === reviewBus){
      busName = matchedBus.name;
      bus = matchedBus;
      photo = matchedBus.photos[0].photo_image_url;
    } else {
      busName = '';
      photo = '';
      bus = '';
    }
    return (
      <div className='user-review-wrapper0'>
        <div className='user-review-wrapper1'>
          <div className='rev-pic-ad'>
            <div>
              <Link className='rev-edit-link'to={`/businesses/${bus.id}/`}><img className='user-prof-rev-pic'src={photo}></img></Link>
            </div>
            <div className='rev-ad'>
              <div className='rev-bus-name'>
                <Link className='rev-edit-link'to={`/businesses/${bus.id}/`}>{busName}</Link>
              </div>
              <div>
                {bus.address}
              </div>
            </div>
          </div>

          <div className='rev-date'>
            Wrote review on {review.created_at.slice(0,10)}
          </div>
        </div>

        <ReactStars
          className='rev-stars'
          count={5}
          edit={false}
          value={review.rating}
          size={20}
          color2={'#ffd700'} />
        <div className='rev-body-wrapper'>
          <div className='rev-body'>
            {review.body.slice(0,180)}
          </div>
        </div>
        <div className='rev-edi-del'>
          <Link className='rev-edit-link'to={`/businesses/${review.business_id}/reviews/${review.id}`}><p key="edit"  className="dub-edit" src={window.edit}>Update My Review</p></Link>
          <img key="trash" onClick={e => this.props.deleteReview(review.id)} className="dub" src={window.trashBin}></img>
        </div>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    business: state.entities.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (id) => dispatch(deleteReview(id)),
    updateReview: review => dispatch(updateReview(review)),
    requestSingleBusiness: (id) => dispatch(requestSingleBusiness(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReview);
