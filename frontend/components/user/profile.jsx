import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCategoryIndexContainer from '../business_category/business_category_index_container';
import SearchFormContainer from '../search/search_form_container';
import BusinessIndexContainer from '../businesses/business_index_container';
import Business from '../businesses/business_index_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = this.props.businessCategories;
  }

  handleClick(e) {
  }

  componentDidMount() {
  }

  render() {
    return (
    );
  }

}


export default Profile;
