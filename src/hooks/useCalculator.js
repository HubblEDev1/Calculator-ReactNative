import { useRef, useState } from "react";

const operaciones = ['sumar', 'restar', 'multiplicar', 'dividir'];

export const useCalculator = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('100');
    const ultimaOperacion = useRef();

    const limpiar = () => {
        setNumero('0')
    };

    const createNumber = (numeroTexto) => {
        if(numero.includes('.') && numeroTexto === '.') return;
        if(numero.startsWith('0') || numero.startsWith('-0')){
            if(numeroTexto === '.'){
                setNumero(numero + numeroTexto);
            }else if(numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto);
            }else if(numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto);
            }else if(numeroTexto === '0' && !numero.includes('.')){
                setNumero(numero);
            }else{
                setNumero(numeroTexto);
            }

        }else{
            setNumero(numero + numeroTexto);
        }
    };

    const positivoNegativo = () => {
        if(numero.includes('-')){
            setNumero(numero.replace('-', ''));
        }else{
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {
        let negative = '';
        let tempNumber = numero;

        if(numero.includes('-')){
            negative = '-';
            tempNumber = numero.substr(1);
        }

        if(tempNumber.length > 1){
            setNumero(negative + tempNumber.slice(0, -1));
        }else{
            setNumero('0');
        }

    }

    const changeNum = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0, -1));
        }else{
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnSumar = () =>{
        changeNum();
        ultimaOperacion.current = operaciones[0];
    }

    const btnRestar = () =>{
        changeNum();
        ultimaOperacion.current = operaciones[1];
    }
    
    const btnMultiplicar = () =>{
        changeNum();
        ultimaOperacion.current = operaciones[2];
    }
    
    const btnDividir = () =>{
        changeNum();
        ultimaOperacion.current = operaciones[3];
    }

    const calculate = () => {
        const num2 = Number(numero);
        const num1 = Number(numeroAnterior);

        switch(ultimaOperacion.current){
            case 'sumar':
                console.log(ultimaOperacion.current);
                setNumero(`${num1 + num2}`);
                break;
            case 'restar':
                console.log(ultimaOperacion.current);
                setNumero(`${num1 - num2}`);
                break;
            case 'multiplicar':
                console.log(ultimaOperacion.current);
                setNumero(`${num1 * num2}`);
                break;
            case 'dividir':
                console.log(ultimaOperacion.current);
                setNumero(`${num1 / num2}`);
                break;
            default: 
                break;
        }
        setNumeroAnterior('0');
    }
    return [numeroAnterior, setNumeroAnterior, numero, setNumero, limpiar, createNumber, positivoNegativo, btnDelete, changeNum, btnSumar, btnRestar, btnMultiplicar, btnDividir, calculate];
}