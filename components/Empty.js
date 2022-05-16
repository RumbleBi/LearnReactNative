import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Empty() {
  return (
    <View style={styles.wrapper}>
      {/* <Image
        source={{uri: 'https://via.placeholder.com/150'}} // const source={uri: 'https://via.placeholder.com/150'};
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/images/circle.png')}
        style={styles.image}
        resizeMode="contain"
      /> */}
      {/* default: cover // center, repeat, contain, stretch */}
      {/* contain VS center 뷰의 너비와 높이가 둘 다 원본 이미지 크기보다 클 때 차이가 발생. 즉, contain은 뷰의 크기에 맞춰 커진다. 반면에 center는 원본 이미지 크기 그대로 나타난다. */}
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
      />
      <Text style={styles.description}>할 일이 없습니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  //   image: {
  //     width: 250,
  //     height: 250,
  //     backgroundColor: 'grey',
  //   },
});
