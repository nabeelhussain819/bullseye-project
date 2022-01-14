import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"

// import components
import Main from './components/Main';

// import services
import { articleListRequest } from '../../../article/service'
import Search from "./components/Survey/Search";

export default function Page({ dispatch }) {
  useLayoutEffect(() => {
    dispatch(articleListRequest({ url: 'api/v1/articles/published' }))
  }, [])

  const teal = {
    backgroundColor: 'teal'
  }

  return <div className="container mt-4">
        <div className="card">
            <Search />
            <br></br>
            <div className="card-body">
              <Main/>
            </div>
          </div>
        </div>
}

Page.displayName = 'HomePage'
Page.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
