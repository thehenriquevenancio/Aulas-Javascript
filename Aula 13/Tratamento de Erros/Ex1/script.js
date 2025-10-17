function calculadora(numerador, denominador) {

    if(denominador === 0) {
        console.error("Divisão por 0 não permitida!")
        return;
    }
    console.log("Divisão: ", numerador/denominador)

}

calculadora(10,0);