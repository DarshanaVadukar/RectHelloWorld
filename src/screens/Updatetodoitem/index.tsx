import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Switch,
  Text,
  ScrollView,
} from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mytext from '../components/Mytext';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Mybutton from '../components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';
import {Alert} from 'react-native';

var db = openDatabase({name: 'UserDatabase.db'});

const UpdateTodoItem: React.FC = ({route, navigation}) => {
  const [userId, setUserId] = useState(route.params.userId);
  console.log('Update' + userId);
  const [fromEdit, setFromEdit] = useState(route.params.fromEdit);
  const itemData = route.params.itemData;
  console.log('itemData ' + JSON.stringify(itemData));
  const [title, setTitle] = useState(
    itemData && itemData.title ? itemData.title : '',
  );
  const [description, setDescription] = useState(
    itemData && itemData.description ? itemData.description : '',
  );
  const [status, setStatus] = React.useState(
    itemData && itemData.status
      ? itemData.status === 1
        ? true
        : false
      : false,
  );
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isDueDatePickerVisible, setDueDatePickerVisibility] = useState(false);
  // Parse the original date string using the 'DD-MM-YYYY' format
  // const originalDate = moment(userDataModel.birthDate, 'DD-MM-YYYY');

  const [finalStartDate, setFinalStartDate] = useState(
    itemData && itemData.start_date ? itemData.start_date : '',
  );
  const [finalDueDate, setFinalDueDate] = useState(
    itemData && itemData.due_date ? itemData.due_date : '',
  );

  // Parse the original date string using the 'DD-MM-YYYY' format
  const originalStartDate = moment(finalStartDate, 'DD-MM-YYYY');

  // Format the date to 'YYYY-MM-DD' format
  const formattedStartDate = originalStartDate.format('YYYY-MM-DD');
  const [startDate, onChangeStartDate] = React.useState(formattedStartDate);

  // Parse the original date string using the 'DD-MM-YYYY' format
  const originalDueDate = moment(finalDueDate, 'DD-MM-YYYY');

  // Format the date to 'YYYY-MM-DD' format
  const formattedDueDate = originalDueDate.format('YYYY-MM-DD');
  const [dueDate, onChangeDueDate] = React.useState(formattedDueDate);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const showDueDatePicker = () => {
    setDueDatePickerVisibility(true);
  };

  const toggleSwitch = () => {
    setStatus(!status);
  };

  const onChang = (event: any, selectDate: Date, from: String) => {
    let previousDate = startDate;
    const currentDate = selectDate || previousDate;
    console.log(from + ' current onChang ' + currentDate);
    setStartDatePickerVisibility(false);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate().toString().padStart(2, '0') +
      '-' +
      (tempDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      tempDate.getFullYear();
    console.log(from + fDate);
    setFinalStartDate(fDate);
    const originalStartDateAfter = moment(fDate, 'DD-MM-YYYY');

    // Format the date to 'YYYY-MM-DD' format
    const formattedStartDateAfter = originalStartDateAfter.format('YYYY-MM-DD');
    onChangeStartDate(formattedStartDateAfter);
  };

  const onChangDue = (event: any, selectDate: Date, from: String) => {
    let previousDate = dueDate;

    const currentDate = selectDate || previousDate;
    console.log(from + ' current onChangDue' + currentDate);
    setDueDatePickerVisibility(false);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate().toString().padStart(2, '0') +
      '-' +
      (tempDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      tempDate.getFullYear();
    console.log(from + fDate);
    setFinalDueDate(fDate);
    const originalDueDateAfter = moment(fDate, 'DD-MM-YYYY');

    // Format the date to 'YYYY-MM-DD' format
    const formattedDueDateAfter = originalDueDateAfter.format('YYYY-MM-DD');
    onChangeDueDate(formattedDueDateAfter);

    // setShow(Platform.OS === 'ios');
    // setDate(currentDate);

    // let tempDate = new Date(currentDate);
    // let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    // let fTime = "Hours: " + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    // setText(fDate + '\n' + fTime);
  };

  const insertUpdateDataToTable = () => {
    db.transaction(function (tx) {
      const finalStatus = status === true ? 1 : 0;
      if (fromEdit) {
        const itemId = itemData.id;
        tx.executeSql(
          'UPDATE table_user_todo_list SET title=?, description=?,start_date=?,due_date=?,status=?,updated_date=DATETIME("now") WHERE id=?',
          [
            title,
            description,
            finalStartDate,
            finalDueDate,
            finalStatus,
            itemId,
          ],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'Record updated successfully.',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.goBack(),
                  },
                ],
                {cancelable: false},
              );
            } else {
              Alert.alert('Something went wrong while updating of record.');
            }
          },
        );
      } else {
        tx.executeSql(
          'INSERT INTO table_user_todo_list (user_id, title, description,start_date,due_date,status,created_date,updated_date) VALUES (?,?,?,?,?,?,DATETIME("now"),DATETIME("now"))',
          [
            userId,
            title,
            description,
            finalStartDate,
            finalDueDate,
            finalStatus,
          ],
          (tx, results) => {
            console.log('Results', results.results);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'Record created successfully.',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.goBack(),
                  },
                ],
                {cancelable: false},
              );
            } else {
              Alert.alert('Something went wrong while creation of record.');
            }
          },
        );
      }
    });
  };

  return (
    <ScrollView>
      <View>
        <Mytext mytext="Enter Title" />
        <Mytextinput
          value={title}
          placeholder="Please Enter Title"
          onChangeText={title => setTitle(title)}
          style={styles.textInput}
        />
        <Mytext mytext="Enter Description" />
        <Mytextinput
          value={description}
          placeholder="Please Enter Description"
          onChangeText={description => setDescription(description)}
          style={styles.textInput}
        />
        <Mytext mytext="Select Start Date" />
        <TouchableWithoutFeedback onPress={showStartDatePicker}>
          <View pointerEvents="box-only">
            <Mytextinput
              placeholder="Please Select Start Date"
              value={finalStartDate}
              onChangeText={setFinalStartDate}
            />

            {isStartDatePickerVisible && (
              <DateTimePicker
                testID="dateTimePickerStart"
                value={
                  startDate === 'Invalid date'
                    ? new Date()
                    : new Date(startDate)
                }
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) =>
                  onChang(event, selectedDate, 'start')
                }
              />
            )}
          </View>
        </TouchableWithoutFeedback>
        <Mytext mytext="Select Due Date" />
        <TouchableWithoutFeedback onPress={showDueDatePicker}>
          <View pointerEvents="box-only">
            <Mytextinput
              placeholder="Please Select Due Date"
              value={finalDueDate}
              onChangeText={setFinalDueDate}
            />

            {isDueDatePickerVisible && (
              <DateTimePicker
                testID="dateTimePickerDue"
                value={
                  dueDate === 'Invalid date' ? new Date() : new Date(dueDate)
                }
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) =>
                  onChangDue(event, selectedDate, 'Due')
                }
              />
            )}
          </View>
        </TouchableWithoutFeedback>
        <Mytext mytext="Select Status" />
        <View style={styles.rowContainer}>
          <Text style={styles.textInputTitle}>Private</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={status ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            style={styles.switchStyle}
            onValueChange={toggleSwitch}
            value={status}
          />
          <Text style={styles.textInputTitle}>Public</Text>
        </View>
      </View>
      <View style={styles.btnCOntainer}>
        <Mybutton
          title={fromEdit === true ? 'Update' : 'Save'}
          customClick={() => insertUpdateDataToTable()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
  },
  textInputTitle: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    paddingStart: 8,
    marginTop: 12,
  },
  rowContainer: {
    flexDirection: 'row', // Set the direction to row
    alignItems: 'center', // Adjust as needed
    marginLeft: 30,
  },
  switchStyle: {
    marginTop: 12,
  },
  btnCOntainer: {position: 'relative', bottom: 0, marginBottom: 24},
});

export default UpdateTodoItem;
