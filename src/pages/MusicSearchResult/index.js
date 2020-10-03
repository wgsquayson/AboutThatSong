import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
//import api from '../../services/api';

import Thumb from '../../assets/images/vancejoy.jpg';

import styles from './styles';

export default function MusicSearchResult({ route, navigation }) {
    //const [searchResult, setSearchResult] = useState();
    //let artistArray = [];
    //const apikey = '9f0ec5c717eb2119ae67db57f9ce07d8';

    const { music } = route.params;

    const data = [
        { key: 'Vance Joy', pic: Thumb }
    ]


    /*useEffect(() => {
        api.get(`/search.excerpt?apikey=${apikey}&q=${music}`)
            .then(function (response) {
                setSearchResult(response.data.response.docs);
            }
        );
    }, [])
    */
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="left" size={27} color="#FFFFFF" onPress={() => { navigation.goBack() }} />
                <Text style={styles.headerText}>Então, você quis dizer "{music}" de...</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.artistSector}
                            onPress={() => { navigation.navigate('MyTabs') }}
                        >
                            <View style={styles.artistGroup}>
                                <Image source={item.pic} style={styles.artistThumb} />
                                <Text style={[{ fontFamily: 'BeVietnam_800ExtraBold' }, styles.artistName]}>{item.key}</Text>
                            </View>
                                <Icon name="right" size={27} color="#FFFFFF" />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}