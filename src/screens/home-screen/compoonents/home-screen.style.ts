import { StyleSheet } from "react-native";
import { colors } from "../../../utils/theme";
import { verticleScale } from "../../../utils/scalling";

export const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.background,
        flex: 1,
        paddingBottom: 0,
        paddingTop: verticleScale(20),
      },
      footerText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      },
      listView: {
        marginTop: verticleScale(0),
        flex: 1,
      },
      loaderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      listContainerStyle: {paddingBottom: 100},
    });