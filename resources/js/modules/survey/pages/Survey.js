import Model from "../../utils/Model";

class Survey extends Model {
    constructor(props) {
        super(props);

        this.initialize(props);
    }

    initialize(props) {
        super.initialize(props);

        this.url = props.url || "";
        this.name = props.title || "";
        this.description = props.description || "";
        this.active = props.active || "";
    }
}

export default Survey;
