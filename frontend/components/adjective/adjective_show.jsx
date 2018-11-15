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
  fetchUseful
} from "../../actions/adjective_actions";

class AdjectiveShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
    this.toggleCool = this.toggleCool.bind(this);
    this.toggleFunny = this.toggleFunny.bind(this);
    this.toggleUseful = this.toggleUseful.bind(this);
    this.adjectiveInfo = {
      user_id: this.props.currentUser.id,
      review_id: this.props.review.id
    };
  }

  componentDidMount() {
    this.props.fetchCool(this.adjectiveInfo);
    this.props.fetchFunny(this.adjectiveInfo);
    this.props.fetchUseful(this.adjectiveInfo);
  }

  toggleLike() {
    if (this.props.likes && this.props.likes[this.props.review.id]) {
      this.props.deleteLike(this.props.currentUser.id);
    } else {
      this.props.createLike(this.adjectiveInfo);
    }
  }

  toggleFunny() {
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
    if (this.props.likes && this.props.likes[this.props.review.id]) {
      likeIcon = (
        <li className="adjective-like" onClick={this.toggleLike}>
          <i
            onClick={this.toggleLike}
            className="fa fa-thumbs-up like-toggle"
          />
        </li>
      );
    } else {
      likeIcon = (
        <li className="adjective-like" onClick={this.toggleLike}>
          <i onClick={this.toggleLike} className="fa fa-thumbs-up" />
        </li>
      );
    }

    let coolCount;
    if (
      this.props.cool &&
      this.props.cool[this.props.review.id] &&
      this.props.cool[this.props.review.id].cool_count === 1
    ) {
      coolCount = (
        <li onClick={this.toggleCool} className="toggle-adjective-li">
          <i className="fa fa-grin-stars" />Cool
          {this.props.cool[this.props.review.id].cools.length}
        </li>
      );
    } else if (
      this.props.cool &&
      this.props.cool[this.props.review.id] &&
      this.props.cool[this.props.review.id].cool_count === 0
    ) {
      coolCount = (
        <li onClick={this.toggleCool} className="adjective-li">
          <i className="fa fa-grin-stars" />Cool
          {this.props.cool[this.props.review.id].cools.length}
        </li>
      );
    }

    let funnyCount;
    if (
      this.props.funny &&
      this.props.funny[this.props.review.id] &&
      this.props.funny[this.props.review.id].funny_count === 1
    ) {
      funnyCount = (
        <li onClick={this.toggleFunny} className="toggle-adjective-li">
          <i className="fa fa-grin-stars" />Funny
          {this.props.funny[this.props.review.id].funny.length}
        </li>
      );
    } else if (
      this.props.funny &&
      this.props.funny[this.props.review.id] &&
      this.props.funny[this.props.review.id].funny_count === 0
    ) {
      funnyCount = (
        <li onClick={this.toggleFunny} className="adjective-li">
          <i className="fa fa-grin-stars" />Funny
          {this.props.funny[this.props.review.id].funny.length}
        </li>
      );
    }

    let usefulCount;
    if (
      this.props.useful &&
      this.props.useful[this.props.review.id] &&
      this.props.useful[this.props.review.id].useful_count === 1
    ) {
      debugger;
      usefulCount = (
        <li className="toggle-adjective-li" onClick={this.toggleUseful}>
          <i className="fa fa-grin-stars" />Useful
          {this.props.useful[this.props.review.id].useful.length}
        </li>
      );
    } else if (
      this.props.useful &&
      this.props.useful[this.props.review.id] &&
      this.props.useful[this.props.review.id].useful_count === 0
    ) {
      usefulCount = (
        <li className="adjective-li" onClick={this.toggleUseful}>
          <i className="fa fa-grin-stars" />Useful
          {this.props.useful[this.props.review.id].useful.length}
        </li>
      );
    }

    return (
      <div className="adjective-wrapper">
        <div className="helpful-review">Was this review ...?</div>

        <ul className="adjective-ul">
          <div className="adjective-ul-wrapper">
            <div>
              {usefulCount}
              {funnyCount}
              {coolCount}
            </div>
          </div>
          {likeIcon}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
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
