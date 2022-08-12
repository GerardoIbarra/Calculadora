import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
     texto:string; 
     color?:string;
     ancho?:boolean;
     accion:(numeroTexto:string)=>void;
}

export const BotonCalucator = ({texto,color='#2d2d2d',ancho=false,accion}:Props) => {
    return (
        <TouchableOpacity 
            onPress={() => accion(texto)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor:color,
                width: (ancho)?160:80
            }}>
                <Text style={{
                    ...styles.botontext,
                    color:(color === '#9b9b9b') ? 'black' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
