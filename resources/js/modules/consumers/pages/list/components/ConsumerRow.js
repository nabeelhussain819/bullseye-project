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
        </tr>
    );
};

export default ConsumerRow;
