import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2a2d34',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    logo: {
        width: '70%',
        resizeMode: 'contain',
    },
    input: {
        flexDirection: 'row',
        width: '80%',
        height: 60,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        color: '#f2f2f2',
        fontSize: 17,
        lineHeight: 23,
        paddingRight: 13,
        fontFamily: 'BeVietnam-Medium'
    },
    obs: {
        color: '#4d5360',
        marginTop: 5,
        alignSelf: 'flex-end',
        fontFamily: 'BeVietnam-Medium'
    }
});

export default styles;