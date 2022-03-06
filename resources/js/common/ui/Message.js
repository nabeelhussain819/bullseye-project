import { useState } from "react";
import PropTypes from "prop-types";

const Message = ({ heading, text, variant }) => {
    return (
        <div className={variant}>
            <h4 className="alert-heading">{heading}</h4>
            <hr />
            <p className="mb-0">{text}</p>
        </div>
    );
};

Message.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
};

export default Message;
