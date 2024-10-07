const listaDeTarefas = []
const tarefa1 = prompt ('qual a tarefa 1?')
const tarefa2 = prompt ('qual a tarefa 2?')
const tarefa3 = prompt ('qual a tarefa 3?')
listaDeTarefas.push (tarefa1, tarefa2, tarefa3)
console.log (listaDeTarefas)
const remocao = prompt ('digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2')
listaDeTarefas.splice (remocao,1)
console.log (listaDeTarefas)