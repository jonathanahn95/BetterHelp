import React from 'react';
import SignUpFormContainer from './session/sign_up_container';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import BusinessCategoryIndexContainer from './business_category/business_category_index_container';
import BusinessesContainer from './businesses/businesses_container';
import BusinessShowContainer from './businesses/business_show_container';
import CreateReviewFormContainer from './reviews/create_review_form_container';
import EditReviewFormContainer from './reviews/edit_review_form_container';
import BusinessIndexContainer from './businesses/business_index_container';
import SearchBusinessPageContainer from './search/search_business_page_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div>

    <Route exact path="/" component={SplashContainer}/>
    <Route  exact path="/business_categories/:id" component={BusinessesContainer} />
    <ProtectedRoute exact path ="/businesses/:businessId/review" component={CreateReviewFormContainer} />
    <ProtectedRoute exact path ="/businesses/:businessId/reviews/:id" component={EditReviewFormContainer} />
    <Route exact path ="/businesses" component={BusinessIndexContainer} />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route exact path ="/search"  component={SearchBusinessPageContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer}/>
    <AuthRoute exact path="/signup" component={SignUpFormContainer}/>

    <footer className="footer">
        <ul className="about-list">
          About
          <li>
            <a href="https://github.com/jonathanahn95/BetterHelp/wiki">BetterHelp Wiki</a>
          </li>
        </ul>
        <img className="footerImg" src={window.footerCityscape}></img>
        <ul className="discover-list">
          Discover
          <a href="https://github.com/jonathanahn95">Learn about me</a>
        </ul>
    </footer>

  </div>
)

export default App;
