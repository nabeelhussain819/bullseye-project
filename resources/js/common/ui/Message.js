const Message = ({ heading, text, variant }) => {
    return (
        <div className={variant}>
            <h4 className="alert-heading">{heading}</h4>
            <hr />
            <p className="mb-0">{text}</p>
        </div>
    );
};

export default Message;
