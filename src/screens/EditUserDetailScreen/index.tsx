import React, {useMemo, useState} from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import BottomSheetDialog from './bottomsheetdialog';
import ImageCropPicker from 'react-native-image-crop-picker';
import {SCREENS} from '../../shared/constants/screens';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useRoute, useNavigation, CommonActions} from '@react-navigation/native';
import moment from 'moment';
import {ProfileStatus} from '../../shared/constants/enum';
import {Gender} from '../../shared/constants/enum';
import {EmploymentStatus} from '../../shared/constants/enum';
import {RadioGroup} from 'react-native-radio-buttons-group';
import CheckBox from 'react-native-check-box';
import RNPickerSelect from 'react-native-picker-select';

const EditUserDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const phonePattern = new RegExp(/^\d{1,10}$/);
  const emailPattern = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  );
  const [isModelVisible, setModelVisible] = useState(false);
  // Access the dataModel from the route parameters
  const {userDataModel} = route.params;

  console.log('>>>userDataModel' + JSON.stringify(userDataModel));
  const [text, onChangeText] = React.useState(userDataModel.name);
  const [emailText, onChangeEmailText] = React.useState(userDataModel.email);
  const [phone, onChangePhone] = React.useState(userDataModel.phoneNo);
  const [selectedGender, setSelectedGender] = useState(
    userDataModel.gender === Gender.MALE ? 'Male' : 'Female',
  );
  console.log('>?>?>' + selectedGender);
  const [selectedLanguages, setSelectedLanguages] = useState(
    userDataModel.knownLanguage,
  );
  const genderOptions = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];
  const [profilePrivacy, onChangeProfilePrivacy] = React.useState(
    userDataModel.profile === ProfileStatus.PRIVATE ? false : true,
  );
  let finalBirthDate = userDataModel.birthDate;

  // Parse the original date string using the 'DD-MM-YYYY' format
  const originalDate = moment(userDataModel.birthDate, 'DD-MM-YYYY');

  // Format the date to 'YYYY-MM-DD' format
  const formattedDate = originalDate.format('YYYY-MM-DD');
  const [birthDate, onChangeBirthDate] = React.useState(formattedDate);

  const [filePath, setFilePath] = useState(userDataModel.profilePhoto);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [time, setTime] = useState(new Date());
  const [timeText, setTimeText] = useState('');
  const [selectedId, setSelectedId] = useState(
    userDataModel.employmentStatus === EmploymentStatus.FULLTIME
      ? '1'
      : userDataModel.employmentStatus === EmploymentStatus.PARTTIME
      ? '2'
      : '3',
  );

  const toggleLanguage = (language: String) => {
    if (selectedLanguages.includes(language)) {
      // If the language is already selected, remove it
      setSelectedLanguages(
        selectedLanguages.filter((lang: String) => lang !== language),
      );
    } else {
      // If the language is not selected, add it
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: EmploymentStatus.FULLTIME,
        value: EmploymentStatus.FULLTIME,
      },
      {
        id: '2',
        label: EmploymentStatus.PARTTIME,
        value: EmploymentStatus.PARTTIME,
      },
      {
        id: '3',
        label: EmploymentStatus.NONE,
        value: EmploymentStatus.NONE,
      },
    ],
    [],
  );
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const toggleSwitch = () => {
    onChangeProfilePrivacy(previousState => !previousState);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const staticImagePath = require('../../../assets/images/user.png');

  const toggleModel = () => {
    setModelVisible(!isModelVisible);
  };

  const handleCameraClick = () => {
    toggleModel();
    requestCameraPermission();
  };

  const handleGalleryClick = () => {
    toggleModel();
    console.log('Gallery clicked!');
    requestStoragePermission();
  };

  const OpenCameraCropPicker = () => {
    ImageCropPicker.openCamera({}).then(image => {
      console.log(image);
      setFilePath(image.path);
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Require Camera Permission',
          message:
            'App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        OpenCameraCropPicker();
      } else {
        console.log('Camera permission denied');
        Alert.alert(
          'Camera permission denied',
          'Please enable camera permission in settings.',
        );
      }
    } catch (err) {
      console.warn(err);
      Alert.alert(
        'Camera permission',
        'Some thing went wrong! by taking camera permission.',
      );
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App Require storage Permission',
          message:
            'App needs access to your storage ' +
            'so you can choose awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the storage');
        openGalleryCropPicker();
      } else {
        console.log('Storage permission denied');
        Alert.alert(
          'Storage permission denied',
          'Please enable Storage permission in settings.',
        );
      }
    } catch (err) {
      console.warn(err);
      Alert.alert(
        'Camera permission',
        'Some thing went wrong! by taking Storage permission.',
      );
    }
  };

  const openGalleryCropPicker = () => {
    ImageCropPicker.openPicker({}).then(image => {
      console.log(image);
      setFilePath(image.path);
    });
  };

  const checkValidation = (): boolean => {
    if (!text.trim()) {
      Alert.alert('Please enter user name must not be empty.');
      return false;
    } else if (!filePath.trim()) {
      Alert.alert('Please upload profile image.');
      return false;
    } else if (!emailText.trim()) {
      Alert.alert('Please enter user email.');
      return false;
    } else if (!emailText.match(emailPattern)) {
      Alert.alert('Please enter valid email.');
      return false;
    } else if (!phone.toString().trim()) {
      Alert.alert('Please enter user phone number.');
      return false;
    } else if (
      !phone.toString().match(phonePattern) ||
      phone.toString().length < 10
    ) {
      Alert.alert('Please enter valid phone number.');
      return false;
    }
    return true;
  };

  const handleBackWithData = () => {
    if (checkValidation()) {
      userDataModel.knownLanguage = selectedLanguages;
      userDataModel.employmentStatus =
        selectedId === '1'
          ? EmploymentStatus.FULLTIME
          : selectedId === '2'
          ? EmploymentStatus.PARTTIME
          : EmploymentStatus.NONE;
      userDataModel.name = text;
      userDataModel.profilePhoto = filePath;
      userDataModel.birthDate = finalBirthDate;
      userDataModel.profile = profilePrivacy
        ? ProfileStatus.PUBLIC
        : ProfileStatus.PRIVATE;
      userDataModel.gender =
        selectedGender === 'Male' ? Gender.MALE : Gender.FEMALE;
      navigation.dispatch(
        CommonActions.navigate({
          name: SCREENS.USERDETAIL,
          params: {
            itemData: userDataModel,
          },
        }),
      );
    }
  };

  const chooseLanguages = ['English', 'Hindi', 'Gujarati'];

  const onChang = (event: any, selectDate: Date) => {
    const currentDate = selectDate || birthDate;
    console.log('BirthDate' + currentDate);
    setDatePickerVisibility(false);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate().toString().padStart(2, '0') +
      '-' +
      (tempDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      tempDate.getFullYear();
    console.log('BirthDatefDate' + fDate);
    finalBirthDate = fDate;
    // setShow(Platform.OS === 'ios');
    // setDate(currentDate);

    // let tempDate = new Date(currentDate);
    // let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    // let fTime = "Hours: " + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    // setText(fDate + '\n' + fTime);
  };

  const onChangeTime = (event: any, selectDate: Date) => {
    const currentTime = selectDate || time;
    setTimePickerVisibility(false);
    setTime(currentTime);
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setTimeText(formattedTime);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleModel}>
          {!filePath ? (
            <Image source={staticImagePath} style={styles.image} />
          ) : (
            <Image source={{uri: filePath}} style={styles.image} />
          )}
        </TouchableOpacity>
        <Text style={styles.textInputTitle}>User Name: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.textInputTitle}>User Email: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmailText}
          value={emailText}
          inputMode="email"
        />
        <Text style={styles.textInputTitle}>User Phone Number: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePhone}
          value={phone.toString()}
          inputMode="numeric"
          maxLength={10}
        />
        <Text style={styles.textInputTitle}>User Birth Date: </Text>
        <TouchableWithoutFeedback onPress={showDatePicker}>
          <View pointerEvents="box-only">
            <TextInput
              value={birthDate}
              style={styles.input}
              onChangeText={onChangeBirthDate}
            />

            {isDatePickerVisible && (
              <DateTimePicker
                testID="dateTimePicker"
                value={new Date(birthDate)}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChang}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.textInputTitle}>Select Time: </Text>
        <TouchableWithoutFeedback onPress={showTimePicker}>
          <View pointerEvents="box-only">
            <TextInput
              value={timeText}
              style={styles.input}
              placeholder="Select time"
            />
            {isTimePickerVisible && (
              <DateTimePicker
                testID="timePicker"
                value={time}
                mode={'time'}
                is24Hour={true}
                display="default"
                onChange={onChangeTime}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.textInputTitle}>Select Profile Privacy:</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.textInputTitle}>Private</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={profilePrivacy ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            style={styles.switchStyle}
            onValueChange={toggleSwitch}
            value={profilePrivacy}
          />
          <Text style={styles.textInputTitle}>Public</Text>
        </View>
        <Text style={styles.textInputTitle}>Select Employment Status:</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          layout="row"
          containerStyle={styles.radioGroup}
        />
        <Text style={styles.textInputTitle}>Select Known Language:</Text>
        {chooseLanguages.map(language => (
          <CheckBox
            key={language}
            style={{flex: 1, padding: 10}}
            onClick={() => toggleLanguage(language)}
            isChecked={selectedLanguages.includes(language)}
            leftText={language}
          />
        ))}
        <Text style={styles.textInputTitle}>Select Gender:</Text>
        <RNPickerSelect
          placeholder={{label: 'Select Gender', value: null}}
          items={genderOptions}
          onValueChange={value => setSelectedGender(value)}
          style={pickerSelectStyles}
          value={selectedGender}
        />
        <TouchableOpacity onPress={handleBackWithData}>
          <Text style={styles.btnSave}>Save</Text>
        </TouchableOpacity>
        <BottomSheetDialog
          onCameraClick={handleCameraClick}
          onGalleryClick={handleGalleryClick}
          onCancelClick={toggleModel}
          visibility={isModelVisible}
          onBackdropPressV={toggleModel}
          onSwipeCompleteV={toggleModel}
        />
      </View>
    </ScrollView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  image: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 50,
  },
  textInputTitle: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    paddingStart: 8,
    marginTop: 12,
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
  },
  btnSave: {
    height: 40,
    fontSize: 20,
    width: '96%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    alignSelf: 'center',
    backgroundColor: '#4690E8',
    color: '#fff',
    borderColor: '#ff5',
    borderRadius: 2,
  },
  rowContainer: {
    flexDirection: 'row', // Set the direction to row
    alignItems: 'center', // Adjust as needed
    marginBottom: 10,
  },
  switchStyle: {
    marginTop: 12,
  },
  radioGroup: {
    marginTop: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default EditUserDetail;
