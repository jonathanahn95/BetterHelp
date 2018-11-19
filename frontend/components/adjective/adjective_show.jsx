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
      this.props.fetchLike({
        review_id: this.props.review.id
      });
    }
  }

  helpfulText() {
    if (this.props.class === "business-show") {
      return "Was this review ...?";
    }
  }

  toggleCountDisplay() {
    if (this.props.class === "business-show") {
      return `${this.props.class}-attribute-count`;
    } else {
    }
  }

  toggleLike() {
    const likes = this.props.likes;
    const reviewId = this.props.review.id;
    if (!this.props.currentUser) {
      this.props.history.push(`/login`);
    } else if (likes && likes[reviewId] && likes[reviewId].like_count === 1) {
      this.props.deleteLike(this.adjectiveInfo);
    } else {
      this.props.createLike(this.adjectiveInfo);
    }
  }

  toggleFunny() {
    if (!this.props.currentUser) {
      debugger;
      this.props.history.push(`/login`);
    } else {
      this.props.updateFunny(this.adjectiveInfo);
    }
  }

  toggleCool() {
    if (!this.props.currentUser) {
      this.props.history.push(`/login`);
    } else {
      this.props.updateCool(this.adjectiveInfo);
    }
  }

  toggleUseful() {
    if (!this.props.currentUser) {
      this.props.history.push(`/login`);
    } else {
      this.props.updateUseful(this.adjectiveInfo);
    }
  }

  render() {
    let likeIcon;
    const reviewId = this.props.review.id;

    const { likes, cool, funny, useful } = this.props;
    if (likes && likes[reviewId] && likes[reviewId].like_count === 1) {
      likeIcon = (
        <li
          className={`${this.props.class}-adjective-like`}
          onClick={this.toggleLike}
        >
          <i className="fa fa-thumbs-up like-toggle" />
        </li>
      );
    } else {
      likeIcon = (
        <li
          className={`${this.props.class}-adjective-like`}
          onClick={this.toggleLike}
        >
          <i className="fa fa-thumbs-up" />
        </li>
      );
    }

    let coolCount;
    if (cool && cool[reviewId] && cool[reviewId].cool_count === 1) {
      coolCount = (
        <li
          onClick={this.toggleCool}
          className={`${this.props.class}-toggle-adjective-li`}
        >
          <div className="tooltip">
            <i
              className={`fa fa-grin-stars cool-toggle ${
                this.props.class
              }-icon`}
            />
            <li className={`${this.props.class}-tooltiptext`}>Cool</li>
          </div>
          <li className={`${this.props.class}-attribute-count`}>
            {cool[reviewId].cools.length}
          </li>
        </li>
      );
    } else if (cool && cool[reviewId] && cool[reviewId].cool_count === 0) {
      coolCount = (
        <li
          onClick={this.toggleCool}
          className={`${this.props.class}-adjective-li`}
        >
          <div className="tooltip">
            <i className={`fa fa-grin-stars ${this.props.class}-icon`} />
            <li className={`${this.props.class}-tooltiptext`}>Cool</li>
          </div>
          <li className={`${this.props.class}-attribute-count`}>
            {cool[reviewId].cools.length}
          </li>
        </li>
      );
    }

    let funnyCount;
    if (funny && funny[reviewId] && funny[reviewId].funny_count === 1) {
      funnyCount = (
        <li
          onClick={this.toggleFunny}
          className={`${this.props.class}-toggle-adjective-li`}
        >
          <div className="tooltip">
            <i
              className={`fa fa-grin-squint-tears funny-toggle ${
                this.props.class
              }-icon`}
            />
            <li className={`${this.props.class}-tooltiptext`}>Funny</li>
          </div>
          <li className={`${this.props.class}-attribute-count`}>
            {funny[reviewId].funny.length}
          </li>
        </li>
      );
    } else if (funny && funny[reviewId] && funny[reviewId].funny_count === 0) {
      funnyCount = (
        <li
          onClick={this.toggleFunny}
          className={`${this.props.class}-adjective-li`}
        >
          <div className="tooltip">
            <i className={`fa fa-grin-squint-tears ${this.props.class}-icon`} />
            <li className={`${this.props.class}-tooltiptext`}>Funny</li>
          </div>
          <li className={`${this.props.class}-attribute-count`}>
            {funny[reviewId].funny.length}
          </li>
        </li>
      );
    }

    let usefulCount;
    if (useful && useful[reviewId] && useful[reviewId].useful_count === 1) {
      usefulCount = (
        <li
          className={`${this.props.class}-toggle-adjective-li`}
          onClick={this.toggleUseful}
        >
          <div className="tooltip">
            <i
              className={`fa fa-lightbulb useful-toggle ${
                this.props.class
              }-icon `}
            />
            <li className={`${this.props.class}-tooltiptext-useful`}>Useful</li>
          </div>
          <li className={`${this.props.class}-attribute-count`}>
            {useful[reviewId].useful.length}
          </li>
        </li>
      );
    } else if (
      useful &&
      useful[reviewId] &&
      useful[reviewId].useful_count === 0
    ) {
      usefulCount = (
        <span
          className={`${this.props.class}-adjective-li`}
          onClick={this.toggleUseful}
        >
          <div className="tooltip">
            <i className={`fa fa-lightbulb ${this.props.class}-icon`} />
            <li className={`${this.props.class}-tooltiptext-useful`}>Useful</li>
          </div>
          <li className={`${this.props.class}-attribute-count`}>
            {useful[reviewId].useful.length}
          </li>
        </span>
      );
    }

    return (
      <div className={`${this.props.class}-adjective-wrapper`}>
        <div className="helpful-review">{this.helpfulText()}</div>

        <ul className={`${this.props.class}-adjective-ul`}>
          <div className={`${this.props.class}-adjective-ul-wrapper`}>
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
