// import libs
import React, { Component } from "react";
import PropTypes from "prop-types";

//import UserService from '~/services/API/UserService'

import { Link } from "react-router-dom";

import UserService from "../../../../services/API/UsersService";
import ConsumerRow from "./components/ConsumerRow";

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
            consumers: [],
        };
    }

    async componentDidMount() {
        const { dispatch } = this.props;
        //fetching API response @armash
        await UserService.all().then(({ data }) => {
            this.setState({
                consumers: data,
            });
        });
        // dispatch(articleListRequest({}))
    }

    renderConsumers() {
        return this.state.consumers.map((consumer, index) => {
            return <ConsumerRow key={index} consumer={consumer} />;
        });
    }

    render() {
        console.log(this.state.consumers);
        return (
            <main
                className="col-sm-9 ml-sm-auto col-md-10 pt-3 mt-2"
                role="main"
            >
                <h1>User page</h1>
                <table className="table table-responsive table-striped">
                    <thead className="thead-inverse">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cell Number Primary</th>
                            <th>Cell Number Secondary</th>
                            <th>Cnic</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>Qualification</th>
                            <th>Designation</th>
                            <th>Occupation</th>
                            <th>Chief Earner</th>
                            <th>Chief Earner Occupation</th>
                            <th>Chief Earner Designation</th>

                            <th>
                                <Link
                                    to="/consumer/create"
                                    className="btn btn-success"
                                >
                                    Add
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>{this.renderConsumers()}</tbody>
                </table>
            </main>
        );
    }
}

export default Page;
