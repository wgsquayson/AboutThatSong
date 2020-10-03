import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

import albumCover from '../../assets/images/albumCover.jpg'

export default function MusicInfo({ navigation }) {
    const letra = `I was scared of dentists and the dark\nI was scared of pretty girls and starting conversations\nOh, all my friends are turning green\nYou're the magician's assistant in their dream\n\nOh, and they come unstuck\n\nLady, running down to the riptide\nTaken away to the dark side\nI wanna be your left hand man\nI love you when you're singing that song\nAnd I got a lump in my throat\n'Cause you're gonna sing the words wrong\n\nThere's this movie that I think you'll like\nThis guy decides to quit his job and heads to New York City\nThis cowboy's running from himself\nAnd she's been living on the highest shelf\n\nOh, and they come unstuck\n\nLady, running down to the riptide\nTaken away to the dark side\nI wanna be your left hand man\nI love you when you're singing that song\nAnd I got a lump in my throat\n'Cause you're gonna sing the words wrong\n\nI just wanna, I just wanna know\nIf you're gonna, if you're gonna stay\nI just gotta, I just gotta know\nI can't have it, I can't have it any other way\nI swear she's destined for the screen\nClosest thing to Michelle Pfeiffer that you've ever seen, oh\n\nLady, running down to the riptide\nTaken away to the dark side\nI wanna be your left hand man\nI love you when you're singing that song\nAnd I got a lump in my throat\n'Cause you're gonna sing the words wrong\n\nOh lady, running down to the riptide\nTaken away to the dark side\nI wanna be your left hand man\nI love you when you're singing that song\nAnd I got a lump in my throat\n'Cause you're gonna sing the words wrong\n\nOh lady, running down to the riptide\nTaken away to the dark side\nI wanna be your left hand man\nI love you when you're singing that song\nAnd I got a lump in my throat\n'Cause you're gonna sing the words wrong\nAnd I got a lump in my throat\n'Cause you're gonna sing the words wrong`;

    return (
        <>
            <SafeAreaView />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Icon name="left" size={27} color="#FFFFFF" style={{ alignSelf: 'flex-start' }} onPress={() => { navigation.goBack() }} />
                        <Icon name="home" size={27} color="#FFFFFF" style={{ alignSelf: 'flex-start' }} onPress={() => { navigation.navigate('HomeScreen') }} />
                    </View>
                    <View style={styles.albumContainer}>
                        <Image source={albumCover} style={styles.albumCover} />
                        <View style={styles.songInfoContainer}>
                            <Text style={styles.songName}>Riptide</Text>
                            <Text style={styles.songInfo}>Vance Joy</Text>
                            <Text style={styles.songInfo}>God Loves You When You're Dancing</Text>
                            <Text style={styles.songInfo}>2013</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#4d5360',
                        borderBottomWidth: 1,
                        marginVertical: 17
                    }}
                />
                <ScrollView>
                    <View style={styles.lyricsContainer}>
                    <Text style={styles.lyricsTitle}>Letra</Text>
                            <Text style={styles.lyrics}>{letra}</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}