// import libs
import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import ClaimRow from "./components/ClaimRow";
import ClaimService from "../../../../services/API/ClaimService";

class Page extends Component {
    static displayName = "ClaimPage";

    constructor(props) {
        super(props);

        this.state = {
            claims: [],
        };
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        await ClaimService.single(id)
            .then(({ data }) => {
                this.setState({
                    claims: data.data,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

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
                <Link to="/survey" className="btn btn-primary mb-1 ">
                    GO BACK
                </Link>
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
                                                {/* <th scope="col">Actions</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.claims.map(
                                                (claim, index) => {
                                                    return (
                                                        <ClaimRow
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
