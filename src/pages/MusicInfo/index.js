import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

import albumCover from '../../assets/images/albumCover.jpg'

export default function MusicInfo({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="left" size={27} color="#FFFFFF" style={{ alignSelf: 'flex-start' }} onPress={() => { navigation.goBack() }} />
                <View style= {styles.albumContainer}>
                    <Image source={albumCover} style={styles.albumCover} />
                    <View style={styles.songInfoContainer}>
                        <Text style={styles.songName}>Riptide</Text>
                        <Text style={styles.songInfo}>Vance Joy</Text>
                        <Text style={styles.songInfo}>God Loves You When You're Dancing</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}