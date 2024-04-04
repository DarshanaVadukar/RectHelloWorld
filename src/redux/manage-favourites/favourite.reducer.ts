import { AnyAction } from "redux";
import { UserDTO } from "./types/user-dto";

interface initialFavouriteState {
  favouriteItems: UserDTO[];
  counter: number;
}

const initialState: initialFavouriteState = {
  favouriteItems: [],
  counter: 0,
};

const favouriteReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'REMOVE_FROM_FAVORITES':
      let newFavoriteItems = state.favouriteItems.filter(
        item => action.payload.email !== item.email,
      );
      console.log("newFavoriteItems ", newFavoriteItems);
      return Object.assign({}, state, {
        counter: state.counter - 1,
        favouriteItems: newFavoriteItems,
      });
    case 'ADD_TO_FAVORITES':
      console.log("add item ", action.payload);
      return Object.assign({}, state, {
        counter: state.counter + 1,
        favouriteItems: [...state.favouriteItems, action.payload],
      });
    default:
      return state;
  }
};

export { favouriteReducer };