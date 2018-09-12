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
      <form onSubmit={this.handleSubmit}>
        <h1 >{header === 'Signup' ? 'Sign Up for BetterHelp' : 'Login To BetterHelp'}</h1>
        {this.renderErrors()}
        {this.props.link}
        <label>
          <input placeholder="First Name" onChange={this.update('fname')} type="text" value = {this.state.fname}></input>
        </label>
        <label>
          <input placeholder="Last Name" onChange={this.update('lname')} type="text" value = {this.state.lname}></input>
        </label>
        <label>
          <input placeholder="Email" onChange={this.update('email')} type="text" value={this.state.email}></input>
        </label>
        <label>
          <input placeholder="Password" onChange={this.update('password')} type="password" value = {this.state.password}></input>
        </label>
        <label>
          <input placeholder="ZIP Code" onChange={this.update('zipcode')} type="text" value = {this.state.zipcode}></input>
        </label>

        <input type="submit" value={this.props.formType}></input>
      </form>
    )
  }
}



export default withRouter(SignUpForm);
