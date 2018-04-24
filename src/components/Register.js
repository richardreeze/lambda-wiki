import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
import '../styles/Register.css';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPass: '',
    redirect: false,
  }
  redirect = () => {
    this.setState({ redirect: true });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    this.props.registerUser(name, email, password, this.redirect);
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container box register">
      {this.state.redirect ? <Redirect to="/" /> : null}
        <form onSubmit={this.onSubmit} className="log_cont container">
          <h2 className="title">Register</h2>
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left">
              <input className="input" required="true" maxLength='100' type="text" onChange={this.onChange} name="name" value={this.state.name} placeholder="e.g. Haskell Curry"  autoComplete="name"/>
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
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
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-left">
              <input className="input" required="true" maxLength='100' type="password" onChange={this.onChange} name="confirmPass" value={this.state.confirmPass} placeholder="********" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>
          <div className="field is-grouped btns">
            <div className="control">
              <button className="button is-link subm">Register</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
          <p className="has-text-grey-dark">Already have an account?  Login <Link to="/login" >here</Link>.</p>
        </form>
      </div>
    );
  }
}

export default connect(null, { registerUser })(Register);