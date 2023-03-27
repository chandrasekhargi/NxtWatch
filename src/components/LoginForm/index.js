import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import ViewOfHomePage from '../ViewOfHomePage'

import {LoginForm, CheckboxBtn} from '../../styledComponent'

import Header from '../Header'
import './index.css'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showErrorMsg: '',
  }

  enterUsername = event => {
    this.setState({username: event.target.value})
  }

  enterPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = token => {
    const {history} = this.props
    Cookie.set('jwt_token', token, {expires: 10, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = showErrorMsg => {
    this.setState({showErrorMsg})
  }

  submitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const data = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }
    const response = await fetch(url, options)

    const getData = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(getData.jwt_token)
    } else {
      this.onSubmitFailure(getData.error_msg)
    }
  }

  showPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {showPassword, username, password, showErrorMsg} = this.state
    const changePasswordType = showPassword ? 'text' : 'password'
    const errorMsgTxt = showErrorMsg ? `*${showErrorMsg}` : null

    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <>
        <div className="login-bg">
          <div className="login-card">
            <LoginForm onSubmit={this.submitForm}>
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="light logo"
                  className="logo"
                />
              </div>
              <div>
                <label className="label" htmlFor="username">
                  USERNAME
                </label>
                <br />
                <input
                  className="input"
                  placeholder="Username"
                  id="username"
                  type="text"
                  value={username}
                  onChange={this.enterUsername}
                />
              </div>
              <div>
                <label className="label" htmlFor="password">
                  PASSWORD
                </label>
                <br />
                <input
                  className="input"
                  placeholder="Password"
                  id="password"
                  type={changePasswordType}
                  onChange={this.enterPassword}
                  value={password}
                />
              </div>
              <div className="checkbox-container">
                <CheckboxBtn onClick={this.showPassword}>
                  <input
                    className="checkbox-input"
                    id="show-password"
                    type="checkbox"
                  />
                </CheckboxBtn>
                <label className="show-pwd-label" htmlFor="show-password">
                  Show Password
                </label>
              </div>
              <button className="login-btn" type="submit">
                Login
              </button>
              <p className="error-msg">{errorMsgTxt}</p>
            </LoginForm>
          </div>
        </div>
      </>
    )
  }
}

export default Login
