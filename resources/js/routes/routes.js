// import modular routes
import webRoutes from "../modules/web/routes";
import authRoutes from "../modules/auth/routes";
import userRoutes from "../modules/user/routes";
import articleRoutes from "../modules/article/routes";
import consumerRoutes from "../modules/consumers/route";
import linkRoutes from "../modules/links/route";
import surveyRoutes from "../modules/survey/route";

export default [
    ...webRoutes,
    ...authRoutes,
    ...userRoutes,
    ...articleRoutes,
    ...consumerRoutes,
    ...linkRoutes,
    ...surveyRoutes,
];
