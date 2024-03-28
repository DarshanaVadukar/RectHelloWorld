import { StyleSheet } from "react-native";
import { colors } from "../../../utils/theme";
import { horizontalScale, scaledHeight, scaledWidth, verticleScale } from "../../../utils/scalling";

export const styles= StyleSheet.create({
    rootView :{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    mainView :{
        backgroundColor: colors.white,
        marginHorizontal: horizontalScale(5),
        marginVertical: verticleScale(70),
        height: scaledHeight(80),
        width: scaledWidth(90),
        alignSelf: 'center',
        justifyContent: 'center',
        padding: horizontalScale(15),
        paddingBottom: verticleScale(35),
        borderRadius: 10,
    },
    title : {
        color: colors.textBlack,
        fontSize: verticleScale(28),
        alignSelf: 'center',
        fontWeight: '600',
    },
    textFieldWrapper :{
        marginVertical: verticleScale(40),
    },
    logoWrapper:{
        position: 'absolute',
        top: -verticleScale(50),
        alignSelf: 'center',
        padding: horizontalScale(20),
        backgroundColor: colors.white,
        borderRadius: 90,
    },
    headerImage:{
        width: horizontalScale(25),
        aspectRatio: 1,
        resizeMode: 'cover',
        alignSelf: 'center',
        backgroundColor: colors.white,
    },
    buttonStyle:{
        backgroundColor: colors.primary,
        height: verticleScale(50),
        marginTop: verticleScale(20),
    },
});