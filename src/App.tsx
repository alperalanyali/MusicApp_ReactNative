import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import Search from './components/Search/Search';
import SongCard from './components/SongCard/SongCard';
import music_data from './music-data.json';

const App = () => {
  const [songs,setSongs] = useState(music_data);


  
  const renderSong = ({item}) => <SongCard song={item}/>

  const renderSeperator = () => <View style={styles.seperator}></View>;
  
  const handleSearch = (search) =>{
    console.log(search);
      const filteredList = music_data.filter(song =>{
        let checkExist = false;
        const searchedText = search.toLowerCase();
        const currentTitle = song.title.toLowerCase();
        const currentArtist = song.artist.toLowerCase();
        const currentYear = song.year.toString();
        checkExist = currentTitle.indexOf(searchedText) > -1 || currentArtist.indexOf(searchedText) > -1 || currentYear.indexOf(searchedText) > -1;  
          
        
        
        return checkExist 
        
      });
      console.log(filteredList);
      setSongs(filteredList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Music App</Text>
        <Search handleSearch={handleSearch}/>
        <FlatList
          ItemSeparatorComponent={renderSeperator}
          keyExtractor={item => item.id.toString()}
          data={songs}
          renderItem={renderSong}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  seperator:{
    borderBottomColor:'darkgray',
    borderBottomWidth:1
  }

});

export default App ;