import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, Text, TextInput, View, StyleSheet } from 'react-native';

const apps = [
  {
    id: 1,
    name: 'App 1 large name',
    logo: 'https://www.bootdey.com/image/280x280/FF00FF/000000', 
  },
  {
    id: 2,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/0000FF/000000', 
  },
  {
    id: 3,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/8A2BE2/000000', 
  },
  {
    id: 4,
    name: 'App huge name',
    logo: 'https://www.bootdey.com/image/280x280/A52A2A/000000', 
  },
  {
    id: 5,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/DEB887/000000', 
  },
  {
    id: 6,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/5F9EA0/000000', 
  },
  {
    id: 7,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/7FFF00/000000', 
  },
  {
    id: 8,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/D2691E/000000', 
  },
  {
    id: 9,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/FF7F50/000000', 
  },
  {
    id: 10,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/6495ED/000000', 
  },
  {
    id: 11,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/FFF8DC/000000', 
  },
  {
    id: 12,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/DC143C/000000', 
  },
  {
    id: 13,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/00FFFF/000000', 
  },
  {
    id: 14,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/00008B/000000', 
  },
  {
    id: 15,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/008B8B/000000', 
  },
  {
    id: 16,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/B8860B/000000', 
  },
  {
    id: 17,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/006400/000000', 
  },
  {
    id: 18,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/FF00FF/000000', 
  },
  {
    id: 19,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/FF00FF/000000', 
  },
  {
    id: 20,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/FF00FF/000000', 
  },
  {
    id: 21,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/FF00FF/000000', 
  },
  {
    id: 22,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/FF00FF/000000', 
  },
  {
    id: 23,
    name: 'App 2',
    logo: 'https://www.bootdey.com/image/280x280/FF00FF/000000', 
  },
];

export default AppList = () => {
  const data = apps
  const [searchText, setSearchText] = useState('');
  const filteredData = data.filter(item => item.name.includes(searchText)); 

  return (
    <ImageBackground
      source={{ uri: 'https://www.bootdey.com/image/280x280/DCDCDC/DCDCDC' }} 
      style={styles.background}
    >
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearchText(text)}
          placeholder="Search apps.."
          value={searchText}
        />
      </View>
      <FlatList
        data={filteredData}
        numColumns={4}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.logo }}
              style={styles.logo}
            />
            <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  itemContainer: {
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal:10,
    marginVertical:20,
    height: 60,
    width: 70,
  },
  logo: {
    borderRadius: 50,
    height: 50,
    width: 50,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, 
    shadowRadius: 2,
  },
  searchContainer: {
    width:'100%',
    padding: 16,
  },
  searchInput: {
    height:50,
    marginTop:80,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    padding: 8,

    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  name: {
    fontSize: 16,
    marginTop: 8,
    colo:'white',
    textAlign:'center',
    fontWeight:'bold',

    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, 
    shadowRadius: 2,
  },
});
