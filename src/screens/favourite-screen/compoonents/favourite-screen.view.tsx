import React from "react";
import { IFavouriteProps } from "../favourite-screen.props";
import { FlatList, Text, View } from "react-native";
import { ErrorMessages } from "../../../utils/constant";
import { styles } from "./favourite-screen.style";
import { UserDTO } from "../../../redux/manage-favourites/types";
import { FavoriteListItemComponent } from "./favouite-userlist-item.component";

const FavouriteScreenView = (props: IFavouriteProps) => {
  const { favouriteList, unFavoriteUser } = props;

console.log("favouriteList " +favouriteList);

  const renderItem = (item: UserDTO) => {
    return (
      <FavoriteListItemComponent
        item={item}
        removeFromFavorite={unFavoriteUser} />
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.listView}>
        <FlatList
          data={favouriteList}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={() => <SeparatorComponent />}
          ListEmptyComponent={() => (
            <Text style={styles.noFavorites}>{ErrorMessages.NO_FAVORITES}</Text>
          )}
        />
      </View>
    </View>

  );
};


const SeparatorComponent = () => <View style={styles.separator} />;

export default FavouriteScreenView;