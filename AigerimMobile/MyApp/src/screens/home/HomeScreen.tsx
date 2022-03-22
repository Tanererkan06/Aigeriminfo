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
      loading</Text>;
  }
  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
       <UpcomingAppoinmentRow
        style={styles.upcomingAppoinmentRow}
        item={dashboardItem.appointment}
      /> 


  

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
        ItemSeparatorComponent={() => <Divider h16 />}
        scrollEnabled={true}
      />

      <View
        style={{
          width: width,
        
          flexDirection: "row",
          height: hight / 4,
          borderColor: "white",
          backgroundColor: "#08324d",
          //alt zemin 
          //#052940
          //#08324d
        }}
      >
        <View style={{
          //backgroundColor: "blue", 
          flex: 0.5,

        }} >
          <Text style={styles.innerText}>О клинике

          </Text>
          <Text style={styles.innerText}>
            Услуги
          </Text>
          <Text style={styles.innerText}>
            Прайс-лист

          </Text>
          <Text style={styles.innerText}>

            Специалисты

          </Text>
          <Text style={styles.innerText}>


            Контакты
          </Text>
          <Text style={styles.innerText}>


            Статьи

          </Text>
          <Text style={styles.innerText}>



            Контакты
          </Text>

        </View>
        <View style={{
          flex: 0.5
        }} >
          <Text style={styles.innerText}>Задать вопрос
          </Text>
          <Text style={styles.innerText}>
            Записаться на прием
          </Text>
          <Text style={styles.innerText}>

            Оставить отзыв
          </Text>
          <Text style={styles.innerText}>

            Оставить отзыв
          </Text>
          <Text style={styles.innerText}>

            Написать в администрацию</Text>
        </View>

        <View style={{
          flex: 0.5,

        }} >
          <Text style={styles.innerText}>
            03000, РК, г.Актобе ул. Пацаева 7/1
            03000, РК, г.Актобе ул. Шернияза 35
            03000, РК, г.Актобе ул.Маресьева 87
            +7 (7132) 905-100
            +7 (775) 0 905-100
            +7 (778) 0 905 100
            call@aigerim.info</Text>
        </View>
        {/* <Text style={styles.innerText}>
         Клиника «Айгерим» © 2022</Text> */}
        {/* <View style={{
          //flex: 0.5
        }} >
          <Text style={styles.innerText}>Задать вопрос </Text>
         </View> */}

      </View>

      <View
        style={{
           //flexDirection: "row",
           height: 50,
          // padding: 20
          width: width  
        }}
      >
        <View style={{ backgroundColor: "#052940"  }} >
            <Text style={styles.innerText}>Клиника «Айгерим» © 2022</Text>
        </View>


      </View>


    </ScrollView>
  );
};
//#052940
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'white',
    fontSize: 12,
  },
  container: 
 

   { 
     paddingVertical: 24 , 
     

    },
  upcomingAppoinmentRow: 
  {
    marginHorizontal: 16,
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
