import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getLanguageList, setLanguageStatus} from '../action/languageActions';
import {RootState} from '../reducers';
import {RadioButton} from 'react-native-paper';
import {screenWidth} from 'react-native-calendars/src/expandableCalendar/commons';
import {useLocalization} from '../localization';

//Use Effect kullanarak datalarımızı UI'a çekiyoruz.

const LanguageListCompenent = () => {
  const dispatch = useDispatch();
  const {LanguageList} = useSelector((state: RootState) => state.language);
  const [Language, SetLanguage] = useState('');
  const [checked, setChecked] = React.useState(1); //initial choice

  const {changeLanguage} = useLocalization();

  function getLanguages() {
    dispatch(getLanguageList());
  }
  function SetLanguageStatus(id: number, languageText: string) {
    setChecked(id);
    changeLanguage(languageText);
    dispatch(setLanguageStatus({id}));
    getLanguageList();
  }
  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <View style={{marginTop: -100, paddingLeft: 210}}>
      <FlatList
        style={{width: screenWidth}}
        horizontal
        data={LanguageList}
        renderItem={item => {
          return (
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                key={'lang_' + item.item.id}
                value={item.item.title}
                status={checked === item.item.id ? 'checked' : 'unchecked'}
                onPress={() => SetLanguageStatus(item.item.id, item.item.title)}
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
                {item.item.title}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default LanguageListCompenent;
