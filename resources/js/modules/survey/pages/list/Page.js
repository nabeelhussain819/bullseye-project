import React, { Component } from "react";
import SurveyService from "../../../../services/API/SurveyServices";
import SurveyRow from "./components/SurveyRow";
import Message from "../../../../common/ui/Message";
import { Link } from "react-router-dom";

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
        confirm("Are you sure you want to remove ?");
        await SurveyService.remove({ id: id })
            .then(({ data }) => {
                this.getAllLinks();
                this.message(true, "", data.message, "alert alert-success");
            })
            .catch(() => {});
    };

    handleStatusChange = async (id) => {
        await SurveyService.updateStatus({ id: id })
            .then(({ data }) => {
                this.getAllLinks();
                this.message(true, "", data.message, "alert alert-success");
            })
            .catch(() => {});
    };

    render() {
        const { url } = this.state;
        return (
            <div className="container pt-5">
                <Link
                    to="/survey/create"
                    className="btn btn-success mb-1 text-white"
                >
                    ADD NEW
                </Link>
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
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Url Link</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.surveys.map(
                                            (link, index) => {
                                                return (
                                                    <SurveyRow
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
