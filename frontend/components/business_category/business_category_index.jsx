import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BusinessCategory from './business_category';

class BusinessCategoryIndex extends React.Component {
  constructor(props){
    super(props);

  }


  componentDidMount() {
    this.props.requestAllBusinessCategories();

  }

  toggleIcons(category){
    switch (category.category) {
      case "Cafes":
      debugger
      return "fas fa-coffee one";
      case "Restaurants":
      return "fal fa-utentils one";
      case "Home Services one":
      return "fas fa-home";
      case "Bootcamps":
      return "fas fa-keyboard one";
      default:
      return "fa fa-utensils one";
    }
  }

  render() {

    //
    const businessCategories = this.props.businessCategories.map( (category, idx) =>
      <BusinessCategory  className={this.toggleIcons(category)} key={category.id} category={category} idx={idx} />)

   //  const businessCategories = this.props.businessCategories.length > 0 ? this.props.businessCategories.map( category => {
   //  <BusinessCategory key={category.id} category={category} />
   // }) : ['loading'];



    return (
      <div className='business-categories-container'>
        <ol className='business-categories'>
          {businessCategories}

        </ol>
      </div>
    )
  }



// business_category_index_container.js

}


export default withRouter(BusinessCategoryIndex);
