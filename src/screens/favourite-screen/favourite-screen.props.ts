import { UserDTO } from "../../redux/manage-favourites/types";

export type IFavouriteProps ={
    favouriteList: UserDTO[];
    unFavoriteUser : (item:UserDTO)=>void;
};