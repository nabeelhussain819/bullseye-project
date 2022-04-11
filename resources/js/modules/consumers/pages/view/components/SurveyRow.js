import {
    NEW_REQUEST_ID,
    STATUS_APPROVED_ID,
    STATUS_CONFIRMED_ID,
    STATUS_DECLINED_ID,
} from "../../../../../services/Constant";

const SurveyRow = ({ survey }) => {
    let badge = (status, name) => {
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
                {name}
            </span>
        );
    };
    return (
        <tr style={{ fontSize: "1rem" }}>
            <td>{survey.id}</td>
            <td>{survey.survey_name}</td>
            <td>{survey.survey_url}</td>
            <td>{survey.survey_description}</td>
            <td>{badge(survey.status, survey.status_of_claim)}</td>
            <td>{survey.created_at}</td>
            <td>{survey.approved_by}</td>
        </tr>
    );
};

export default SurveyRow;
