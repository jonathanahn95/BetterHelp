import React from 'react';
import { withRouter } from 'react-router-dom';

class LogInForm extends React.Component {

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

  render(){

    const header = this.props.formType;

    return (
      <div>
        <header className="login-header">
          <h1 className="login-head">
            BetterHelp
          </h1>
        </header>
        <form className="formtype-form" onSubmit={this.handleSubmit}>
          <h2 className="formtype-header">{header === 'Signup' ? 'Sign Up for BetterHelp' : 'Log In To BetterHelp'}</h2>
          {this.renderErrors()}

          <h3 className="sign-up-link">
            New to BetterHelp?    {this.props.link}
          </h3>
          <br></br>

          <h3 className="breakpoint">

          </h3>
          <label>

            <input className="email" placeholder="Email" onChange={this.update('email')} type="text" value={this.state.email}></input>
          </label>
          <br>
          </br>
          <label>

            <input className="password" placeholder="Password" onChange={this.update('password')} type="password" value = {this.state.password}></input>
          </label>
          <br>
          </br>

          <input className="login-submit" type="submit" value={this.props.formType}></input>
            <h3 className="bottom-sign-up-link">
              New to BetterHelp?    {this.props.link}
            </h3>
        </form>
      </div>
    )
  }
}



export default withRouter(LogInForm);
