import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "./logger.js";

export default applyMiddleware(thunk, logger);
