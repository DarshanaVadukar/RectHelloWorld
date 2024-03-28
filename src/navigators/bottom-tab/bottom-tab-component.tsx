import React from "react";
import { Icon } from '@rneui/themed';
import { FAVOURITE_SCREEN, HOME_SCREEN } from "../apisauce-navigation-routes";
import { colors } from "../../utils/theme";
import { horizontalScale } from "../../utils/scalling";
import { Text } from "react-native-elements";
import { styeles } from "./styles";

type TabComponentProps = { route: any, focused: boolean };

const getIconName = (route: any, focused: boolean) => {
    let icon = '';
    if (route.name === HOME_SCREEN) {
        icon = focused ? "home-filled" : "home";
    } else if (route.name === FAVOURITE_SCREEN) {
        icon = focused ? "star-fill" : "star";
    }
    return icon;
};

const TabIcon = (props: TabComponentProps) => {
    return (
        <Icon name={getIconName(props.route, props.focused)}
            type={getIconName(props.route, props.focused) === "home-filled" ? 'material' : 'octicon'}
            color={colors.primary}
            size={horizontalScale(20)} />
    );
};

const TabBarLabel = ({route, focused}: TabComponentProps) => (
    <Text style={focused ? styeles.tabLabelActive : styeles.tabLabel}>
      {route.name === HOME_SCREEN ? 'Home' : 'Favorite'}
    </Text>
  );

export {TabIcon, TabBarLabel};