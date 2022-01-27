import React, { Component } from "react";
import LinkService from "../../../../services/API/LinkService";
import LinkRow from "./components/LinkRow";
import Message from "../../../../common/ui/Message";

class Page extends Component {
    static displayName = "LinksPage";
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            links: [],
            url: "",
            showMessage: false,
        };
    }

    async componentDidMount() {
        const { dispatch } = this.props;

        await this.getAllLinks();
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
            this.setState(
                {
                    showMessage: true,
                },
                () => {
                    setTimeout(() => {
                        this.setState({
                            showMessage: false,
                        });
                    }, 3000);
                }
            );
        });
    };

    resetInput = () => {
        this.setState({
            url: "",
        });
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
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                {this.state.showMessage ? (
                                    <Message
                                        heading="Added Link"
                                        text="Previous Link has been disabled"
                                        variant="alert alert-success"
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
