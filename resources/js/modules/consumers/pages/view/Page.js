// import libs
import React, { Component } from "react";
import PropTypes from "prop-types";

//import UserService from '~/services/API/UserService'

import { Link } from "react-router-dom";

import UserService from "../../../../services/API/UsersService";
import SurveyRow from "./components/SurveyRow";

class Page extends Component {
    static displayName = "ArticlesPage";
    static propTypes = {
        // meta: PropTypes.object.isRequired,
        // // articles: PropTypes.array.isRequired,
        // dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            consumer: [],
            surveys: [],
        };
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        await UserService.single(id).then((response) => {
            this.setState({
                consumer: response,
            });
        });

        await UserService.getSurveys(id).then((response) => {
            this.setState({
                surveys: response,
            });
        });
    }

    renderSurveys() {
        return this.state.surveys.map((survey, index) => {
            return <SurveyRow key={index} survey={survey} />;
        });
    }

    render() {
        return (
            <div className="container pt-5">
                <Link to="/consumers" className="btn btn-primary mb-1 ">
                    GO BACK
                </Link>
                <div className="card ">
                    <div className="card-header text-center">
                        <h1>Consumer Detail</h1>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead className="">
                                    <tr>
                                        <th>S No. </th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Cell Number Primary</th>
                                        <th>Cell Number Secondary</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ fontSize: "1rem" }}>
                                        <td>{this.state.consumer?.id}</td>
                                        <td>{this.state.consumer?.name}</td>
                                        <td>{this.state.consumer?.email}</td>
                                        <td>
                                            {
                                                this.state.consumer
                                                    ?.cell_number_primary
                                            }
                                        </td>
                                        <td>
                                            {
                                                this.state.consumer
                                                    ?.cell_number_secondary
                                            }
                                        </td>
                                        <td>
                                            {this.state.consumer?.created_at}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card mt-2">
                    <div className="card-header text-center">
                        <h1 style={{ textTransform: "uppercase" }}>
                            {this.state.consumer?.name} Claims
                        </h1>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-fixed">
                                <thead className="">
                                    <tr>
                                        <th>S No. </th>
                                        <th>Survey Name</th>
                                        <th>Survey Url</th>
                                        <th>Survey Description</th>
                                        <th>Status of Claim</th>
                                        <th>Date</th>
                                        <th>Approved By</th>
                                    </tr>
                                </thead>
                                <tbody>{this.renderSurveys()}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
