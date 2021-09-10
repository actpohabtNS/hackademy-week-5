/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import '../style/login_page/style.css'

import { signUp } from '../authApi/auth';

const LoginPage = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">

        <form>
          <input
            onChange={e => setLogin(e.target.value)}
            value={login}
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
          />

          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />

          <input
            onClick={() => signUp(login, password)}
            type="submit"
            className="fadeIn fourth"
            value="Sign In"
          />
        </form>

      </div>
    </div>
  )
}

export default LoginPage;