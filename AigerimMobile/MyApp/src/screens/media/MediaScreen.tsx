import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import '@formatjs/intl-locale/polyfill';

import {Theme} from '../../theme';
import {Divider} from '../../components';
import {useLocalization} from '../../localization';
import {StoryViewerModal} from '../../modals';
//import { storyList, mediaList } from "../../datas";
import {
  DashboardItemsModel,
  DoctorModel,
  TypicodeUserModel,
  DepartmentModel,
  MediaModel,
} from '../../models';
import {
  DashboardService,
  DoctorsService,
  DepartmentService,
  MediaService,
} from '../../services';
import {useNavigation} from '@react-navigation/native';
import NavigationNames from '../../navigations/NavigationNames';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {
  addLanguageToList,
  deleteLanguageFromList,
  getLanguageList,
  setLanguageStatus,
} from '../../action/languageActions';
import {RootState} from '../../reducers';
import i18n from 'i18next';
import {
  IntlProvider,
  MessageFormatElement,
  FormattedMessage,
  FormattedRelativeTime,
  useIntl,
  defineMessages,
} from 'react-intl';
/* import * as Localization from 'expo-localization'; */

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
  const {LanguageList} = useSelector((state: RootState) => state.language);
  const [isShowedStoryModal, setIsShowedStoryModal] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const [media, setMedia] = useState<MediaModel[]>([]);
  const [locate, setlocate] = useState();
  /* const [mediaItem, setMediaItem] = useState(); */
  /*  const locale = Localization.locale; */
  const [rubaslik, setrubaslik] = useState<string | undefined>('');
  const [ruhaber, setruhaber] = useState<string | undefined>('');
  const [ruresim, setruresim] = useState<string | undefined>('');
  const [baslik, setbaslik] = useState<string | undefined>('');
  const [haber, sethaber] = useState<string | undefined>('');
  const [resim, setresim] = useState<string | undefined>('');

  function getLanguages() {
    dispatch(getLanguageList());
  }

  useEffect(() => {
    MediaService.getMedia().then(item => {
      setMedia(item);

      let MediaModelList = [] as MediaModel[];

      for (let i = 0; i < item.length; i++) {
        MediaModelList[i] = item[i];

        const mediaitems = {
          ru: {
            baslik: MediaModelList[i].title,
            haber: MediaModelList[i].htmlContent1,
            resim: MediaModelList[i].imageUrl,
          },
          kz: {
            baslik: MediaModelList[i].title2,
            haber: MediaModelList[i].htmlContent,
            resim: MediaModelList[i].imageUrl1,
            /* htmlContent:  MediaModel[i].htmlContent, */
          },
        };

        setrubaslik(mediaitems.ru.baslik);
        setbaslik(mediaitems.kz.baslik);
        console.log(rubaslik);
        console.log(baslik);
        setruhaber(mediaitems.ru.haber);
        sethaber(mediaitems.kz.haber);
        console.log(ruhaber);
        console.log(haber);
        setruresim(mediaitems.ru.resim);
        setresim(mediaitems.kz.resim);
        console.log(ruresim);
        console.log(resim);

        return MediaModelList;
      }

      /* setMediaItem(mediaitem)
       */
    });
  }, []);

  const {getString} = useLocalization();

  return (
    <View style={styles.container}>
      {/*  <IntlProvider locale="ru" messages={mediaItem}>
       */}

      {/* <SectionList
        style={styles.list}
        sections={LISTDATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <ListItem item={item} />}
        renderSectionHeader={({section}) => <ListHeader item={section} />}
      /> */}
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
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              style={{padding: 16}}
              onPress={() =>
                navigation.navigate(NavigationNames.MediaDetailScreen, {
                  model: JSON.stringify(item),
                })
              }
              activeOpacity={0.6}>
              <View>
                <Image
                  source={{
                    uri:
                      i18n.language === 'ru' ? item.imageUrl : item.imageUrl1,
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.textRowContainer}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}></ScrollView>
                <Text style={styles.titleText}>
                  {i18n.language === 'ru' ? item.title : item.title2}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <Divider />}
        showsVerticalScrollIndicator={false}
      />
      {/* </IntlProvider> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  parentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  list: {
    width: '100%',
  },
  listText: {
    color: 'white',
  },
  listHeaderText: {
    color: 'white',
  },
  listItem: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#9575cd',
    padding: 10,
    borderRadius: 5,
  },
  listHeader: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  image: {
    height: 400,
    borderRadius: 16,
    borderWidth: 0.4,
    borderColor: Theme.colors.formBackground,
  },
  liveContainer: {
    position: 'absolute',
    start: 16,
    top: 16,
    backgroundColor: '#F93C1A',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  textRowContainer: {
    marginTop: 12,
    marginHorizontal: 4,
  },
  liveText: {color: 'white', fontSize: 13},
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    color: Theme.colors.black,
    marginTop: 8,
  },
  minuteText: {
    fontSize: 13,
    fontWeight: '600',
    color: Theme.colors.gray,
    marginTop: 4,
  },
  doctorContainer: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFFEE',
    margin: 4,
    start: 0,
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 12,
  },
  doctorImage: {
    width: 28,
    height: 28,
    backgroundColor: Theme.colors.grayForBoxBackground,
    borderRadius: 8,
  },
  doctorTextContainer: {paddingHorizontal: 4},
  doctorNameText: {
    fontWeight: '600',
    fontSize: 12,
    color: Theme.colors.black,
  },
  doctorTitleText: {
    fontSize: 11,
    color: Theme.colors.black,
  },
  tagContainer: {
    backgroundColor: Theme.colors.grayForBoxBackground,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    marginEnd: 8,
  },
  tagText: {
    fontWeight: '600',
    fontSize: 12,
    color: Theme.colors.black,
  },
  horizontalDivider: {width: 12},
  storyContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  storyItemContainer: {
    width: 68,
    height: 68,
    backgroundColor: Theme.colors.grayForBoxBackground,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Theme.colors.primaryColor,
  },
  storyItemImage: {flex: 1, borderRadius: 100, margin: 2},
});
