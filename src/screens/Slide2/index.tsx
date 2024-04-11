import { View, Text, Image } from 'react-native';
import { styles } from "./styles";
import { styleContainer } from "../../styles/GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';
import { MenuStackTypes } from "../../navigation/stack.navigation";
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Slide2({ navigation }: MenuStackTypes) {
    const caver = require('../../assets/skelet.png')
    return (
        <LinearGradient colors={['rgba(52, 42, 80, 1)', 'rgba(34, 81, 115, 1)']} style={styleContainer.container}>
            <View style={styles.flex}>
                <Text style={styles.title}>My Friends</Text>
                <Image source={caver}/>
                <Text style={styles.text}>Oi amigos, como vocês estão? Esse é um aplicativo voltado para vocês</Text>
            </View>
        </LinearGradient>
    )
}