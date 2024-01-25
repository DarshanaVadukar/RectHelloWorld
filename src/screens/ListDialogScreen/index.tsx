import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomListDialog from './listdialog';
import {SCREENS} from '../../shared/constants/screens';
import {CommonActions, useNavigation} from '@react-navigation/native';

const ListDialogScreen = () => {
  const navigation = useNavigation(); // <-- new code
  const [isListDialogVisible, setListDialogVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const data = [
    {id: 1, label: 'Move To List Item'},
    {id: 2, label: 'Option 2'},
    {id: 3, label: 'Option 3'},
  ];
  const openListDialog = () => {
    setListDialogVisible(true);
  };
  const closeListDialog = () => {
    setListDialogVisible(false);
  };
  const handleSelect = item => {
    console.log('>>>', item.id.toString());
    setSelectedItem(item);
    closeListDialog();
    if (item.id.toString() === '1') {
      console.log('execute');
      // Dispatching the navigation action
      navigation.dispatch(
        CommonActions.navigate({
          name: SCREENS.USERLIST,
        }),
      );
    } 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openListDialog}>
        <Text style={{fontSize: 24}}>Open List Dialog</Text>
      </TouchableOpacity>
      <CustomListDialog
        isVisible={isListDialogVisible}
        data={data}
        onSelect={handleSelect}
        onClose={closeListDialog}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListDialogScreen;
