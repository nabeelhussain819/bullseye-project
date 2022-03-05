import { Link } from "react-router-dom";

const SurveyRow = ({ survey }) => {
    return (
        <tr>
            <td>{survey.id}</td>
            <td>{survey.survey_name}</td>
            <td>{survey.survey_url}</td>
            <td>{survey.survey_description}</td>
            <td>{survey.status_of_claim}</td>
            <td>{survey.approved_by}</td>
        </tr>
    );
};

export default SurveyRow;
