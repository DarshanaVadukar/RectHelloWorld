import React from "react";
import { UserDTO } from "../../../redux/manage-favourites/types";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { Icon } from "@rneui/themed";
import { colors } from "../../../utils/theme";
import { horizontalScale } from "../../../utils/scalling";
import { styles } from "./favourite-screen.style";
 
interface FavouriteProps{
    item : UserDTO
    removeFromFavorite:(user:UserDTO)=>void;
}

export const FavoriteListItemComponent = (props: FavouriteProps) => {
    return (
      <View style={styles.listItemContainer}>
        <Image
          style={styles.imageCircle}
          source={{
            uri: props.item?.picture?.medium,
          }}
        />
        <View style={styles.nameView}>
          <Text
            style={
              styles.title
            }>{`${props.item.name?.first} ${props.item.name?.last}`}</Text>
        </View>
        <View style={styles.starIconContainer}>
          <TouchableOpacity
            onPress={() => {
              props.removeFromFavorite(props.item);
            }}>
            <Icon
              name="star-fill"
              type="octicon"
              color={colors.primary}
              size={horizontalScale(24)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };