import React from "react";
import { IHomeScreenProps } from "../home-screen.props";
import { ActivityIndicator, FlatList, RefreshControl, View } from "react-native";
import { UserDTO } from "../../../redux/manage-favourites/types";
import { styles } from "./home-screen.style";
import UserListItem from "./user-list-item";

const Loader = () => <ActivityIndicator size={40} />

const HomeScreenView = (props: IHomeScreenProps) => {

    const { isLoading,
        list,
        isRefreshing,
        onRefresh,
        isPagingStart,
        onEndReached,
        addFavorite,
        removeFavorite,
        favoriteReducerData, } = props;

    const renderItem = (item: UserDTO) => {
        return (
            <UserListItem
                item={item}
                addToFavorite={addFavorite}
                removeFromFavorite={removeFavorite}
                isFavorite={favoriteReducerData?.includes(item)}
            />
        );
    };

    const renderFooter = () => (
        <View style={styles.footerText}>{isPagingStart && <Loader />}</View>
    );

    return (
        <View style={styles.mainView}>
            <View style={styles.listView}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.email}
                    onEndReachedThreshold={0.5}
                    onEndReached={onEndReached}
                    refreshControl={
                        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                    }
                    ListEmptyComponent={() =>
                        isLoading ?
                            (<View style={styles.loaderView}>
                                <Loader />
                            </View>) : null
                    }
                    extraData={list}
                    ListFooterComponent={renderFooter}
                    contentContainerStyle={styles.listContainerStyle}
                />
            </View>
        </View>
    );
}

export default HomeScreenView;