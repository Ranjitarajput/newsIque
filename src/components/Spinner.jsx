import React, { Component } from 'react'
import Loding from "./loading.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
            <img src={Loding} alt="Loding" />
        </div>
      </div>
    )
  }
}
