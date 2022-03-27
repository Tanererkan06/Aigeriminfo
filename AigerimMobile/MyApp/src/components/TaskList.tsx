import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addLanguageToList, deleteLanguageFromList, getLanguageList, setLanguageStatus} from '../action/languageActions';
import { RootState } from '../reducers';
 
//Use Effect kullanarak datalarımızı UI'a çekiyoruz.

const LanguageListCompenent = () => {
  const dispatch = useDispatch();
  const {LanguageList} = useSelector((state: RootState) => state.language);
  const [Language, SetLanguage] = useState('');
  function getLanguages() {
    dispatch(getLanguageList());
  }
  function SetLanguageStatus(id: number) {
    dispatch(setLanguageStatus({id}));
    getLanguageList();
  }
  useEffect(() => {
    getLanguages();
  }, []);
  function AddLanguageToList(text: string) {
    dispatch(addLanguageToList({text}));
    getLanguages();
    SetLanguage('');
  }
  function DeleteLanguageFromList(id: number) {
    dispatch(deleteLanguageFromList({id}));
    getLanguages();
    SetLanguage('');
  }
  
  return (
    <View style={{margin: 20}}>
      <TextInput
        onChangeText={Language => SetLanguage(Language)}
        placeholder="Enter Language."
        style={{
          borderRadius: 30,
          fontWeight: 'bold',
          fontSize: 22,
          borderWidth: 2,
          borderColor: 'grey',
          margin: 10,
        }}></TextInput>
      <TouchableOpacity
        onPress={() => AddLanguageToList(Language)}
        style={{
          borderRadius: 30,
          margin: 10,
          backgroundColor: '#4F51DB',
          justifyContent: 'center',
          height: 50,
        }}>
        <Text
          style={{
            alignContent: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Add Language
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{margin: 10}}
        data={LanguageList}
        renderItem={LanguageList => (
          <TouchableOpacity onPress={() => SetLanguageStatus(LanguageList.item.id)}>
            <View style={{flexDirection:'row'}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: 'black',
                  borderWidth: 2,
                  margin: 2,
                  width: '85%',
                }}>
                <Text
                  style={{
                    backgroundColor: LanguageList.item.isDone ? 'green' : 'red',
                    textAlign: 'center',
                    color: 'white',
                    padding: 10,
                    margin: 10,
                  }}>
                  {LanguageList.item.id.toString()}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlignVertical: 'center',
                  }}>
                  {LanguageList.item.title}
                </Text>
              </View>
              <View style={{flexDirection: 'row', width: '15%'}}>
                <TouchableOpacity onPress={()=>DeleteLanguageFromList(LanguageList.item.id)}>
                  <Text
                    style={{
                      backgroundColor: 'red',
                      fontSize: 25,
                      textAlign: 'center',
                      color: 'white',
                      margin: 5,
                      height: 40,
                      borderColor: 'black',
                      borderWidth: 2,
                      width:40,
                      justifyContent:'center',
                      borderRadius:50
                    }}>
                    x
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default LanguageListCompenent;