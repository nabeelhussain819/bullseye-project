const LinkRow = ({ link, index, handleDelete, handleStatusChange }) => {
    let badge = (status) => {
        return (
            <span
                role="button"
                onClick={() => handleStatusChange(link.id)}
                className={
                    status
                        ? "badge badge-success p-2 fw-bolder shadow-lg"
                        : "badge badge-danger p-2 fw-bolder shadow-lg"
                }
            >
                {status ? "ACTIVATED" : "DEACTIVATED"}
            </span>
        );
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{link.name}</td>
            <td>{badge(link.expired)}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(link.id)}
                >
                    DELETE
                </button>
            </td>
        </tr>
    );
};

export default LinkRow;
