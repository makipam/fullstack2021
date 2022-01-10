
import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (props.visible) {
    return (
      <div style={style}>
        {props.notification}
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  if ( state.notification.visible ) {
    return {
      notification: state.notification.message,
      visible: true
    }
  }
  return {
    notification: '',
    visible: false
  }
}

const connectedNotification = connect(mapStateToProps)(Notification)
export default connectedNotification