import { AnyAction } from "redux";
import { unFavourite } from "../../redux/manage-favourites/favourite.action";
import { UserDTO } from "../../redux/manage-favourites/types";
import { RootState } from "../../redux/root-reducer";
import { IFavouriteProps } from "./favourite-screen.props";
import { useDispatch, useSelector } from 'react-redux';

export const useFavouriteScreenHook = (): IFavouriteProps => {

    const favouriteList = useSelector((state: RootState) => state.favoriteReducer.favouriteItems);
    const dispatch = useDispatch();


    console.log("favouriteList from hook ", favouriteList);

    const unFavoriteUser = (item: UserDTO) => {
        dispatch(unFavourite(item) as unknown as AnyAction);
    };

    return {  unFavoriteUser ,favouriteList,};
}