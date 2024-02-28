import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const Item = ({data, dragX, handleEditItemClick, handleDeleteItem}: any) => (
  <View style={styles.item}>
    <Animated.View style={[styles.row, {transform: [{translateX: dragX}]}]}>
      <TouchableOpacity onPress={() => handleEditItemClick(data)}>
        <Image
          source={require('../../../assets/images/edit.png')}
          style={{
            alignSelf: 'flex-end',
            width: 40,
            height: 40,
            marginRight: 10,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Id : {data.id}</Text>
      <Text style={styles.title}>UserId : {data.user_id}</Text>
      <Text style={styles.title}>Title : {data.title}</Text>
      <Text style={styles.title}>Description : {data.description}</Text>
      <Text style={styles.title}>StartDate : {data.start_date}</Text>
      <Text style={styles.title}>DueDate : {data.due_date}</Text>
      <Text style={styles.title}>Status : {data.status}</Text>
      <Text style={styles.title}>Created Date : {data.created_date}</Text>
      <Text style={styles.title}>Updated Date : {data.updated_date}</Text>
      {renderSwipeDeleteButton(null, dragX, data.id, handleDeleteItem)}
    </Animated.View>
  </View>
);

const renderSwipeDeleteButton = (progress, dragX, id, handleDeleteItem) => {
  const trans = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [100, 0],
  });
  return (
    <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteItem(id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const TodoListScreen: React.FC = ({route, navigation}) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // Update header options to include data when the component mounts
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('UpdateTodoItem', {
              fromEdit: false,
              userId: route.params.userId,
            })
          }>
          <Image
            // source={require('../../../assets/images/plus.png')}
            source={require('../../../assets/images/plus.png')}
            style={{
              width: 24,
              height: 24,
              marginRight: 10,
              tintColor: '#fff',
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  const fetchData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user_todo_list WHERE user_id = ?',
        [userId], // Replace with the desired id value
        (tx, results) => {
          // Success callback
          const len = results.rows.length;
          const tempTodoList = [];
          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i);
            tempTodoList.push(results.rows.item(i));
            console.log(row); // Log the row data
          }
          setTodoList(tempTodoList);
        },
        (tx, error) => {
          // Error callback
          console.error(error);
        },
      );
    });
  };

  const deleteItem = id => {
    //handle delete query
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM table_user_todo_list WHERE id = ?',
        [id], // Replace with the desired id value
        (tx, results) => {
          // Success callback
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Record deleted successfully.',
              [
                {
                  text: 'Ok',
                  onPress: () => fetchData(),
                },
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert('Something went wrong while deleting of record.');
          }
        },
        (tx, error) => {
          // Error callback
          console.error(error);
        },
      );
    });
  };

  const [userId, setUserId] = useState(route.params.userId);
  console.log('Update' + userId);

  const renderItem = ({item}) => {
    const dragX = new Animated.Value(0);
    return (
      <Item
        data={item}
        dragX={dragX}
        handleEditItemClick={(data: any) => {
          navigation.navigate('UpdateTodoItem', {
            fromEdit: true,
            userId: userId,
            itemData: data,
          });
        }}
        handleDeleteItem={(id: any) => {
          deleteItem(id);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id} // Use index as key if id is not available
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TodoListScreen;
