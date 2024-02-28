import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import UserNameScreen from '../screens/UserNameScreen';
import TodoListScreen from '../screens/TodoListScreen';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import UpdateTodoItem from '../screens/Updatetodoitem';

const Stack = createStackNavigator();

const DBSqliteNavigationAssignment4 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserNameScreen"
          component={UserNameScreen}
          options={{
            title: 'UserNameScreen', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="TodoListScreen"
          component={TodoListScreen}
          options={({route, navigation}) => ({
            title: 'TodoListScreen', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          })}
        />
        <Stack.Screen
          name="UpdateTodoItem"
          component={UpdateTodoItem}
          options={({route}) => ({
            title:
              route.params && route.params.fromEdit
                ? route.params.fromEdit === true
                  ? 'Update Todo Item'
                  : 'Create Todo Item'
                : 'Create Todo Item',
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DBSqliteNavigationAssignment4;
