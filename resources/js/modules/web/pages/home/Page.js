import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaUser, FaAvianex, FaFileContract } from "react-icons/fa";
import HomeService from "../../../../services/API/HomeService";

export default function Page({ dispatch }) {
    const [values, setValues] = useState({
        consumers: 0,
        surveys: 0,
        claims: 0,
        rejected_claims: 0,
        pending_claims: 0,
        approved_claims: 0,
    });

    const getTotalCounts = async () => {
        const { data } = await HomeService.getTotalCounts();

        setValues({
            ...values,
            consumers: data?.data.consumers,
            surveys: data?.data.surveys,
            claims: data?.data.claims,
            rejected_claims: data?.data.rejected_claims,
            pending_claims: data?.data.pending_claims,
            approved_claims: data?.data.approved_claims,
        });
    };

    useEffect(() => {
        getTotalCounts();
    }, []);

    return (
        <div className="container pt-5" style={{ maxWidth: "100%" }}>
            <div className="row ">
                <div className="col-md-4">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h3>
                                <FaUser />
                                &nbsp; Total Consumers: {values.consumers}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h3>
                                <FaAvianex /> &nbsp; Total Surveys:{" "}
                                {values.surveys}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h3>
                                <FaFileContract /> &nbsp; Total Claims:{" "}
                                {values.claims}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h3>
                                <FaFileContract /> &nbsp; Rejected Claims:{" "}
                                {values.rejected_claims}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h3>
                                <FaFileContract /> &nbsp; Pending Claims:{" "}
                                {values.pending_claims}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h3>
                                <FaFileContract /> &nbsp; Approved Claims:{" "}
                                {values.approved_claims}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Page.displayName = "HomePage";
Page.propTypes = {
    dispatch: PropTypes.func.isRequired,
};
