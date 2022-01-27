// import libs
import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { userUpdateRequest } from "../../service";

// import components
import Form from "./components/Form";

class Page extends Component {
    static displayName = "UserPage";
    static propTypes = {
        user: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        const user = this.props.user.toJson();

        this.state = {
            user,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const user = nextProps.user.toJson();

        if (!_.isEqual(this.state.user, user)) {
            this.setState({ user });
        }
    }

    handleChange(name, value) {
        this.setState({ user: { ...this.props.user, [name]: value } });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state.user;

        this.validator.validateAll(user).then((success) => {
            if (success) {
                this.submit(user);
            } else {
            }
        });
    }

    submit(user) {
        this.props
            .dispatch(userUpdateRequest(user))
            .catch(({ error, statusCode }) => {
                if (statusCode === 422) {
                    _.forOwn(error, (message, field) => {});
                }
            });
    }

    render() {
        return (
            <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
                <h1>Profile</h1>

                <section className="row">
                    <div className="col-12 col-md-9 col-sm-12">
                        <Form
                            {...this.state}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                        />
                    </div>
                </section>
            </main>
        );
    }
}

export default Page;
