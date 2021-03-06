import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

import Signup from "../Signup"
import Login from "../Login"

import { connect } from "react-redux"

import Chat from "../Chat"

import PhoenixChat from 'phoenix-chat'

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formState: "login"
    }
    this.setFormState = this.setFormState.bind(this)
    this.renderToggleContent = this.renderToggleContent.bind(this)
  }

  setFormState(formState) {
    this.setState({formState})
  }

  renderToggleContent() {
    switch (this.state.formState) {
      case "login":
        return (
          <div
            className={style.changeLink}
            onClick={() => { this.setFormState("signup") }}>
            Need an account? Signup.
          </div>
        )
      case "signup":
        return (
          <div
            className={style.changeLink}
            onClick={() => { this.setFormState("login") }}>
            Have an account? Login.
          </div>
        )
      default: return null
    }
  }

  render() {
    if (this.props.user.email) {
      return (
        <Chat>
          <PhoenixChat />
        </Chat>
      )
    }
    return (
      <div className={style.leader}>
        <h1 className={style.title}>Phoenix Chat</h1>
        {this.state.formState === "signup" ? <Signup /> : null}
        {this.state.formState === "login" ? <Login /> : null}
        { this.renderToggleContent() }

        <PhoenixChat />
        
        <img
          role="presentation"
          className={style.circles}
          src="https://s3.amazonaws.com/learnphoenix-static-assets/images/circles-full.png" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(cssModules(Home, style))