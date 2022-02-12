import React, { Component } from "react";
import SurveyService from "../../../../services/API/SurveyServices";

import Message from "../../../../common/ui/Message";

class Page extends Component {
    static displayName = "LinksPage";
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            survey: {},
            // url: "",
            showMessage: false,
            messageText: "",
            messageHeading: "",
            messageVariant: "",
            name: null,
            url: null,
            description: null,
        };
    }
    handleInputChange = (e) => {
        let survey = this.state.survey;

        survey[e.target.name] = e.target.value;

        this.setState({ survey });
    };
    submitHandler = (e) => {
        e.preventDefault();

        // if (this.state.url == "") {
        //     alert("Please Enter the link for the url");
        //     return;
        // }


        SurveyService.post({ ...this.state.survey }).then(({ data }) => {
            this.getAllLinks();
            this.setState({ survey: {} });
            this.message(
                true,
                "Previous Link has been disabled",
                "Added Link",
                "alert alert-success"
            );
        });
    };

    render() {
        const { survey } = this.state;
        return (
            <div className="container pt-5">
                <div className="card ">
                    <div className="card-header">
                        <h1>Survey</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                {this.state.showMessage ? (
                                    <Message
                                        heading={this.state.messageHeading}
                                        text={this.state.messageText}
                                        variant={this.state.messageVariant}
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <form onSubmit={this.submitHandler}>
                                    <fieldset>
                                        <legend>Create A New Link</legend>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-6">
                                                <label className="col-form-label">
                                                    Name
                                                </label>
                                            </div>
                                            <div className="col-6 ">
                                                <input
                                                    type="text"
                                                    value={survey.name}
                                                    name="name"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="col-6">
                                                <label className="col-form-label">
                                                    Url Link
                                                </label>
                                            </div>
                                            <div className="col-6 ">
                                                <input
                                                    type="text"
                                                    name="url"
                                                    value={survey.url}
                                                    name="url"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="col-6">
                                                <label className="col-form-label">
                                                    Description
                                                </label>
                                            </div>

                                            <div className="col-6">
                                                <textarea
                                                    type="text"
                                                    value={survey.description}
                                                    name="description"
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
