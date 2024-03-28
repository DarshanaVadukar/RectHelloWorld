import React from "react";
import { Image, ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import { APP_ICON_SMALL } from "../../assets/images";
import { horizontalScale, verticleScale } from "../utils/scalling";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../utils/theme";

export const Header = (): React.ReactElement => {
    const insets = useSafeAreaInsets();
    return (
      <View
        style={{
          ...styles.headerView,
          paddingTop: insets.top + verticleScale(5),
        }}>
        <Image style={styles.headerImage} source={APP_ICON_SMALL} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    headerImage: {
      width: horizontalScale(15),
      aspectRatio: 1,
      resizeMode: 'cover',
      alignSelf: 'center',
      backgroundColor: colors.white,
    } as ImageStyle,
    headerView: {
      width: '100%',
      backgroundColor: colors.white,
      paddingBottom: verticleScale(10),
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: verticleScale(5),
      },
      shadowOpacity: 0.1,
      shadowRadius: verticleScale(5),
      elevation: 6,
    } as ViewStyle,
  });
  