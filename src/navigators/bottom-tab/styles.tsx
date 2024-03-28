import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../utils/theme";
import { horizontalScale,verticleScale } from "../../utils/scalling";

export const styeles = StyleSheet.create({
    tabContainer: {
        backgroundColor: colors.white,
        borderTopWidth: 0,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: verticleScale(10),
        },
        shadowOpacity: 0.5,
        shadowRadius: verticleScale(12),
        elevation: 14,
    } as ViewStyle,
    tabLabel: {
        color: colors.primary,
        fontSize: verticleScale(11),
        fontWeight: '400',
    } as TextStyle,
    tabLabelActive: {
        color: colors.primary,
        fontSize: verticleScale(11),
        fontWeight: '700',
    } as TextStyle,
    logoWrapper: {
        alignSelf: 'center',
        padding: horizontalScale(20),
        backgroundColor: colors.white,
        borderRadius: 90,
    } as ViewStyle,
    tabItemStyle: {
        borderTopWidth: 3,
        paddingTop: verticleScale(8),
        borderTopColor: colors.white,
    } as ViewStyle,
    tabItemStyleActive: {
        borderTopWidth: 3,
        paddingTop: verticleScale(8),
        borderTopColor: colors.primary,
    } as ViewStyle
});

