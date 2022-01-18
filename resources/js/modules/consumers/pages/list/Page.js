// import libs
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
// import {articleListRequest, articleUpdateRequest, articleRemoveRequest} from '../../service'

// import components

import {Link} from 'react-router-dom'

class Page extends Component {
    static displayName = 'ArticlesPage'
    static propTypes = {
        // meta: PropTypes.object.isRequired,
        // // articles: PropTypes.array.isRequired,
        // dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props

        // dispatch(articleListRequest({}))
    }


    renderArticles() {
        return this.props.articles && this.props.articles.map((article, index) => {
            return <ArticleRow key={index}
                               article={article}
                               index={index}
                               togglePublish={this.togglePublish}
                               handleRemove={this.handleRemove}/>
        })
    }

    render() {
        return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
            <h1>User page</h1>
            <table className="table table-responsive table-striped">
                <thead className="thead-inverse">
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Published At</th>
                    <th><Link to='/consumer/create' className="btn btn-success">Add</Link></th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

        </main>
    }
}

export default Page
