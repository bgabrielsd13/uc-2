import PromptSync from "prompt-sync";

const entrada = PromptSync()

let pontuacao_inicial = 50 

console.log("Pontuacao inicial:", pontuacao_inicial)

pontuacao_inicial += 20
console.log("Bonus:", pontuacao_inicial)

pontuacao_inicial -=15
console.log("Pontos_utilizados:", pontuacao_inicial)

 
console.log("Saldo_de_pontos:", pontuacao_inicial)