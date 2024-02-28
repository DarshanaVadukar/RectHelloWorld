import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Mytext from '../components/Mytext';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import {useNavigation} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const UserNameScreen: React.FC = () => {
  useEffect(() => {
    db.transaction(function (txn: {
      executeSql: (
        arg0: string,
        arg1: never[],
        arg2: ((tx: any, res: any) => void) | undefined,
      ) => void;
    }) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (_tx: any, res: {rows: string | any[]}) {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT UNIQUE NOT NULL,last_logged_in_date TEXT)',
              [],
            );
          }
        },
      );
    });

    db.transaction(function (txn: {
      executeSql: (
        arg0: string,
        arg1: never[],
        arg2: ((tx: any, res: any) => void) | undefined,
      ) => void;
    }) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user_todo_list'",
        [],
        function (_tx: any, res: {rows: string | any[]}) {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user_todo_list', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user_todo_list(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,title TEXT NOT NULL,description TEXT NOT NULL, start_date TEXT,due_date TEXT,status INTEGER,created_date TEXT,updated_date TEXT)',
              [],
            );
          }
        },
      );
    });
  }, []);

  const [userName, setUserName] = useState('');

  const navigation = useNavigation();

  const HandleOkClick = userId => {
    db.transaction(function (tx: {
      executeSql: (
        arg0: string,
        arg1: string[],
        arg2: (tx: any, results: any) => void,
        arg3: (tx: any, error: any) => void,
      ) => void;
    }) {
      tx.executeSql(
        'UPDATE table_user SET last_logged_in_date = DATETIME("now") WHERE id = ?',
        [userId],
        (
          tx: {
            executeSql: (
              arg0: string,
              arg1: string[],
              arg2: (tx1_: any, selectResult: any) => void,
              arg3: (_: any, error: any) => void,
            ) => void;
          },
          results: {rowsAffected: number; insertId: any},
        ) => {
          console.log(results);
          if (results.rowsAffected > 0) {
            navigation.navigate('TodoListScreen', {
              userId: userId,
            });
          } else {
            console.error('Some issue in update date');
          }
        },
        (tx: any, error: any) => {
          console.error('Error executing query:', error);
        },
      );
    });
  };

  return (
    <View style={styles.container}>
      <Mytext mytext="Enter UserName" />
      <Mytextinput
        placeholder="Please Enter UserName"
        onChangeText={(userName: React.SetStateAction<string>) =>
          setUserName(userName)
        }
        style={styles.textInput}
      />
      <Mybutton
        title="Move To Task"
        customClick={() => {
          console.log('clicked');
          db.transaction(function (tx: {
            executeSql: (
              arg0: string,
              arg1: string[],
              arg2: (tx: any, results: any) => void,
              arg3: (tx: any, error: any) => void,
            ) => void;
          }) {
            tx.executeSql(
              'INSERT OR IGNORE INTO table_user (username, last_logged_in_date) VALUES (?,DATETIME("now"))',
              [userName],
              (
                tx: {
                  executeSql: (
                    arg0: string,
                    arg1: string[],
                    arg2: (tx1_: any, selectResult: any) => void,
                    arg3: (_: any, error: any) => void,
                  ) => void;
                },
                results: {rowsAffected: number; insertId: any},
              ) => {
                console.log(results);
                // If insertion is successful, get the last inserted ID
                // const insertedId = result.insertId;
                // console.log(insertedId);

                if (results.rowsAffected > 0) {
                  console.log('called');
                  console.log(results.insertId);
                  const insertedId = results.insertId;
                  // New user inserted, return the inserted ID
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          navigation.navigate('TodoListScreen', {
                            userId: insertedId,
                          }),
                      },
                    ],
                    {cancelable: false},
                  );
                } else {
                  // User already exists, retrieve its ID
                  tx.executeSql(
                    'SELECT * FROM table_user WHERE username = ?',
                    [userName],
                    (
                      tx1_: {
                        executeSql: (
                          arg0: string,
                          arg1: any[],
                          arg2: (_: any, selectResult1: any) => void,
                          arg3: (_: any, error1: any) => void,
                        ) => void;
                      },
                      selectResult: {
                        rows: {
                          item: (arg0: number) => {
                            (): any;
                            new (): any;
                            id: any;
                          };
                        };
                      },
                    ) => {
                      const userId = selectResult.rows.item(0).id;
                      console.log(selectResult);
                      Alert.alert(
                        'Success',
                        'You are already Registered.',
                        [
                          {
                            text: 'Ok',
                            onPress: () => HandleOkClick(userId),
                          },
                        ],
                        {cancelable: false},
                      );
                    },
                    (_: any, error: any) => {
                      console.error('Selection error:', error);
                    },
                  );
                }
              },
              (tx: any, error: any) => {
                console.error('Error executing query:', error);
              },
            );
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textInput: {
    padding: 10,
  },
});

export default UserNameScreen;
