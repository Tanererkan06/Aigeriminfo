import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addLanguageToList, deleteLanguageFromList, getLanguageList, setLanguageStatus } from '../action/languageActions';
import { RootState } from '../reducers';
import { RadioButton } from 'react-native-paper';
import RadioForm from 'react-native-simple-radio-button';
import { screenWidth } from 'react-native-calendars/src/expandableCalendar/commons';

//Use Effect kullanarak datalarımızı UI'a çekiyoruz.

const LanguageListCompenent = () => {
  const dispatch = useDispatch();
  const { LanguageList } = useSelector((state: RootState) => state.language);
  const [Language, SetLanguage] = useState('');
  const [checked, setChecked] = React.useState(1); //initial choice
 
  function getLanguages() {
    dispatch(getLanguageList());
  }
  function SetLanguageStatus(id: number) {
    setChecked(id)
    dispatch(setLanguageStatus({ id }));
    getLanguageList();
    console.log(id)
  }
  useEffect(() => {
    getLanguages();
  }, []);


  return (
    <View style={{ marginTop: -100, paddingLeft: 210 }}>


      <FlatList
        style={{ width: screenWidth }}
        horizontal
        data={LanguageList}
        renderItem={LanguageList => (

          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              key={"lang_" + LanguageList.item.id}

              value={LanguageList.item.title}
              status={checked === LanguageList.item.id ? 'checked' : 'unchecked'}
              onPress={() => SetLanguageStatus(LanguageList.item.id)}
            />
            <Text
              style={{
                /*  backgroundColor: 'green' , */
                textAlign: 'center',
                color: 'black',
                padding: 5,
                marginRight: 10,
                margin: 1,
              }}>
              {LanguageList.item.title}

            </Text>


          </View>



        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default LanguageListCompenent;