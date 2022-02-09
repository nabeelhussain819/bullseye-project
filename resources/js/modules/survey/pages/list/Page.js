import React, { Component } from "react";
import SurveyService from "../../../../services/API/SurveyServices";
import LinkRow from "./components/LinkRow";
import Message from "../../../../common/ui/Message";

class Page extends Component {
    static displayName = "LinksPage";
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            surveys: [],
            url: "",
            showMessage: false,
            messageText: "",
            messageHeading: "",
            messageVariant: "",
        };
    }

    async componentDidMount() {
        const { dispatch } = this.props;

        await this.getAllLinks();
    }

    getAllLinks = async () => {
        await SurveyService.all().then((surveys) => {
            this.setState({
                surveys: surveys.data,
            });
        });
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();

        if (this.state.url == "") {
            alert("Please Enter the link for the url");
            return;
        }

        SurveyService.post({ url: this.state.url }).then(({ data }) => {
            this.getAllLinks();
            this.resetInput();
            this.message(
                true,
                "Previous Link has been disabled",
                "Added Link",
                "alert alert-success"
            );
        });
    };

    message = (status, text, heading, variant) => {
        this.setState(
            {
                showMessage: status,
                messageText: text,
                messageHeading: heading,
                messageVariant: variant,
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        showMessage: false,
                        messageText: "",
                        messageHeading: "",
                        messageVariant: "",
                    });
                }, 3000);
            }
        );
    };

    resetInput = () => {
        this.setState({
            url: "",
        });
    };

    handleDelete = async (id) => {
        await SurveyService.remove({ id: id })
            .then(({ data }) => {
                this.getAllLinks();
                this.message(
                    true,
                    "Link Has Been removed",
                    "Removed Link",
                    "alert alert-success"
                );
            })
            .catch(() => {});
    };

    handleStatusChange = async (id) => {
        await SurveyService.updateStatus({ id: id })
            .then(({ data }) => {
                this.getAllLinks();
                this.message(
                    true,
                    "Link Now Current Active Link",
                    "Link Status Changed",
                    "alert alert-success"
                );
            })
            .catch(() => {});
    };

    render() {
        const { url } = this.state;
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
                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Url</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.surveys.map(
                                            (link, index) => {
                                                return (
                                                    <LinkRow
                                                        key={index}
                                                        link={link}
                                                        index={index}
                                                        handleDelete={
                                                            this.handleDelete
                                                        }
                                                        handleStatusChange={
                                                            this
                                                                .handleStatusChange
                                                        }
                                                    />
                                                );
                                            }
                                        )}
                                    </tbody>
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
