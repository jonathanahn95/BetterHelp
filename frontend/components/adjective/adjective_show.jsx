import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  createLike,
  deleteLike,
  updateCool,
  updateFunny,
  updateUseful,
  fetchCool,
  fetchFunny,
  fetchUseful,
  fetchLike
} from "../../actions/adjective_actions";

class AdjectiveShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
    this.toggleCool = this.toggleCool.bind(this);
    this.toggleFunny = this.toggleFunny.bind(this);
    this.toggleUseful = this.toggleUseful.bind(this);
    if (this.props.currentUser) {
      this.adjectiveInfo = {
        user_id: this.props.currentUser.id,
        review_id: this.props.review.id
      };
    }
  }

  componentDidMount() {
    if (this.props.currentUser && this.props.currentUser.id) {
      this.props.fetchCool(this.adjectiveInfo);
      this.props.fetchFunny(this.adjectiveInfo);
      this.props.fetchUseful(this.adjectiveInfo);
      this.props.fetchLike(this.adjectiveInfo);
    } else {
      this.props.fetchCool({
        review_id: this.props.review.id
      });
      this.props.fetchFunny({
        review_id: this.props.review.id
      });
      this.props.fetchUseful({
        review_id: this.props.review.id
      });
    }
  }

  toggleLike() {
    const likes = this.props.likes;
    const reviewId = this.props.review.id;
    if (likes && likes[reviewId] && likes[reviewId].like_count === 1) {
      debugger;
      this.props.deleteLike(this.adjectiveInfo);
    } else {
      debugger;
      this.props.createLike(this.adjectiveInfo);
    }
  }

  toggleFunny() {
    debugger;
    this.props.updateFunny(this.adjectiveInfo);
  }

  toggleCool() {
    this.props.updateCool(this.adjectiveInfo);
  }

  toggleUseful() {
    this.props.updateUseful(this.adjectiveInfo);
  }

  render() {
    let likeIcon;
    const reviewId = this.props.review.id;

    const { likes, cool, funny, useful } = this.props;
    if (likes && likes[reviewId] && likes[reviewId].like_count === 1) {
      likeIcon = (
        <li className="adjective-like" onClick={this.toggleLike}>
          <i className="fa fa-thumbs-up like-toggle" />
        </li>
      );
    } else {
      debugger;
      likeIcon = (
        <li className="adjective-like" onClick={this.toggleLike}>
          <i className="fa fa-thumbs-up" />
        </li>
      );
    }

    let coolCount;
    if (cool && cool[reviewId] && cool[reviewId].cool_count === 1) {
      coolCount = (
        <li onClick={this.toggleCool} className="toggle-adjective-li">
          <i className="fa fa-grin-stars" />Cool
          <li className="attribute-count">{cool[reviewId].cools.length}</li>
        </li>
      );
    } else if (cool && cool[reviewId] && cool[reviewId].cool_count === 0) {
      coolCount = (
        <li onClick={this.toggleCool} className="adjective-li">
          <i className="fa fa-grin-stars" />Cool
          <li className="attribute-count">{cool[reviewId].cools.length}</li>
        </li>
      );
    }

    let funnyCount;
    if (funny && funny[reviewId] && funny[reviewId].funny_count === 1) {
      funnyCount = (
        <li onClick={this.toggleFunny} className="toggle-adjective-li">
          <i className="fa fa-grin-stars" />Funny
          <li className="attribute-count">{funny[reviewId].funny.length}</li>
        </li>
      );
    } else if (funny && funny[reviewId] && funny[reviewId].funny_count === 0) {
      funnyCount = (
        <li onClick={this.toggleFunny} className="adjective-li">
          <i className="fa fa-grin-stars" />Funny
          <li className="attribute-count">{funny[reviewId].funny.length}</li>
        </li>
      );
    }

    let usefulCount;
    if (useful && useful[reviewId] && useful[reviewId].useful_count === 1) {
      usefulCount = (
        <li className="toggle-adjective-li" onClick={this.toggleUseful}>
          <i className="fa fa-grin-stars" />Useful
          <li className="attribute-count">{useful[reviewId].useful.length}</li>
        </li>
      );
    } else if (
      useful &&
      useful[reviewId] &&
      useful[reviewId].useful_count === 0
    ) {
      usefulCount = (
        <li className="adjective-li" onClick={this.toggleUseful}>
          <i className="fa fa-grin-stars" />Useful
          <li className="attribute-count">{useful[reviewId].useful.length}</li>
        </li>
      );
    }

    return (
      <div className="adjective-wrapper">
        <div className="helpful-review">Was this review ...?</div>

        <ul className="adjective-ul">
          <div className="adjective-ul-wrapper">
            {usefulCount}
            {funnyCount}
            {coolCount}
          </div>
          {likeIcon}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    likes: state.entities.adjectives.likes,
    useful: state.entities.adjectives.useful,
    adjectives: state.entities.adjectives,
    cool: state.entities.adjectives.cool,
    funny: state.entities.adjectives.funny
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLike: attribute => dispatch(fetchLike(attribute)),
    fetchCool: attribute => dispatch(fetchCool(attribute)),
    fetchFunny: attribute => dispatch(fetchFunny(attribute)),
    fetchUseful: attribute => dispatch(fetchUseful(attribute)),
    createLike: attribute => dispatch(createLike(attribute)),
    deleteLike: attribute => dispatch(deleteLike(attribute)),
    updateCool: attribute => dispatch(updateCool(attribute)),
    updateFunny: attribute => dispatch(updateFunny(attribute)),
    updateUseful: attribute => dispatch(updateUseful(attribute))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdjectiveShow);
