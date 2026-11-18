import PromptSync from "prompt-sync";

const entrada = PromptSync()

let estoque_inicial = 35 

console.log("Estoque inicial:", estoque_inicial)

estoque_inicial += 12
console.log("recebimento:", estoque_inicial)

estoque_inicial -=9
console.log("Despacho:", estoque_inicial)

console.log("Estoque final:", estoque_inicial)