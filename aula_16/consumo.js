import PromptSync from "prompt-sync";

const entrada = PromptSync()

const quilometros_percorridos = entrada("Quantidade de quilometros percorridos?:")
const litros_consumidos = Number(entrada("Quantidade de litros consumidos?"))
const consumo_medio = Number(entrada("Qual o consumo medio?"))
const consumo = quilometros_percorridos / litros_consumidos 


console.log("quilometros_percorridos: ", quilometros_percorridos)
console.log("litros_consumidos: ", litros_consumidos)
console.log("consumo_medio:", consumo_medio)
console.log("consumo:", consumo)