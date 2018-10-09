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

  render() {

    //
    const businessCategories = this.props.businessCategories.map( (category, idx) =>
      <BusinessCategory  key={category.id} category={category} idx={idx} />)

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





}


export default withRouter(BusinessCategoryIndex);
