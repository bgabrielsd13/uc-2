import PromptSync from "prompt-sync";

const entrada = PromptSync()

const valor_compra = entrada("Qual o valor da compra?:")
const valor_recebido = Number(entrada("valor_recebido?"))
const troco = Number(entrada("Qual o troco?"))


console.log("valor_compra: ", valor_compra)
console.log("valor_recebido: ", valor_recebido)
console.log("troco:", troco)