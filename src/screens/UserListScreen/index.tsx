import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import {SCREENS} from '../../shared/constants/screens';

enum EmploymentStatus {
  FULLTIME,
  PARTTIME,
  NONE,
}

enum Gender {
  MALE,
  FEMALE,
}

enum ProfileStatus {
  PUBLIC,
  PRIVATE,
}

interface DataItem {
  id: number;
  name: string;
  email: string;
  profilePhoto: string;
  phoneNo: number;
  gender: Gender;
  birthDate: string;
  profile: ProfileStatus;
  knownLanguage: String[];
  employmentStatus: EmploymentStatus;
}

const data: DataItem[] = [
  {
    id: 1,
    name: 'Brittany',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 2,
    name: 'Andrew',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 3,
    name: 'Claire',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 4,
    name: 'Camila',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 5,
    name: 'Adam',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 6,
    name: 'Austin',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 7,
    name: 'Cora',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 8,
    name: 'Andrew',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 9,
    name: 'Anthony',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 10,
    name: 'Atlas',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 11,
    name: 'Chloe',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 12,
    name: 'Alexander',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 13,
    name: 'Birdie',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 14,
    name: 'Brooke',
    email: 'a@b.com',
    profilePhoto :'',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 15,
    name: 'Clara',
    email: 'a@b.com',
    profilePhoto :'',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 16,
    name: 'Birdie',
    email: 'a@b.com',
    profilePhoto :'',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 17,
    name: 'Andrew',
    email: 'a@b.com',
    profilePhoto :'',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 18,
    name: 'Claire',
    email: 'a@b.com',
    profilePhoto :'',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 19,
    name: 'Bonnie',
    email: 'a@b.com',
    profilePhoto :'',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 20,
    name: 'Dakota',
    email: 'a@b.com',
    profilePhoto :'',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 21,
    name: 'Derek',
    email: 'a@b.com',
    profilePhoto :'',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 22,
    name: 'Devin',
    email: 'a@b.com',
    profilePhoto :'',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 23,
    name: 'Dakota',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 24,
    name: 'Derek',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 25,
    name: 'Brittany',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 26,
    name: 'Andrew',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
  {
    id: 27,
    name: 'Desmond',
    email: 'a@b.com',
    profilePhoto: '',
    phoneNo: 1234567890,
    gender: Gender.FEMALE,
    birthDate: '04-11-19950',
    profile: ProfileStatus.PRIVATE,
    knownLanguage: ['Gujarati', 'English', 'Hindi'],
    employmentStatus: EmploymentStatus.FULLTIME,
  },
];

// Create a new array with labels in ascending order
const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

console.log(sortedData);

// Create sections for SectionList
const sections = sortedData.reduce((acc, curr) => {
  const firstLetter = curr.name[0].toUpperCase();

  if (!acc[firstLetter]) {
    acc[firstLetter] = {title: firstLetter, data: []};
  }

  acc[firstLetter].data.push(curr);
  return acc;
}, {} as Record<string, {title: string; data: DataItem[]}>);

const userSectionData = Object.values(sections);

const UserListScreen: React.FC = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Handle the refresh action here
    // Typically, you would fetch new data from your server or perform some asynchronous operation
    // For example, you can use the setTimeout function to simulate an asynchronous operation
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulate a 2-second delay
  };

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
                      itemData: item,
                    },
                  }),
                )
              }>
              {item.name}
            </Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          // Your renderSectionHeader component here
          <Text style={styles.header}>{title}</Text>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
