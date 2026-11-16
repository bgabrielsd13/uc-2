import PromptSync from "prompt-sync";

const entrada = PromptSync()

const nome = entrada("Digite o nome do motorista:")
const distancia = Number(entrada("Qual distância?"))
const consumo_medio = Number(entrada("Qual valor do consumo médio?"))
const preco_litro = Number(entrada("Qual preco por litro?"))
const combustivel_necessario = Number(entrada("Qual combustíbel necessário?"))
const total = preco_litro * combustivel_necessario


console.log("Motorista: ", nome)
console.log("Distância: ", distancia)
console.log("Consumo médio:", consumo_medio)
console.log("Preço por litro:", preco_litro)
console.log("Combustível necessário: ", combustivel_necessario)
console.log("Custo estimado: ", total)
