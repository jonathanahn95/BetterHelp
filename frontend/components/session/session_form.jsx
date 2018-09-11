import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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

  loginForm(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{header === 'Signup' ? 'Sign Up for Yelp' : 'Login To Yelp'}</h1>
        {this.renderErrors()}
        {this.props.link}
        <label>

          <input placeholder="Email" onChange={this.update('email')} type="text" value={this.props.email}></input>
        </label>
        <label>

          <input placeholder="Password" onChange={this.update('password')} type="password" value = {this.props.password}></input>
        </label>

        <input type="submit" value={this.props.formType}></input>
      </form>
    )
  }

  signupForm(){
    <form onSubmit={this.handleSubmit}>
      <h1>{header === 'Signup' ? 'Sign Up for Yelp' : 'Login To Yelp'}</h1>
      {this.renderErrors()}
      {this.props.link}
      <label>

        <input placeholder="Email" onChange={this.update('username')} type="text" value={this.props.username}></input>
      </label>
      <label>

        <input placeholder="Password" onChange={this.update('password')} type="password" value = {this.props.password}></input>
      </label>

      <input type="submit" value={this.props.formType}></input>
    </form>
  }

  render(){
    // const errors = this.props.errors.map( (error,idx) => {
    //     return {error};
    // });
    const header = this.props.formType;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{header === 'Signup' ? 'Sign Up for Yelp' : 'Login To Yelp'}</h1>
        {this.renderErrors()}
        {this.props.link}
        <label>

          <input placeholder="Email" onChange={this.update('username')} type="text" value={this.props.username}></input>
        </label>
        <label>

          <input placeholder="Password" onChange={this.update('password')} type="password" value = {this.props.password}></input>
        </label>

        <input type="submit" value={this.props.formType}></input>
      </form>
    )
  }
}



export default withRouter(SessionForm);
