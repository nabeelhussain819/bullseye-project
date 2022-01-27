import React from "react";
import PropTypes from "prop-types";

const displayName = "ConsumerForm";
const propTypes = {
    // article: PropTypes.object.isRequired,
    // errors: PropTypes.object.isRequired,
    // onChange: PropTypes.func.isRequired,
    // onSubmit: PropTypes.func.isRequired,
};

const Form = () => {
    // function handleChange(name, value) {
    //     if (value !== article[name]) {
    //         onChange(name, value);
    //     }

    return (
        <form>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-lg-12">
                    <div className="form-group row">
                        <label
                            htmlFor="title"
                            className="col-sm-2 col-form-label"
                        ></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-lg-12">
                    <div className="form-group row">
                        <label
                            htmlFor="description"
                            className="col-sm-2 col-form-label"
                        >
                            Input Survey Link:
                        </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group ">
                <div className="col-sm-12">
                    <button
                        type="submit"
                        className="btn btn-primary float-right"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

// Form.displayName = displayName;
// Form.propTypes = propTypes;

export default Form;
