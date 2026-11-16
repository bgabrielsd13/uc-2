import PromptSync from "prompt-sync";

const entrada = PromptSync()

const peso = entrada("Qual o peso?:")
const altura = Number(entrada("Qual a altura?"))
const imc = peso / (altura ** 2)


console.log("peso: ", peso)
console.log("altura: ", altura)
console.log("imc:", imc)

