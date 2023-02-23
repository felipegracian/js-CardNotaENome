'use strict'

const adicionar = document.getElementById('adicionar')

//const adicionarCard = () => {
//  const container = document.getElementById('container')
//container.innerHTML = container.innerHTML + '<div class = "item"></div>'
//}

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    if (nome == '') {
        alert('ERRO: Por favor digite o nome')
    } else if (nota == '') {
        alert('ERRO: Por favor digite o nome')
    } else if (isNaN(nome) == false) {
        alert('ERRO: Por favor digite não digite números no nome')
    } else if (isNaN(nota) == true) {
        alert('ERRO: Por favor digite não digite letras na nota')
    } else if(nota < 0 || nota > 10){
        alert('ERRO: As notas variam apenas entre 0 a 10')
    } else {
        if(nota > 5){
            novaDiv.classList.add('aluno__verde')
        } else if(nota < 6){
            novaDiv.classList.add('aluno__vermelho')
        } 
        novaDiv.innerHTML = `<h2 class = "aluno__nome">${nome}</h2>
        <span class = "aluno__nota">${nota}</span>`
        container.appendChild(novaDiv)
    }



}

const handleClick = () => {
    const aluno ={
        nome: prompt('Digite seu nome:'),
        nota: prompt('Digite sua nota').replace(',' , '.')
    }

    adicionarCard(aluno)
}
adicionar.addEventListener('click', handleClick)