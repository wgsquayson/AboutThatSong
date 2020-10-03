import { StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2a2d34',
        paddingTop: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight + 10
    },
    header: {
        padding: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    albumContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    albumCover: {
        width: 180,
        height: 180
    },
    songInfoContainer: {
        flex: 1,
        marginLeft: 12,
    },
    songName: {
        fontFamily: 'BeVietnam-ExtraBold',
        color: '#FFFFFF',
        fontSize: 25,
    },
    songInfo: {
        fontFamily: 'BeVietnam-Regular',
        color: '#FFFFFF',
        marginTop: 7,
        fontSize: 15,
    },
    lyricsContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    lyricsTitle: {
        fontFamily: 'BeVietnam-ExtraBold',
        fontSize: 32,
        color: '#FFFFFF',
    },
    lyrics: {
        color: '#FFFFFF',
        fontFamily: 'BeVietnam-Regular',
        fontSize: 17,
        marginVertical: 15,
        lineHeight: 26
    }
});

export default styles;