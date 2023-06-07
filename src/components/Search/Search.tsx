import {TextInput, View}  from 'react-native';

import React from 'react';
import styles  from './Search-style'

const Search = ()=>{
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.title}
                placeholder='Ara'/>
        </View>
    )
}

export default Search;