import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import catDummyData from '../data/catData';
import { useNavigation } from '@react-navigation/native';

const CategoriesFlatList = () => {
  const navigation = useNavigation();
  const [dataList, setDataList] = useState([
    {
      title: 'Brazil',
      url:
        'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      id: 1,
    },
    {
      title: 'India',
      url:
        'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      id: 2,
    },
    {
      title: 'NewZeland',
      url:
        'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      id: 3,
    },
  ]);

  return (
    <View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Flat List</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={dataList}
          renderItem={({ item }) => (
            <View style={{ paddingVertical: 20 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Live Channel')}
              >
                <Image
                  source={{ uri: item.url }}
                  style={{
                    width: 150,
                    height: 250,
                    borderRadius: 10,
                    marginRight: 12,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    color: 'white',
                    fontSize: 14,
                    bottom: 25,
                    left: 10,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => 'key' + index}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesFlatList;
