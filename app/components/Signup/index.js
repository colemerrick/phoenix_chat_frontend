import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

import { connect } from "react-redux"
import Actions from "../../redux/actions"

import Button from "../Button"

export class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  // submit(e) {
  //   console.log("Submit button clicked")
  // }
  submit() {
    const user = {
      username: document.getElementById("signup-username").value,
      email: document.getElementById("signup-email").value,
      password: document.getElementById("signup-password").value
    }
    this.props.dispatch(Actions.userNew(user))
    // fetch("http://localhost:4000/api/users", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ user })
    // })
    // .then((res) => { return res.json() })
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.warn(err);
    // })
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.form}>
          <div className={style.inputGroup}>
            <input
              placeholder="Username"
              className={style.input}
              type="text"
              id="signup-username" />
          </div>
          <div className={style.inputGroup}>
            <input
              placeholder="Email"
              className={style.input}
              type="text"
              id="signup-email" />
          </div>
          <div className={style.inputGroup}>
            <input
              placeholder="Password"
              className={style.input}
              type="password"
              id="signup-password" />
          </div>
          <div className={style.inputGroup}>
            <input
              placeholder="Verify Password"
              className={style.input}
              type="password"
              id="signup-verify-password" />
          </div>
          <Button
            onClick={this.submit}
            _style={{ width: "100%" }}
            type="primary">
            Submit
          </Button>
        </div>
      </div>
    )
  }
}

export default connect()(cssModules(Signup, style))