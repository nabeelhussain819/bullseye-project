import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";

// import components
import Articles from "../../../../common/articles/listing";

// import services
import { articleListRequest } from "../../../article/service";

export default function Page({ dispatch }) {
    useLayoutEffect(() => {
        dispatch(articleListRequest({ url: "api/v1/articles/published" }));
    }, []);

    return (
        <div>
            <Articles />
        </div>
    );
}

Page.displayName = "HomePage";
Page.propTypes = {
    dispatch: PropTypes.func.isRequired,
};
