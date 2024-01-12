import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {SectionList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SCREENS} from '../../shared/constants/screens';

interface DataItem {
  id: number;
  label: string;
}

const data: DataItem[] = [
  {id: 1, label: 'Brittany'},
  {id: 2, label: 'Andrew'},
  {id: 3, label: 'Claire'},
  {id: 4, label: 'Camila'},
  {id: 5, label: 'Adam'},
  {id: 6, label: 'Austin'},
  {id: 7, label: 'Cora'},
  {id: 8, label: 'Andrew'},
  {id: 9, label: 'Anthony'},
  {id: 10, label: 'Atlas'},
  {id: 11, label: 'Chloe'},
  {id: 12, label: 'Alexander'},
  {id: 13, label: 'Birdie'},
  {id: 14, label: 'Brooke'},
  {id: 15, label: 'Clara'},
  {id: 16, label: 'Birdie'},
  {id: 17, label: 'Andrew'},
  {id: 18, label: 'Claire'},
  {id: 19, label: 'Bonnie'},
  {id: 20, label: 'Dakota'},
  {id: 21, label: 'Derek'},
  {id: 22, label: 'Devin'},
  {id: 23, label: 'Dakota'},
  {id: 24, label: 'Derek'},
  {id: 25, label: 'Brittany'},
  {id: 26, label: 'Andrew'},
  {id: 27, label: 'Desmond'},
];

// Create a new array with labels in ascending order
const sortedData = [...data].sort((a, b) => a.label.localeCompare(b.label));

console.log(sortedData);

// Create sections for SectionList
const sections = sortedData.reduce((acc, curr) => {
  const firstLetter = curr.label[0].toUpperCase();

  if (!acc[firstLetter]) {
    acc[firstLetter] = {title: firstLetter, data: []};
  }

  acc[firstLetter].data.push(curr);
  return acc;
}, {} as Record<string, {title: string; data: DataItem[]}>);

const userSectionData = Object.values(sections);

const UserListScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SectionList
        sections={userSectionData}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({item}) => (
          // your renderItem component here
          <View style={styles.itemStyle}>
            <Text
              style={styles.title}
              onPress={() =>
                navigation.dispatch(
                  CommonActions.navigate({
                    name: SCREENS.USERDETAIL,
                    params: {
                      id: item.id,
                      name: item.label,
                    },
                  }),
                )
              }>
              {item.label}
            </Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          // Your renderSectionHeader component here
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  itemStyle: {
    backgroundColor: '#00FFA6',
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default UserListScreen;
