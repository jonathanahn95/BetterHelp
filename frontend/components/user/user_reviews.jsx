import React from 'react';
import { connect } from 'react-redux';
import { requestSingleBusiness } from '../../actions/businesses_actions';

class UserReview extends React.Component {
  componentDidMount() {
    this.props.requestSingleBusiness(this.props.review.business_id);
  }

  render() {
    const reviewBus = this.props.review.business_id;
    const matchedBus = this.props.business[this.props.review.business_id];
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
      <div>
        <div>
          <div>
            {busName}
            <img src={photo}></img>
          </div>
          <div>
            {this.props.review.body}
          </div>
          <div>
            {bus.address}
          </div>
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
