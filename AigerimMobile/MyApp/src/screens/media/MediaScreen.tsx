import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Theme } from "../../theme";
import { Divider } from "../../components";
import { useLocalization } from "../../localization";
import { StoryViewerModal } from "../../modals";
//import { storyList, mediaList } from "../../datas";
import { DashboardItemsModel, DoctorModel, TypicodeUserModel, DepartmentModel, MediaModel } from "../../models";
import { DashboardService, DoctorsService, DepartmentService, MediaService } from "../../services";
import { useNavigation } from "@react-navigation/native";
import NavigationNames from "../../navigations/NavigationNames";
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { addLanguageToList, deleteLanguageFromList, getLanguageList, setLanguageStatus } from '../../action/languageActions';
import { RootState } from '../../reducers';
import { IntlProvider, MessageFormatElement, FormattedMessage, FormattedRelativeTime, useIntl } from 'react-intl';




/* export const getCurrentTranslation: (
  locale: string
) =>
  | Record<string, string>
  | Record<string, MessageFormatElement[]>
  | undefined = (locale) => {
  const language = locale.split(/[-_]/)[0];
  const messages = translations[language] ?? translations['en']; //fallback
  return messages;
}; */

type TProps = {};

const StorySection: React.FC<{
  onClickStoryItem: (index: number) => void;
}> = props => (
  <>

    <Divider />
  </>
);

export const MediaScreen: React.FC<TProps> = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { LanguageList } = useSelector((state: RootState) => state.language);
  const [isShowedStoryModal, setIsShowedStoryModal] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const [media, setMedia] = useState<MediaModel[]>(null);

  function getLanguages() {
    dispatch(getLanguageList());

  }

  function Media(item: string | any[]) {
    var MediaModel = {} as MediaModel[];

    for (var i = 0; i < item.length; i++) {
        MediaModel[i] = item[i];
 
      const mediaitem = {
        "ru": {
          rubaslik: MediaModel[i].rubaslik,
          ruhaber:  MediaModel[i].ruhaber,
          resimru:  MediaModel[i].imageUrl,
          htmlContent1:  MediaModel[i].htmlContent1,
        },
        "kz": {
          kzbaslik:  MediaModel[i].kzbaslik,
          kzhaber:  MediaModel[i].kzhaber,
          kzresim:  MediaModel[i].imageUrl1,
          htmlContent:  MediaModel[i].htmlContent,
        }

       }  
        
       console.log(mediaitem);
      return mediaitem; 
    }






  }
  useEffect(() => {


    MediaService.getMedia().then(item => {
   
      setMedia(item);
      Media(item);




    });



  }, []);


  const { getString } = useLocalization();
  
  return (


    <View style={styles.container}>
      <FlatList
        data={media}
        keyExtractor={(item, index) => `key${index}ForMedia`}
        ListHeaderComponent={() => (
          <StorySection
            onClickStoryItem={(index: number) => {
              setSelectedStoryIndex(index);
              setIsShowedStoryModal(true);
            }}
          />
        )}
        renderItem={({ item }) => (



          <View>

            <TouchableOpacity
              style={{ padding: 16 }}
              onPress={() =>
                navigation.navigate(NavigationNames.MediaDetailScreen, {
                  model: JSON.stringify(item)
                })
              }
              activeOpacity={0.6}
            >
              <View>
                <Image
                  source={{
                    uri: item.imageUrl
                  }}
                  style={styles.image}
                />

              </View>
              <View style={styles.textRowContainer}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >

                </ScrollView>
                <Text style={styles.titleText}>{item.title}</Text>
                 
              </View>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <Divider />}
        showsVerticalScrollIndicator={false}
      />

    </View>


  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    height: 400,
    borderRadius: 16,
    borderWidth: 0.4,
    borderColor: Theme.colors.formBackground
  },
  liveContainer: {
    position: "absolute",
    start: 16,
    top: 16,
    backgroundColor: "#F93C1A",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4
  },
  textRowContainer: {
    marginTop: 12,
    marginHorizontal: 4
  },
  liveText: { color: "white", fontSize: 13 },
  titleText: {
    fontSize: 20,
    fontWeight:"bold",
    justifyContent:"center",
    alignSelf:"center",
    color: Theme.colors.black,
    marginTop: 8
  },
  minuteText: {
    fontSize: 13,
    fontWeight: "600",
    color: Theme.colors.gray,
    marginTop: 4
  },
  doctorContainer: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFFFFEE",
    margin: 4,
    start: 0,
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 12
  },
  doctorImage: {
    width: 28,
    height: 28,
    backgroundColor: Theme.colors.grayForBoxBackground,
    borderRadius: 8
  },
  doctorTextContainer: { paddingHorizontal: 4 },
  doctorNameText: {
    fontWeight: "600",
    fontSize: 12,
    color: Theme.colors.black
  },
  doctorTitleText: {
    fontSize: 11,
    color: Theme.colors.black
  },
  tagContainer: {
    backgroundColor: Theme.colors.grayForBoxBackground,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    marginEnd: 8
  },
  tagText: {
    fontWeight: "600",
    fontSize: 12,
    color: Theme.colors.black
  },
  horizontalDivider: { width: 12 },
  storyContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  storyItemContainer: {
    width: 68,
    height: 68,
    backgroundColor: Theme.colors.grayForBoxBackground,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Theme.colors.primaryColor
  },
  storyItemImage: { flex: 1, borderRadius: 100, margin: 2 }
});
