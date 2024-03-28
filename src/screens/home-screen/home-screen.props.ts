import React from "react";
import { UserDTO } from "../../redux/manage-favourites/types";

export type IHomeScreenProps = {
    isLoading:boolean;
    list:UserDTO[];
    isRefreshing :boolean;
    onRefresh:()=>void;
    isPagingStart:boolean;
    onEndReached : ()=>void;
    addFavorite: (item: UserDTO) => void;
    removeFavorite: (item: UserDTO) => void;
    favoriteReducerData: any;
};
