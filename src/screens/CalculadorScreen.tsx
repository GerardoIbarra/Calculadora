import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalucator } from '../components/BotonCalucator'
import { styles } from '../theme/appTheme'
import { hooksCalculator } from '../hooks/hooksCalculator';

export const CalculadorScreen = () => {

    const { 
        numero,
        numeroAnterior,
        clear,
        armarNumero,
        positivoNegativo,
        btnDelete,
        cambiarNumeroAnterior,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,} = hooksCalculator();

  return (
    <View style={styles.calculatorContainer}>
        {
            (numeroAnterior !=='0')&&(
                <Text style={styles.resultlittler}>{numeroAnterior}</Text>
            )
        }
        <Text style={styles.resultlittler}>{numeroAnterior}</Text>
        <Text style={styles.result}
              numberOfLines={1}
              adjustsFontSizeToFit
        >{numero}</Text>
        
        <View style={styles.fila}>
            <BotonCalucator texto="C" color="#9b9b9b" accion={clear}/>
            <BotonCalucator texto="+/-" color="#9b9b9b" accion={positivoNegativo}/>
            <BotonCalucator texto="del" color="#9b9b9b" accion={btnDelete}/>
            <BotonCalucator texto="/" color="#FF9427" accion={btnDividir} />
        </View>
        <View style={styles.fila}>
            <BotonCalucator texto="7" accion={armarNumero}/>
            <BotonCalucator texto="8" accion={armarNumero}/>
            <BotonCalucator texto="9" accion={armarNumero}/>
            <BotonCalucator texto="*" color="#FF9427" accion={btnMultiplicar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalucator texto="4" accion={armarNumero}/>
            <BotonCalucator texto="5" accion={armarNumero}/>
            <BotonCalucator texto="6" accion={armarNumero}/>
            <BotonCalucator texto="-" color="#FF9427" accion={btnRestar} />
        </View>
        <View style={styles.fila}>
            <BotonCalucator texto="1" accion={armarNumero}/>
            <BotonCalucator texto="2" accion={armarNumero}/>
            <BotonCalucator texto="3" accion={armarNumero}/>
            <BotonCalucator texto="+" color="#FF9427" accion={btnSumar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalucator texto="0" ancho ={true} accion={armarNumero}/>
            <BotonCalucator texto="." accion={armarNumero}/>
            <BotonCalucator texto="=" color="#FF9427" accion={calcular}/>
        </View>
    </View>
  )
}
