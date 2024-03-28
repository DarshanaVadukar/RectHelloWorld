import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Header } from '../../components';
import { TabScreenParamList } from "../apisauce-navigation-routes";
import { colors } from "../../utils/theme";
import { TabBarLabel, TabIcon } from "./bottom-tab-component";
import { styeles } from './styles';
import { HomeScreen } from "../../screens/home-screen/home-screen.screen";
import { FavouriteScreen } from "../../screens/favourite-screen/favourite-screen.screen";


const Tab = createBottomTabNavigator<TabScreenParamList>();

export function BottomTab() {
    return (
        <Tab.Navigator initialRouteName="HOME_SCREEN" screenOptions={({ route, navigation }) => ({
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.white,
            tabBarAllowFontScaling: true,
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} route={route} />,
            headerShown: true,
            header: () => <Header />,
            tabBarLabel: ({ focused }) => (
                <TabBarLabel focused={focused} route={route} />
            ),
            tabBarStyle: [styeles.tabContainer],
            tabBarItemStyle: navigation.isFocused()
                ? styeles.tabItemStyleActive
                : styeles.tabItemStyle,
        })}>
            <Tab.Screen name="HOME_SCREEN" component={HomeScreen} options={() => ({ title: "Home", })} />
            <Tab.Screen name="FAVOURITE_SCREEN" component={FavouriteScreen} options={() => ({ title: "Favorite", })} />
        </Tab.Navigator>
    );
}