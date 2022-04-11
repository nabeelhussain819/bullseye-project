import {
    NEW_REQUEST_ID,
    STATUS_APPROVED_ID,
    STATUS_CONFIRMED_ID,
    STATUS_DECLINED_ID,
} from "../../../../../services/Constant";

const ClaimRow = ({ claim, index, handleReject, handleAccept }) => {
    let badge = (status) => {
        let spanClass = "";

        if (status == STATUS_CONFIRMED_ID) {
            spanClass = "warning";
        }

        if (status == STATUS_APPROVED_ID) {
            spanClass = "success";
        }

        if (status == NEW_REQUEST_ID) {
            spanClass = "info";
        }

        if (status == STATUS_DECLINED_ID) {
            spanClass = "danger";
        }

        return (
            <span
                className={`badge badge-${spanClass} p-2 fw-bolder shadow-lg`}
            >
                {claim.status}
            </span>
        );
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{claim?.user}</td>
            <td>{claim?.survey_name}</td>
            <td>{claim?.survey_url}</td>
            <td>{claim?.created_at}</td>
            <td>{badge(claim?.status_id)}</td>
            {/* <td>
                {claim.status_id == NEW_REQUEST_ID ||
                claim.status_id == STATUS_CONFIRMED_ID ? (
                    <div style={{ display: "flex" }}>
                        <button
                            onClick={() =>
                                handleReject(claim.id, STATUS_DECLINED_ID)
                            }
                            className="btn btn-danger mr-1"
                        >
                            REJECT
                        </button>

                        <button
                            onClick={() =>
                                handleAccept(claim.id, STATUS_APPROVED_ID)
                            }
                            className="btn btn-success  ml-1"
                        >
                            ACCEPT
                        </button>
                    </div>
                ) : (
                    "-"
                )}
            </td> */}
        </tr>
    );
};

export default ClaimRow;
