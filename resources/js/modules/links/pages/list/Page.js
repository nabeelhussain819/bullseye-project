// import libs
import React, { Component } from "react";
import PropTypes from "prop-types";

//import UserService from '~/services/API/UserService'

import { Link } from "react-router-dom";

import LinkService from "../../../../services/API/LinkService";
import LinkRow from "./components/LinkRow";

class Page extends Component {
    static displayName = "LinksPage";
    static propTypes = {
        // meta: PropTypes.object.isRequired,
        // // articles: PropTypes.array.isRequired,
        // dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            links: [],
            url: "",
        };
    }

    async componentDidMount() {
        const { dispatch } = this.props;
        //fetching API response @armash
        await this.getAllLinks();
        // dispatch(articleListRequest({}))
    }

    getAllLinks = () => {
        LinkService.all().then(({ data }) => {
            this.setState({
                links: data,
            });
        });
    };
    renderLinks() {
        return this.state.links.map((link, index) => {
            return <LinkRow key={index} link={link} index={index} />;
        });
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();

        if (this.state.url == "") {
            alert("Please Enter the link for the url");
            return;
        }

        LinkService.post({ url: this.state.url }).then(({ data }) => {
            this.getAllLinks();
            this.resetInput();
        });
    };

    resetInput = () => {
        this.state.url = "";
    };

    render() {
        const { url } = this.state;
        return (
            <div className="container pt-5">
                <div className="card ">
                    <div className="card-header">
                        <h1>Links</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <form onSubmit={this.submitHandler}>
                                    <fieldset>
                                        <legend>Create A New Link</legend>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-auto">
                                                <label className="col-form-label">
                                                    Url Link
                                                </label>
                                            </div>
                                            <div className="col-auto">
                                                <input
                                                    type="text"
                                                    value={url}
                                                    name="url"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    className="form-control"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Url</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>{this.renderLinks()}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
