import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomListDialog from './listdialog';

type Props = {
  navigation: any;
};

const ListDialogScreen: React.FC<Props> = ({navigation}) => {
  const [isListDialogVisible, setListDialogVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const data = [
    {id: 1, label: 'Option 1'},
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
    console.log(item.id.toString);
    setSelectedItem(item);
    closeListDialog();
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
