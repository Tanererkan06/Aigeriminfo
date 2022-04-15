import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {DoctorModel} from '../../models';
import {Avatar} from '../avatar';
import {Theme} from '../../theme';
import {AirbnbRating} from 'react-native-ratings';
import {Ionicons} from '@expo/vector-icons';
import {DoctorDetailsBottomSheet} from '../../modals';

type TProps = {
  item: DoctorModel;
  style?: ViewStyle;
};

export const DoctorItemRow: React.FC<TProps> = props => {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <>
      <View style={[styles.container, props.style]}>
        <View style={styles.textContent}>
          <Avatar
            status={props.item.isOnline ? 'online' : null}
            source={{
              uri: props.item.imageUrl,
            }}
            style={styles.avatar}
          />

          <View style={{alignSelf: 'center', marginTop: 2}}>
            <Text style={styles.doctorNameText}>{props.item.fullName}</Text>
            <Text style={styles.doctorTitleText}>{props.item.title}s</Text>
            <AirbnbRating
              showRating={false}
              count={5}
              size={17}
              isDisabled
              selectedColor={'orange'}
              defaultRating={props.item.rating}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => setVisibleModal(true)}>
          <Ionicons
            size={24}
            name="md-more"
            color={Theme.colors.grayForItemsMore}
          />
        </TouchableOpacity>
      </View>
      <DoctorDetailsBottomSheet
        doctor={props.item}
        isVisible={visibleModal}
        onDismissModal={() => setVisibleModal(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 50,
  },
  avatar: {alignSelf: 'center'},
  textContent: {flex: 1, paddingHorizontal: 14},
  doctorNameText: {
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'center',

    color: Theme.colors.black,
  },
  doctorTitleText: {
    marginTop: 4,
    alignSelf: 'center',
    color: Theme.colors.gray,
    fontSize: 13,
  },
  moreButton: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    alignSelf: 'center',
  },
});
