import React from "react";
import { useFavouriteScreenHook } from "./favourite-screen.hooks";
import FavouriteScreenView from "./compoonents/favourite-screen.view";

export const FavouriteScreen = () => {
    const { favouriteList, unFavoriteUser } = useFavouriteScreenHook();
    return (
        <FavouriteScreenView
            favouriteList={favouriteList || []}
            unFavoriteUser={unFavoriteUser}
        />
    );
};

