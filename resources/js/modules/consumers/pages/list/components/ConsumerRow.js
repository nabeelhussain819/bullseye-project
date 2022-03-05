import { Link } from "react-router-dom";

const ConsumerRow = ({ consumer }) => {
    return (
        <tr>
            <td>{consumer.id}</td>
            <td>{consumer.name}</td>
            <td>{consumer.email}</td>
            <td>{consumer.cell_number_primary}</td>
            <td>{consumer.cell_number_secondary}</td>
            <td>{consumer.cnic}</td>
            <td>{consumer.gender}</td>
            <td>{consumer.city}</td>
            <td>{consumer.qualification}</td>
            <td>{consumer.designation}</td>
            <td>{consumer.occupation}</td>
            <td>{consumer.chief_earner}</td>
            <td>{consumer.chief_earner_occupation}</td>
            <td>{consumer.chief_earner_designation}</td>
            <td>
                <div style={{ display: "flex", height: "50px" }}>
                    <button
                        className="btn btn-warning btn-sm"
                        style={{ fontSize: "10px", fontWeight: "bolder" }}
                    >
                        ACTIVE
                    </button>
                    &nbsp;
                    <Link
                        to={`/consumer/view/${consumer.id}`}
                        className="btn btn-primary btn-sm"
                        style={{ fontSize: "10px", fontWeight: "bolder" }}
                    >
                        VIEW
                    </Link>
                    &nbsp;
                    <button
                        className="btn btn-success btn-sm"
                        style={{ fontSize: "10px", fontWeight: "bolder" }}
                    >
                        VERIFY USER
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ConsumerRow;
