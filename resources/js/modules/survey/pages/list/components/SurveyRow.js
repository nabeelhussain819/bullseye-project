import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SurveyRow = ({ link, index, handleDelete, handleStatusChange }) => {
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
            <td>{link.url}</td>
            <td>{link.description}</td>
            <td>{badge(link.active)}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(link.id)}
                >
                    <FaTrash />
                </button>
            </td>
            <td>
                <Link
                    to={`/survey/claims/${link.id}`}
                    className="btn btn-success btn-sm"
                    style={{ fontWeight: "bolder" }}
                >
                    Details
                </Link>
            </td>
            <td></td>
        </tr>
    );
};

SurveyRow.propType = {
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleStatusChange: PropTypes.func.isRequired,
};

export default SurveyRow;
