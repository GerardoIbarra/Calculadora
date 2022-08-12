import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainer:{
        paddingHorizontal:20,  
        flex:1,
        // backgroundColor:'RED',
        justifyContent:'flex-end',
    },
    result:{
        color:'#ffffff',
        fontSize: 60,
        textAlign: 'right',
        marginBottom:10
    },
    resultlittler:{
        color:'rgba(255,255,255.0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },
    boton:{
        height: 80,
        width: 80,
        backgroundColor:'#2d2d2d',
        borderRadius:1000,
        justifyContent:"center",
        marginHorizontal:10,
    },
    botontext:{
        textAlign:"center",
        padding: 10,
        fontSize:30,
        color:"white",
        fontWeight:'300'
    }
});