import {TextInput, View}  from 'react-native';

import React from 'react';
import styles  from './Search-style'

const Search = ({handleSearch})=>{
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.title}
                clearTextOnFocus={true}
                onChangeText={handleSearch}
                placeholder='Ara'/>
        </View>
    )
}

export default Search;