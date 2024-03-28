import React from "react";
import { useHomeScreenHook } from "./home-screen.hooks";
import HomeScreenView from "./compoonents/home-screen.view";
export const HomeScreen = () => {

    const {
        isLoading,
        list,
        isRefreshing,
        onRefresh,
        isPagingStart,
        onEndReached,
        addFavorite,
        removeFavorite,
        favoriteReducerData,
    } = useHomeScreenHook();

    return (
        <HomeScreenView
            isLoading={isLoading}
            list={list}
            isRefreshing={isRefreshing}
            isPagingStart={isPagingStart}
            onEndReached={onEndReached}
            onRefresh={onRefresh}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            favoriteReducerData={favoriteReducerData}
        />
    );
};