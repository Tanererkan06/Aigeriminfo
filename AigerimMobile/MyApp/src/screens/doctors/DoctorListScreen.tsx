import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
 import { DashboardItemsModel, DoctorModel, TypicodeUserModel } from "../../models";
import { DashboardService, DoctorsService } from "../../services";
import { DoctorItemRow, Divider } from "../../components";
import NavigationNames from "../../navigations/NavigationNames";
import { useLocalization } from "../../localization";
type TProps = {};

export const DoctorListScreen: React.FC<TProps> = props => {
  const navigation = useNavigation();
  const { getString, changeLanguage } = useLocalization();
  const [dashboardItem, setDashboardItem] = useState<DashboardItemsModel>(null);
  const [doctors, setDoctors] = useState<DoctorModel[]>(null);

  useEffect(() => {

    DoctorsService.getDoctors().then(typeUsers => {
      setDoctors(typeUsers);
    });
  
  }, []);

  return (
    <FlatList
      data={doctors}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(NavigationNames.DoctorDetailScreen, {
              model: JSON.stringify(item)
            })
          }
          style={styles.itemRowContainer}
        >
          <DoctorItemRow item={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => `key${index}ForDoctor`}
     // ItemSeparatorComponent={() => <Divider />}
      contentContainerStyle={{ paddingVertical: 12 }}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemRowContainer: { paddingStart: 16, paddingEnd: 8 }
});
