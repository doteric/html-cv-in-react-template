import React, { Component } from 'react'
import './a4page.css'

export default class a4page extends Component {
  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    )
  }
}
