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
        width: '100%'
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 27,
        marginTop: 20,
        fontFamily: 'BeVietnam-ExtraBold'
    },
    artistSector: {
        width: '100%',
        borderBottomWidth: 0.6,
        borderBottomColor: "#4d5360",
        height: 120,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    artistGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    artistThumb: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 40
    },
    artistName: {
        color: '#FFFFFF',
        fontSize: 22,
        marginLeft: 15,
        fontFamily: 'BeVietnam-ExtraBold'
    }
});

export default styles;