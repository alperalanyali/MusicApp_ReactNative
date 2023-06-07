import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import SongCard from './components/SongCard/SongCard';
import music_data from './music-data.json';

const App = () => {

  const renderMusic = ({item}) => <SongCard song={item}/>
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Music App</Text>
        <FlatList
          data={music_data}
          renderItem={renderMusic}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }

});

export default App ;