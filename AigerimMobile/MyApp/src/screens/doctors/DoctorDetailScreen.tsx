import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import numeral from "numeral";
import { DoctorModel } from "../../models";
import { Avatar, Divider } from "../../components";
import { Theme } from "../../theme";
import { AirbnbRating } from "react-native-ratings";
import { DoctorReviewItemRow } from "../../components/reviews";
import { Ionicons } from "@expo/vector-icons";

type TProps = {};

export const DoctorDetailScreen: React.FC<TProps> = props => {
  const route = useRoute();
  const navigation = useNavigation();

  const [toolbarTitleHided, setToolbarTitleHided] = useState(true);

  const model = JSON.parse(route.params["model"]) as DoctorModel;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    if (toolbarTitleHided && y > 180) {
      setToolbarTitleHided(false);
      navigation.setOptions({ title: model.fullName });
    } else if (!toolbarTitleHided && y <= 180) {
      setToolbarTitleHided(true);
      navigation.setOptions({ title: " " });
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      }
    });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={handleScroll}
    >
      <View style={styles.headerContainer}>
        <Avatar
          source={{
            uri: model.imageUrl
          }}
          imageStyle={styles.doctorPreviewImage}
        />
        <Text style={styles.doctorInfoFullName}>{model.fullName}</Text>
        <Text style={styles.doctorInfoTitle}>{model.title}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Details</Text>
        <Divider />
        <Text style={styles.aboutText}>{model.about}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Rating</Text>
        <Divider />
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingNumberText}>
            {numeral(model.rating).format("0.0")}
          </Text>
          <AirbnbRating
            showRating={false}
            count={5}
            size={28}
            isDisabled
            selectedColor={"orange"}
            defaultRating={model.rating}
          />
        </View>
       {/*  <TouchableOpacity style={styles.rateButtonContainer}>
          <Text style={styles.rateButtonTitle}>Rate & Write Message</Text>
          <Ionicons
            name="ios-arrow-forward"
            color={Theme.colors.black}
            size={26}
          />
        </TouchableOpacity> */}
      </View>

     {/*  <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <Divider />
        <FlatList
          data={model.reviews}
          keyExtractor={(item, index) => `key${index}ForReview`}
          ItemSeparatorComponent={() => <Divider style={styles.divider} />}
          renderItem={row => <DoctorReviewItemRow item={row.item} />}
          contentContainerStyle={{ paddingVertical: 16 }}
        />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: {
    paddingVertical: 8
  },
  headerContainer: { paddingHorizontal: 16, alignItems: "center" },
  doctorPreviewImage: {
    width: 130,
    height: 130,
    borderRadius: 36,
    borderWidth: 0.5,
    borderColor: Theme.colors.primaryColor
  },
  doctorInfoFullName: {
    fontSize: 19,
    fontWeight: "600",
    color: Theme.colors.black,
    marginTop: 22
  },
  doctorInfoTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Theme.colors.gray,
    marginTop: 6
  },
  divider: { marginHorizontal: 0, marginVertical: 12 },
  sectionContainer: { paddingHorizontal: 16, marginTop: 12 },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 8,
    color: Theme.colors.black
  },
  aboutText: {
    paddingVertical: 8,
    color: Theme.colors.black,
    fontSize: 15
  },
  ratingContainer: { flexDirection: "row", paddingVertical: 16 },
  ratingNumberText: {
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "600",
    marginEnd: 12
  },
  rateButtonContainer: {
    paddingVertical: 8,
    flexDirection: "row"
  },
  rateButtonTitle: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
    color: Theme.colors.black
  }
});
