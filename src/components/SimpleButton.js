import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../theme/appTheme';


export const SimpleButton = ({texto, color = 'blue', anchor = false, action} = props) => {
    console.log(action);

    return(
        <TouchableOpacity onPress={() => action(texto)}>
            <View style={{...styles.boton, backgroundColor: color, width: (anchor) ? 180: 80}}>
                <Text style={{...styles.textButton, color: (color === 'gray') ? 'white' : 'black'}}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

