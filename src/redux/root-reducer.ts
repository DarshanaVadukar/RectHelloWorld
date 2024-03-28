import { combineReducers } from "redux";
import { favouriteReducer } from "./manage-favourites/favourite.reducer";

const rootReducer = combineReducers({
    favoriteReducer: favouriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
