import React, { useState } from 'react';
import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import logo from '../../assets/images/logoWhite.png';

import styles from './styles';

export default function HomeScreen({ navigation }) {
    const [music, setMusic] = useState('');
    const [bottomColor, setBottomColor] = useState('#4d5360');

        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <View>
                    <View style={[{ borderBottomColor: bottomColor }, styles.input]}>
                        <TextInput
                            style={[{ fontFamily: 'BeVietnam_500Medium' }, styles.text]}
                            placeholder='Pesquise aqui uma música...*'
                            placeholderTextColor='#4d5360'
                            value={music}
                            onChangeText={music => setMusic(music)}
                        />
                        <TouchableOpacity
                            onPress={() => {setBottomColor('#4d5360');setMusic('')}}
                        >
                            <Icon name="close" size={24} color="#4d5360" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                music === '' ? setBottomColor('#b62727') :
                                navigation.navigate('MusicSearchResult', {
                                    music
                                });
                            }}
                        >
                            <Icon name="right" size={24} color="#4d5360" style={{ marginLeft: 13 }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.obs}>* somente a música.</Text>
                </View>
            </View>
        )
    
}