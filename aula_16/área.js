import PromptSync from "prompt-sync";

const entrada = PromptSync()

const comprimento = entrada("Qual a medida do comprimento?:")
const largura = Number(entrada("Qual a medida da largura?"))
const area_piso = Number(entrada("Qual a medida da area?"))
const area = comprimento * largura 


console.log("comprimento: ", comprimento)
console.log("largura: ", largura)
console.log("area_piso:", area_piso)
console.log("area:", area)