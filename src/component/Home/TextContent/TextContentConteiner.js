import React from 'react'
import {TextContent} from "./TextContent.js"
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    prewText: state.bigState.prewText,
  }
}

export const TextContentConteiner = connect(
  mapStateToProps,
  {}
)(TextContent)
