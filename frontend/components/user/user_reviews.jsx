import React from 'react';
import { connect } from 'react-redux';
import { requestSingleBusiness } from '../../actions/businesses_actions';
import ReactStars from 'react-stars';

class UserReview extends React.Component {
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
    debugger
    return (
      <div>
        <div>
          <div>
            <img src={photo}></img>
          </div>
          <div>
            {busName}
            <div>
              {bus.address}
            </div>
          </div>

          <div>
            {review.created_at.slice(0,10)}
          </div>
        </div>
        <ReactStars
          count={5}
          edit={false}
          value={review.rating}
          size={24}
          color2={'#ffd700'} />
        <div>
          {review.body}
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
    requestSingleBusiness: (id) => dispatch(requestSingleBusiness(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReview);
