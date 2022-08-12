import React, { useRef, useState } from 'react'
enum Operadores {
    sumar,restar,multiplicar,dividir
}
 export const hooksCalculator = () => {
    const [numero,setnumero]= useState('0');
    const [numeroAnterior,setnumeroAnterior]= useState('0');
    const ultimaOperacion = useRef<Operadores>();

    const clear =()=>{
        setnumero('0');
        setnumeroAnterior('0');
    }

    const armarNumero = (numeroTexto : string)=>{
        // Punto decimal
        if(numero.includes('.')&&numeroTexto === '.')return;
        if(numero.startsWith('0') || numero.startsWith('-0')){

            // Punto decimal
           if(numeroTexto === '.'){
                setnumero(numero + numeroTexto);
            //evaluaar si es otro 0 y hay punto    
           } else if(numeroTexto === '0' && numero.includes('.')){
                setnumero(numero + numeroTexto);
                // evaaluar si es diferente de cero y no tiene un punto
           }else if(numeroTexto !== '0' && !numero.includes('.')){
            setnumero(numeroTexto);
            // evitar el 0.000
           }else if(numeroTexto === '0' && !numero.includes('.')){
            setnumero(numero);
           }else{
            setnumero(numero+numeroTexto);
           }

        }else{
            setnumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () =>{
        if(numero.includes('-')){
            setnumero(numero.replace('-',''));
        }else{
            setnumero('-'+numero);
        }
    }

    const btnDelete = ()=>{
        let numeronegativo;
        let NUMEROtEMPORAL = numero;
        if(numero.includes('-')){
            numeronegativo = '-';
            NUMEROtEMPORAL = numero.substring(1);    
        }
        if(NUMEROtEMPORAL.length > 1){
            setnumero(numeronegativo + NUMEROtEMPORAL.slice(0,+1));
        }else{
            setnumero('0');
        }
    }

    const cambiarNumeroAnterior = ()=>{
        if(numero.endsWith('.')){
            setnumeroAnterior(numero.slice(0,-1));
        }else{
            setnumeroAnterior(numero);
        }
        setnumero('0');
    }    

    const btnDividir = () =>{
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () =>{
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnRestar = () =>{
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.restar;
    }
    const btnSumar = () =>{
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () =>{
        const numero1 = Number(numero);
        const numero2 = Number(numeroAnterior);

        switch(ultimaOperacion.current){
            case Operadores.sumar:
                setnumero(`${numero1 + numero2}`);
                break;
            case Operadores.restar:
                setnumero(`${numero2 - numero1}`);
                break;
            case Operadores.multiplicar:
                setnumero(`${numero1 * numero2}`);
                break;
            case Operadores.dividir:
                setnumero(`${numero2 / numero1}`);
                break;

            default:
                break;
        }
    }
        return{
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
            calcular
        };
}
 