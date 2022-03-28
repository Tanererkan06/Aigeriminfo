import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { screenWidth } from 'react-native-calendars/src/expandableCalendar/commons';
import {useDispatch, useSelector} from 'react-redux';
import {addLanguageToList, deleteLanguageFromList, getLanguageList, setLanguageStatus} from '../action/languageActions';
import { RootState } from '../reducers';
 
 
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
/*   function AddLanguageToList(text: string) {
    dispatch(addLanguageToList({text}));
    getLanguages();
    SetLanguage('');
  }
  function DeleteLanguageFromList(id: number) {
    dispatch(deleteLanguageFromList({id}));
    getLanguages();
    SetLanguage('');
  } */
  
  return (
    <View style={{ width:screenWidth/2,  
   flexDirection: "row",  
  }}
    >
 
      <FlatList
        style={{margin: 10}}
        data={LanguageList}
        horizontal={true}
        renderItem={LanguageList => (
          <TouchableOpacity onPress={() => SetLanguageStatus(LanguageList.item.id)}>
            <View 
          style={{flexDirection:'row'}}  
            >
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: 'black',
                  borderWidth: 2,
/*                   marginTop: 2,
 */                  width: '85%',
                }}>
                <Text
                  style={{
                    backgroundColor: LanguageList.item.isDone ? 'green' : 'red',
                    textAlign: 'center',
                    color: 'white',
                    padding: 2,
                    margin: 2,  
                  }}>
                   
                  {LanguageList.item.title}
                </Text>
                
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