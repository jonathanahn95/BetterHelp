import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  requestAdjective,
  updateAdjective
} from "../../actions/adjective_actions";

class AdjectiveShow extends React.Component {
  constructor(props) {
    super(props);
    this.updateAdjective = this.updateAdjective.bind(this);
  }

  componentDidMount() {
    this.props.requestAdjective(`adjective=${this.props.review.id}`);
  }

  componentWillReceiveProps(nextProps) {}

  updateAdjective(adjective) {
    return e => {
      this.props.updateAdjective(adjective);
    };
  }

  render() {
    debugger;
    let adjective = this.props.adjectives;
    let coolCount;
    let funnyCount;
    let usefulCount;
    let currentUserLoggedIn;
    if (this.props.currentUser !== undefined) {
      currentUserLoggedIn = this.props.currentUser.id;
    }
    if (Object.keys(adjective).length !== 0) {
      coolCount = adjective.cool.cool_count;
      funnyCount = adjective.funny.funny_count;
      usefulCount = adjective.useful.useful_count;
      debugger;
    }
    return (
      <div className="adjective-wrapper">
        <div className="helpful-review">Was this review ...?</div>

        <ul className="adjective-ul">
          <div className="adjective-ul-wrapper">
            <li
              onClick={this.updateAdjective(
                `${this.props.review.id}?useful?${currentUserLoggedIn}`
              )}
              className="adjective-li"
              value="useful"
            >
              <i className="fa fa-lightbulb" />Useful {usefulCount}
            </li>
            <li
              onClick={this.updateAdjective(
                `${this.props.review.id}?funny?${currentUserLoggedIn}`
              )}
              className="adjective-li"
            >
              <i className="fa fa-grin-tears" />Funny {funnyCount}
            </li>
            <li
              onClick={this.updateAdjective(
                `${this.props.review.id}?cool?${currentUserLoggedIn}`
              )}
              className="adjective-li"
            >
              <i className="fa fa-grin-stars" />Cool {coolCount}
            </li>
          </div>
          <li className="adjective-like">
            <i className="fa fa-thumbs-up" />
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adjectives: state.entities.adjectives
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAdjective: attribute => dispatch(requestAdjective(attribute)),
    updateAdjective: attribute => dispatch(updateAdjective(attribute))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdjectiveShow);
