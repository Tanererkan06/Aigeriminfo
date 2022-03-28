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
  
   
      <FlatList
        style={{margin: 10}}
     horizontal 
        data={LanguageList}
        renderItem={LanguageList => (
          <TouchableOpacity onPress={() => SetLanguageStatus(LanguageList.item.id)}>
            <View style={{flexDirection:'row'}}>
         
                <Text
                  style={{
                    backgroundColor: LanguageList.item.isDone ? 'green' : 'red',
                    textAlign: 'center',
                    color: 'white',
                    padding: 5,
                    margin: 1,
                  }}>
                   {LanguageList.item.title}
                </Text>
                 
              </View>
             
            
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default LanguageListCompenent;