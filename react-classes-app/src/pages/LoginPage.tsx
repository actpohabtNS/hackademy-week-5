/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import '../style/login_page/style.css'

import { signUp } from '../authApi/auth';

type loginState = {
  login: string,
  password: string
}

class LoginPage extends React.Component<{}, loginState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      login: '',
      password: '',
    }

    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleLoginInput(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ login: evt.target.value });
  }

  handlePasswordInput(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: evt.target.value });
  }

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">

          <form>
            <input
              onChange={this.handleLoginInput}
              value={this.state.login}
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />

            <input
              onChange={this.handlePasswordInput}
              value={this.state.password}
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />

            <input
              onClick={() => {
                signUp(this.state.login, this.state.password);
                this.setState({ login: "", password: "" });
              }}
              type="submit"
              className="fadeIn fourth"
              value="Sign In"
            />
          </form>

        </div>
      </div>
    )
  }
}

export default LoginPage;