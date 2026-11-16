import PromptSync from "prompt-sync";

const entrada = PromptSync()

const placa = entrada("Digite a placa:")
const distancia = Number(entrada("Qual distância?"))
const veiculo = Number(entrada("Qual o veiculo?"))
const numero = Number.isFinite(distancia)


console.log("placa: ", placa)
console.log("distancia km: ", distancia)
console.log("veiculo:", veiculo)
console.log(`distancia: ${distancia} km`)
console.log("numero: ", numero)


