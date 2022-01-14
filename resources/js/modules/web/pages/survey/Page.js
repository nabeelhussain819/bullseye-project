import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"



export default function Page({ dispatch }) {

  const teal = {
    backgroundColor: 'teal'
  }

  return <>
  <div className="container">
    <h5>
    survey screen page
    </h5>
  </div>
  </>
}

Page.displayName = 'AddPage'
Page.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
