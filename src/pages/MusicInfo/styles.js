import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2a2d34',
        paddingTop: StatusBar.currentHeight || 20
    },
    header: {
        marginTop: 20,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    albumContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
    },
    albumCover: {
        width: 150,
        height: 150
    },
    songInfoContainer: {
        flex: 1,
        marginLeft: 12,
    },
    songName: {
        fontFamily: 'BeVietnam-ExtraBold',
        color: '#FFFFFF',
        marginTop: 15,
        fontSize: 25,
    },
    songInfo: {
        fontFamily: 'BeVietnam-Regular',
        color: '#FFFFFF',
        marginTop: 7,
        fontSize: 15,
    }
});

export default styles;