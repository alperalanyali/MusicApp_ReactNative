import {Image, Text, View} from 'react-native';

import React from 'react';
import styles from './SongCard-style'

const SongCard = ({song})=>{
    return(
        <View style={styles.container}>
            
                    <Image 
                        style={styles.image}
                    source={{uri:song.imageUrl}}
                />
            
            <View style={styles.inne_container}>
                <Text style={styles.title}>{song.title}</Text>
                <View style={styles.info_container}>
                    <Text style={styles.artist}>{song.artist}</Text>
                    <Text style={styles.year}>{song.year}</Text>
                    {song.isSoldOut && <Text style={styles.sold_out}>TÜKENDİ</Text>}
                </View>
            </View>
        </View>
    )
}

export default SongCard;