import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text, Image,
  View,
  FlatList, Dimensions,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UpcomingAppoinmentRow,
  DashboardMenuItemRow,
  Divider,
  SectionHeader,
  DashboardCampaignsListItem,
  DoctorItemRow,
  DepartmentItem,
  TouchableHighlight
} from "../../components";
const width = Dimensions.get('window').width;
const hight = Dimensions.get('window').height;
import { DashboardItemsModel, DoctorModel, TypicodeUserModel, DepartmentModel } from "../../models";
import { DashboardService, DoctorsService, DepartmentService } from "../../services";
import { useLocalization } from "../../localization";
import NavigationNames from "../../navigations/NavigationNames";
import { HomeMenuItemType } from "../../types";
import Carousel from "react-native-snap-carousel";

const generateMenuItems = (
  getString: (key: string) => string
): HomeMenuItemType[] => [
    {
      row1: getString("Book an Appoinment"),
      row2: getString("6 Doctors are available"),
      iconName: "md-alarm",
      iconBack: "#73CEC1",
      action: "BookAnAppoinment"
    },
    {
      row1: getString("Lab Tests at Home"),
      row2: getString("Diagnostics are available"),
      iconName: "ios-flask",
      iconBack: "#35CDF7",
      action: "LabTestsAtHome"
    },

  ];

type TProps = {
  activeIndex: 0,

  carouselItems: [
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ]
};

/* _renderItem({item,index}){
  return (
    <View style={{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25, }}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>

  )
} */

export const HomeScreen: React.FC<TProps> = asyncprops => {
  const navigation = useNavigation();
  const { getString, changeLanguage } = useLocalization();
  const [dashboardItem, setDashboardItem] = useState<DashboardItemsModel>(null);
  const [doctors, setDoctors] = useState<DoctorModel[]>(null);
  const [departman, setDeparmans] = useState<DepartmentModel[]>(null);


  useEffect(() => {
    DashboardService.getDashboardItems().then(item => {
      setDashboardItem(item);
    });

    DoctorsService.getDoctors().then(typeUsers => {
      setDoctors(typeUsers);

    });
    DepartmentService.getDepartment().then(items => {
      setDeparmans(items);
    });
    /*  TypicodeUserService.getUsers().then(typeUsers => {
        setTypicodeUsers(typeUsers);
      });*/
  }, []);


  const onClickMenu = (item: HomeMenuItemType) => {
    switch (item.action) {
      case "BookAnAppoinment":
        navigation.navigate(NavigationNames.NewAppointmentScreen);
        break;
      case "LabTestsAtHome":
        //navigation.navigate(NavigationName);
        break;
      case "OnlineHealtConsultant":
        //navigation.navigate(NavigationName);
        break;
    }
  };






  if (dashboardItem === null) {
    return <Text>L
      oading</Text>;
  }
  function _renderItem(item: TProps) {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}>
        <Text style={{ fontSize: 30 }}>{item.carouselItems.title}</Text>
        <Text>{item.text}</Text>
      </View>

    );
  }
  return (





    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/*  <UpcomingAppoinmentRow
        style={styles.upcomingAppoinmentRow}
        item={dashboardItem.appointment}
      /> */}


   {/*    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
        <Carousel
          layout={"default"}
          ref={ref => this.carousel = ref}
          data={this.state.carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeIndex: index })} />
      </View>
 */}

      <SectionHeader title={getString("What are you looking for?")} />
      <FlatList
        data={generateMenuItems(getString)}
        keyExtractor={(item, index) => `key${index}ForMenu`}
        renderItem={row => (
          <TouchableHighlight onPress={() => onClickMenu(row.item)}>
            <DashboardMenuItemRow item={row.item} />
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={() => <Divider h16 />}
        scrollEnabled={false}
      />
      <SectionHeader
        title={getString("New Campaigns")}
        rightTitle={getString("See More")}
        rightAction={() =>
          navigation.navigate(NavigationNames.CampaignListScreen)
        }
      />


      <FlatList
        data={dashboardItem.campaigns}
        renderItem={row => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationNames.CampaignDetailScreen, {
                model: JSON.stringify(row.item)
              })
            }
          >
            <DashboardCampaignsListItem item={row.item} />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={styles.horizontalDivider} />}
        contentContainerStyle={styles.campaignsContainer}
        keyExtractor={(item, index) => `key${index}ForCampaign`}
      />


      <SectionHeader
        title={getString("Our Departments")}
        rightTitle={getString("See More")}
        rightAction={() =>
          navigation.navigate(NavigationNames.DepartmentListScreen)
        }
      />


      <FlatList
        data={departman}
        renderItem={row => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationNames.DepartmentDetailScreen, {
                model: JSON.stringify(row.item)
              })
            }
          >
            <DepartmentItem item={row.item} style={{ minWidth: 130 }} />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={styles.horizontalDivider} />}
        keyExtractor={(item, index) => `key${index}ForDepartment`}
        contentContainerStyle={styles.departmentsContainer}
      />


      <SectionHeader
        title={getString("All Specialists")}
        rightTitle={getString("See More")}
        rightAction={() =>
          navigation.navigate(NavigationNames.DoctorListScreen)
        }
      />

      <FlatList
        data={doctors}
        horizontal={true}
        keyExtractor={(item, index) => `key${index}ForDoctor`}
        renderItem={row => (
          <TouchableOpacity
            style={styles.touchableDoctorItem}
            onPress={() =>
              navigation.navigate(NavigationNames.DoctorDetailScreen, {
                model: JSON.stringify(row.item)
              })
            }
          >
            <DoctorItemRow item={row.item} />
          </TouchableOpacity>
        )}
        //ItemSeparatorComponent={() => <Divider h16 />}
        scrollEnabled={true}
      />

      <View>
        <Text>asd</Text>
      </View>




    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 24 },
  upcomingAppoinmentRow: {
    marginHorizontal: 16
  },
  touchableDoctorItem: {
    paddingStart: 16,
    paddingEnd: 8
  },
  campaignsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  departmentsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  horizontalDivider: { width: 12 }
});
