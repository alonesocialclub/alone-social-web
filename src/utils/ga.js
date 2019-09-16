import ReactGA from "react-ga";


const GA_PROJECT_ID = 'UA-148032267-1';


class Ga {

    constructor(ga_project_id, debug = true) {
        ReactGA.initialize(ga_project_id, {debug});
    }

    pageView(path) {
        ReactGA.pageview(path);
    }

    event(...args){
        ReactGA.event(...args);
    }
}

const debug = process.env.NODE_ENV !== 'production';
const ga = new Ga(GA_PROJECT_ID, debug);
export default ga;