// A recepção precisa obter os valores necessários para o cãlculo de uma 
// reserva.

import PromptSync from "prompt-sync";

const entrada = PromptSync()

const nome = entrada("digite o nome do hospede:")
const quantidade_diaria = Number(entrada("Quantas diarias?"))
const valor = Number(entrada("digite o valor da diaria:"))

const total = quantidade_diaria * valor

console.log("Hóspede: ", nome)
console.log("Diárias: ", valor)
console.log("Valor da diária: =, valor")
console.log("Total bruto:", total)

