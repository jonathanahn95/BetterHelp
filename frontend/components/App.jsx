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
import SearchDropDownContainer from './search/search_drop_down_container';

const App = () => (
  <div>

    <Route exact path="/" component={SplashContainer}/>
    <Route  exact path="/business_categories/:id" component={BusinessesContainer} />
    <ProtectedRoute exact path ="/businesses/:businessId/review" component={CreateReviewFormContainer} />
    <ProtectedRoute exact path ="/businesses/:businessId/reviews/:id" component={EditReviewFormContainer} />
    <Route exact path ="/businesses" component={BusinessIndexContainer} />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route exact path ="/search"  component={SearchBusinessPageContainer} />
    <Route exact path ="/search/dropdown"  component={SearchBusinessPageContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer}/>
    <AuthRoute exact path="/signup" component={SignUpFormContainer}/>

    <div className='footer-container'>
      <footer className="footer">
        <ul className="about-list">
          About
          <li>
            <a href="https://github.com/jonathanahn95/BetterHelp">About BetterHelp</a>
            <a href="https://jonahn.io">About Me</a>
          </li>
        </ul>
        <ul className='connect-list'>
          Connect
          <a href="https://github.com/jonathanahn95/">GitHub</a>
          <a href="https://www.linkedin.com/in/jonathan-ahn-28981211b/">LinkedIn</a>
          <a href="https://angel.co/jonathan-ahn-1">Angel List</a>

        </ul>
        <ul className="discover-list">
          Other Projects
          <a href="http://fatal-start.jonahn.io/">Fatal-Start</a>
        </ul>
      </footer>
      <div className='footerImg-container'>
        <img className="footerImg" src={window.footerCityscape}></img>
      </div>
    </div>

  </div>
)

export default App;
