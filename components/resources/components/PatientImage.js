import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const PatientImage = (...props) => (
  <Image source={{uri: props.source}} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
    borderRadius:100
  },
});

export default memo(PatientImage);
