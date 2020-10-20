import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import CarouselItem from './CarouselItem';

const { width, heigth } = Dimensions.get('window');
let listRef;

infiniteScroll = (dataList) => {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;
  setInterval(() => {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }
    this.listRef.scrollToOffset({ animated: true, offset: scrollValue });
  }, 3000);
};

const Carousel = ({ data }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  });
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={(listRef) => (this.listRef = listRef)}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment='center'
          scrollEventThrottle={200}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
          /* onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }]
            )} */
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  dotView: { flexDirection: 'row', justifyContent: 'center' },
});

export default Carousel;
