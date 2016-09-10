import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

import { Socket, Presence } from "phoenix"
import { connect } from "react-redux"

import Sidebar from "../Sidebar"


export class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      presences: {}
    }
  }

  componentDidMount() {
    const params = this.props.user
    this.socket = new Socket("ws://localhost:4000/socket", { params })
    this.socket.connect()
    this.configureAdminChannel()
  }

  configureAdminChannel() {
    this.adminChannel = this.socket.channel("admin:active_users")

    this.adminChannel.on("presence_state", state => {
      const presences = Presence.syncState(this.state.presences, state)
      this.setState({ presences })
    })

    this.adminChannel.on("presence_diff", state => {
      const presences = Presence.syncDiff(this.state.presences, state)
      this.setState({ presences })
    })

    this.adminChannel.join()
      .receive("ok", () => {
        console.log("Succesfully joined the active_users topic.")
      })
  }

  render() {
    return (
      <div>
        <Sidebar
          presences={this.state.presences} />
        <div className={style.chatWrapper}>
          chat me
        </div>
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(cssModules(Chat, style))