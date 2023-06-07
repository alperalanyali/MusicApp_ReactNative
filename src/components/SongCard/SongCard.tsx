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
                    {song.isSoldOut && 
                    <View style={styles.sold_out_container}>
                            <Text style={styles.sold_out_title}>TÜKENDİ</Text>
                        </View>}
                </View>
            </View>
        </View>
    )
}

export default SongCard;