import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      zipcode: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field){
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
}



  render(){
    // const errors = this.props.errors.map( (error,idx) => {
    //     return {error};
    // });
    const header = this.props.formType;

    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            BetterHelp
          </h1>
        </header>

        <form className="formtype-form" onSubmit={this.handleSubmit}>
          <h1 className="formtype-header">{header === 'Signup' ? 'Sign Up for BetterHelp' : 'Log In To BetterHelp'}</h1>
          <h2 className="comment">
              Connect with great local businesses
          </h2>

          {this.renderErrors()}
          <br></br>
          <br></br>
          <label>
            <input className="fname" placeholder="First Name" onChange={this.update('fname')} type="text" value = {this.state.fname}></input>
          </label>


          <label>
            <input className="lname" placeholder="Last Name" onChange={this.update('lname')} type="text" value = {this.state.lname}></input>
          </label>
          <br></br>

          <label>
            <input className="email" placeholder="Email" onChange={this.update('email')} type="text" value={this.state.email}></input>
          </label>
          <br></br>

          <label>
            <input className="password" placeholder="Password" onChange={this.update('password')} type="password" value = {this.state.password}></input>
          </label>
          <br></br>

          <label>
            <input className="zipcode" placeholder="ZIP Code" onChange={this.update('zipcode')} type="text" value = {this.state.zipcode}></input>
          </label>
          <br></br>


          <input className="submit" type="submit" value={this.props.formType}></input>
          <br></br>

          <select className='month' id='monthddl'>
            <option value='month'>Month</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>

          <select className='day' id='dayddl'>
            <option value='day'>Day</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
            <option value='21'>21</option>
            <option value='22'>22</option>
            <option value='23'>23</option>
            <option value='24'>24</option>
            <option value='25'>25</option>
            <option value='26'>26</option>
            <option value='27'>27</option>
            <option value='28'>28</option>
            <option value='29'>29</option>
            <option value='30'>30</option>
            <option value='31'>31</option>
          </select>


          <select className='day' id='blah'>
            <option value='year'>Year</option>
            <option value='2018'>2018</option>
            <option value='2017'>2017</option>
            <option value='2016'>2016</option>
            <option value='2015'>2015</option>
            <option value='2014'>2014</option>
            <option value='2013'>2013</option>
            <option value='2012'>2012</option>
            <option value='2011'>2011</option>
            <option value='2010'>2010</option>
            <option value='2009'>2009</option>
            <option value='2008'>2008</option>
            <option value='2007'>2007</option>
            <option value='2006'>2006</option>
            <option value='2005'>2005</option>
            <option value='2004'>2004</option>
            <option value='2003'>2003</option>
            <option value='2002'>2002</option>
            <option value='2002'>2002</option>
            <option value='2001'>2001</option>
            <option value='2000'>2000</option>
            <option value='1999'>1999</option>
            <option value='1998'>1998</option>
            <option value='1997'>1997</option>
            <option value='1996'>1996</option>
            <option value='1995'>1995</option>
            <option value='1994'>1994</option>
            <option value='1993'>1993</option>
            <option value='1992'>1992</option>
            <option value='1991'>1991</option>
            <option value='1990'>1990</option>
            <option value='1989'>1989</option>
            <option value='1988'>1988</option>
            <option value='1987'>1987</option>
            <option value='1986'>1986</option>
            <option value='1985'>1985</option>
            <option value='1984'>1984</option>
            <option value='1983'>1983</option>
            <option value='1983'>1983</option>
            <option value='1982'>1982</option>
            <option value='1981'>1981</option>
            <option value='1980'>1980</option>
            <option value='1979'>1979</option>
            <option value='1978'>1978</option>
            <option value='1977'>1977</option>
            <option value='1976'>1976</option>
            <option value='1975'>1975</option>
            <option value='1975'>1975</option>
          </select>




          <h3 className="test">

            Already on Yelp? {this.props.link}
          </h3>

        </form>
      </div>
    )
  }
}



export default withRouter(SignUpForm);
