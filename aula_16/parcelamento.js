import PromptSync from "prompt-sync";

const entrada = PromptSync()

const quantidade_kits = entrada("Qual a quantidade de kits?:")
const quantidade_equipes = Number(entrada("Qual a quantidade de equipes?"))
const porEquipe = Math.floor(quantidade_kits/quantidade_equipes); const resto = quantidade_kits % quantidade_equipes


console.log("quantidade_kits: ", quantidade_kits)
console.log("quantidade_equipes: ", quantidade_equipes)
console.log("kits_porEquipe:", porEquipe)
console.log("kits_restantes:", resto)