import React, { Component } from "react";

import { Link } from "react-router-dom";

import UserService from "../../../../services/API/UsersService";
import Form from "./components/Form";

class Page extends Component {
    static displayName = "AddNewConsumerPage";
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {};
    }

    async componentDidMount() {
        const { dispatch } = this.props;
    }

    render() {
        return (
            <div className="container pt-5">
                <Form />
            </div>
        );
    }
}

export default Page;
