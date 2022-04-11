import React, { Component } from "react";
import ClaimService from "../../../../services/API/ClaimService";
import Row from "./components/Row";
import Message from "../../../../common/ui/Message";
import { Link } from "react-router-dom";

class Page extends Component {
    static displayName = "ClaimsPage";
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            claims: [],
        };
    }

    async componentDidMount() {
        await this.getAllClaims();
    }

    getAllClaims = async () => {
        await ClaimService.all().then((claims) => {
            this.setState({
                claims: claims.data,
            });
        });
    };

    // handleInputChange = (e) => {
    //      this.setState({ [e.target.name]: e.target.value });
    // };

    submitHandler = (e) => {
        e.preventDefault();

        if (this.state.url == "") {
            alert("Please Enter the link for the url");
            return;
        }
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

    handleReject = async (id, status) => {
        await ClaimService.update({ id: id, status: status })
            .then(({ data }) => {
                this.getAllClaims();
                this.message(true, "Rejected Claim", "", "alert alert-success");
            })
            .catch(() => {});
    };

    handleAccept = async (id, status) => {
        await ClaimService.update({ id: id, status: status })
            .then(({ data }) => {
                this.getAllClaims();
                this.message(true, "Accepted Claim", "", "alert alert-success");
            })
            .catch(() => {});
    };

    render() {
        const { url } = this.state;
        return (
            <div className="container pt-5">
                <div className="card ">
                    <div className="card-header">
                        <h1>Claims</h1>
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
                                <div className="table-responsive">
                                    <table className="table ">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">
                                                    Consumer Name
                                                </th>
                                                <th scope="col">Survey Name</th>
                                                <th scope="col">Survey Link</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">
                                                    Claim Status
                                                </th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.claims.map(
                                                (claim, index) => {
                                                    return (
                                                        <Row
                                                            key={index}
                                                            claim={claim}
                                                            index={index}
                                                            handleAccept={
                                                                this
                                                                    .handleAccept
                                                            }
                                                            handleReject={
                                                                this
                                                                    .handleReject
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
            </div>
        );
    }
}

export default Page;
