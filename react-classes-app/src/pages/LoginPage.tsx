/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import '../style/login_page/style.css'

class LoginPage extends React.Component {
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">

          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
            <input type="submit" className="fadeIn fourth" value="Sign In" />
          </form>

        </div>
      </div>
    )
  }
}

export default LoginPage;