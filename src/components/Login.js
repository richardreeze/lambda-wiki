import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import '../styles/Login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    redirect: false,
  }
  redirect = () => {
    this.setState({ redirect: true });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser(email, password, this.redirect);
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container column box login">
      {this.state.redirect ? <Redirect to="/" /> : null}      
        <form onSubmit={this.onSubmit} className="log_cont container">
          <h2 className="title">Login</h2>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <input className="input" required="true" maxLength='100' type="email" onChange={this.onChange} name="email" value={this.state.email} placeholder="e.g. haskellcurry@gmail.com"  autoComplete="email"/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left">
              <input className="input" required="true" maxLength='100' type="password" onChange={this.onChange} name="password" value={this.state.password} placeholder="********" autoComplete="current-password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>
          <div className="field is-grouped btns">
            <div className="control">
              <button type="submit"className="button is-link subm">Login</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
          <p className="has-text-grey-dark">Don't have an account?  Create one <Link to="/register" >here</Link>.</p>
        </form>
      </div>
    );
  }
}

export default connect(null, { loginUser })(Login);