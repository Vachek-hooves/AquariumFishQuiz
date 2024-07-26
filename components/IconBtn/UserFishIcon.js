import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLOR} from '../../const/colors';

const UserFishIcon = () => {
  return (
    <TouchableOpacity style={{position: 'absolute', top: 30, right: 50}}>
      <Image
        source={require('../../assets/img/icons/fishDark.png')}
        style={{
          height: 50,
          width: 50,
          tintColor: COLOR.darkBlue,
        }}
      />
    </TouchableOpacity>
  );
};

export default UserFishIcon;

const styles = StyleSheet.create({});
