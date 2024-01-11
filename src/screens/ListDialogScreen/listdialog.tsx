import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

type Props = {
  isVisible: any;
  data: any;
  onSelect: any;
  onClose: any;
};

const CustomListDialog: React.FC<Props> = (props: Props) => {
  return (
    <ReactNativeModal
      isVisible={props.isVisible}
      onBackButtonPress={props.onClose}>
      <View style={styles.container}>
        <View style={styles.dialog}>
          <FlatList
            data={props.data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => props.onSelect(item)}>
                <Text style={styles.listTextStyle}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            onPress={props.onClose}
            style={styles.touchableCloseStyle}>
            <Text style={styles.closeTextStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  listTextStyle: {
    fontSize: 18,
    padding: 10,
  },
  closeTextStyle: {
    fontSize: 18,
    color: 'blue',
  },
  touchableCloseStyle: {
    marginTop: 10,
  },
});

export default CustomListDialog;
