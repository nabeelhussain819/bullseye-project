// import libs
import { connect } from "react-redux";

// import components
import Page from "./Page";

const mapStateToProps = (state) => {
    const { data, ...meta } = state.articles;

    return {
        user: [],
        meta: Object.assign({}, meta),
    };
};

export default connect(mapStateToProps)(Page);
