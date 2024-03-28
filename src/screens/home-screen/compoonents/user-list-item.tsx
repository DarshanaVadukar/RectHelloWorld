import React from "react";
import { UserDTO } from "../../../redux/manage-favourites/types";
import { horizontalScale, scaledWidth, verticleScale } from "../../../utils/scalling";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils/theme";
import { Icon } from "@rneui/themed";

interface ListItemProps {
    item: UserDTO;
    addToFavorite: (item: UserDTO) => void;
    removeFromFavorite: (item: UserDTO) => void;
    isFavorite: boolean;
}

const UserListItem = (props: ListItemProps) => {
    const { item, addToFavorite, removeFromFavorite, isFavorite } = props;
    return (
        <View style={styles.UserWrapper}>
            <View style={styles.ImageWrapper}>
                <Image style={styles.imageCircle}
                    source={{
                        uri: item?.picture?.medium,
                    }}
                />
            </View>
            <View style={styles.DetailsWrapper}>
                <Text
                    style={
                        styles.title
                    }>{`${item?.name?.first} ${item.name?.last}`}</Text>
                <View style={styles.addressWrapper}>
                    <Icon
                        name="location-pin"
                        type="material"
                        color={colors.gray}
                        size={horizontalScale(15)}
                    />
                    <Text
                        style={
                            styles.subTitle
                        }>{`${item.location.city}, ${item.location.country}`}</Text>
                </View>
                <View style={styles.addressWrapper}>
                    <Icon
                        name="local-phone"
                        type="material"
                        color={colors.gray}
                        size={horizontalScale(15)}
                    />
                    <Text style={styles.subTitle}>{`${item?.phone}`}</Text>
                </View>
            </View>
            <View style={styles.favoriteWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        isFavorite ? removeFromFavorite(item) : addToFavorite(item);
                    }}>
                    <Icon
                        name={isFavorite ? 'star-fill' : 'star'}
                        type="octicon"
                        color={colors.primary}
                        size={horizontalScale(25)}
                    />
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    UserWrapper: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginLeft: scaledWidth(7.5),
        marginRight: scaledWidth(2.5),
        marginVertical: 7,
        paddingVertical: verticleScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: verticleScale(2),
        },
        shadowOpacity: 0.1,
        shadowRadius: verticleScale(3),
        elevation: 3,
    },
    imageCircle: {
        height: horizontalScale(65),
        aspectRatio: 1,
        resizeMode: 'contain',
        borderRadius: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.white,
    },
    ImageWrapper: {
        position: 'absolute',
        left: horizontalScale(-15),
    },
    DetailsWrapper: {
        marginLeft: horizontalScale(60),
        flex: 1,
    },
    addressWrapper: {
        marginVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: verticleScale(17),
        fontWeight: '600',
        color: colors.textBlack,
    },
    subTitle: {
        fontSize: verticleScale(12),
        fontWeight: '400',
        color: colors.gray,
        marginLeft: horizontalScale(5),
    },
    favoriteWrapper: {
        paddingRight: horizontalScale(15),
        alignSelf: 'flex-start',
    },
});

export default UserListItem;