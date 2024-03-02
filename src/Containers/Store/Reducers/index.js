import { combineReducers } from "redux";
import reducerMovies from "./reducermovies";
const rootReducer = combineReducers({
    infoMovies: reducerMovies
});
export default rootReducer;