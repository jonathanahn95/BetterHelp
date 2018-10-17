import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';


class SplashBusinessCategories extends React.Component {


  toggleIcons(category){
    switch (category) {
      case "Cafes":
      return "https://s3.amazonaws.com/betterhelp-dev/coff.png";
      case "Restaurant":
      return "https://s3.amazonaws.com/betterhelp-dev/rest.png";
      case "Home Services":
      return "https://s3.amazonaws.com/betterhelp-dev/wrench.png";
      case "Bootcamps":
      return "https://s3.amazonaws.com/betterhelp-dev/lap.png";
      default:
      return "https://s3.amazonaws.com/betterhelp-dev/coff.png";
    }
  }

  render() {
    const category = this.props.category.category;
    return (
      <div className='splash-category-wrapper'>
        <div className='splash-cat-pic-wrapper'>
          <img className='splash-cat-pic' src={this.toggleIcons(category)}></img>
        </div>
        <div className='splash-category-name'>
          {category}
        </div>
      </div>
    )
  }

}

export default withRouter(SplashBusinessCategories);

// <Route path="" component={bic} render(()=>{}</Route>)
