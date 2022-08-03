'use strict'

function somar(){
    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;
    const output = document.getElementById("resultado");

    const resultado = parseFloat(valor1) + parseFloat(valor2);

    output.textContent = resultado;
}

function subtrair(){
    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;
    const output = document.getElementById("resultado");

    const resultado = parseFloat(valor1) - parseFloat(valor2);

    output.textContent = resultado;
}

function multiplicar(){
    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;
    const output = document.getElementById("resultado");

    const resultado = parseFloat(valor1) * parseFloat(valor2);

    output.textContent = resultado;
}

function dividir(){
    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;
    const output = document.getElementById("resultado");

    const resultado = parseFloat(valor1) / parseFloat(valor2);

    output.textContent = resultado;
}



document.getElementById("somar").addEventListener('click',somar);
document.getElementById("subtrair").addEventListener('click',subtrair);
document.getElementById("multiplicar").addEventListener('click',multiplicar);
document.getElementById("dividir").addEventListener('click',dividir);