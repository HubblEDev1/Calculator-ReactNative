import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { SimpleButton } from '../components/SimpleButton';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {

    const [numeroAnterior, setNumeroAnterior, numero, setNumero, limpiar, createNumber, positivoNegativo, btnDelete, changeNum, btnSumar, btnRestar, btnMultiplicar, btnDividir, calculate] = useCalculator();

    return(
        <View style={styles.calculatorContainer}>
            {
                (numeroAnterior !== '0') && (<Text style={styles.smallResult}>{numeroAnterior}</Text>)
            }
            <Text style={styles.result} numberOfLines = {1} adjustsFontSizeToFit>{numero}</Text>
            
            <View style={styles.fila}>
                <SimpleButton texto="C" color="red" action={limpiar} />
                <SimpleButton texto="+/-" color="red" action={positivoNegativo}/>
                <SimpleButton texto="del" color="red" action={btnDelete}/>
                <SimpleButton texto="/" color="gray" action={btnDividir}/>
            </View>
            <View style={styles.fila}>
                <SimpleButton texto="1" action={createNumber}/> 
                <SimpleButton texto="2" action={createNumber}/>
                <SimpleButton texto="3" action={createNumber}/>
                <SimpleButton texto="x" color="gray" action={btnMultiplicar}/>
            </View>
            <View style={styles.fila}>
                <SimpleButton texto="4" action={createNumber}/>
                <SimpleButton texto="5" action={createNumber}/>
                <SimpleButton texto="6" action={createNumber}/>
                <SimpleButton texto="-" color="gray" action={btnRestar}/>
            </View>
            <View style={styles.fila}>
                <SimpleButton texto="7" action={createNumber}/>
                <SimpleButton texto="8" action={createNumber}/>
                <SimpleButton texto="9" action={createNumber}/>
                <SimpleButton texto="+" color="gray" action={btnSumar}/>
            </View>
            <View style={styles.fila}>
                <SimpleButton texto="0" action={createNumber} anchor />
                <SimpleButton texto="." action={createNumber}/>
                <SimpleButton texto="=" color="gray" action={calculate}/>
            </View>
        </View>
        
    )
}