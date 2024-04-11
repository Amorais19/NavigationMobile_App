import { View, Text, Image } from 'react-native';
import { styles } from "./styles";
import { styleContainer } from "../../styles/GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';
import { MenuStackTypes } from "../../navigation/stack.navigation";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Slide2 } from '../Slide2';

export function Slide1({ navigation }: MenuStackTypes) {
    const bear = require('../../assets/bear.png')
    return (
        <LinearGradient colors={['rgba(52, 42, 80, 1)', 'rgba(34, 81, 115, 1)']} style={styleContainer.container}>
            <View style={styles.flex}>
                <Text style={styles.title}>My Friends</Text>
                <Image source={bear}/>
                <Text style={styles.text}>Oi amigos, como vocês estão? Esse é um aplicativo voltado para vocês</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.push("Slide2")}>
                <Text style={styles.prox}>..prox..</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}