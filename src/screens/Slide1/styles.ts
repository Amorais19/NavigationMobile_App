import { StyleSheet } from 'react-native';
import { colors } from '../../styles/GlobalStyles'

export const styles = StyleSheet.create({
    flex: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 350,
    },
    title: {
        fontFamily: 'IrishGrover_400Regular',
        fontSize: 50,
        color: colors.white,
    },
    text: {
        fontSize: 25,
        color: colors.white,
        textAlign: 'center'
    },
    prox: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 24
    }
});