'use strict'

import { produtos } from "./produtos.js"

const criaCard = ( produto ) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    foto.src = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    titulo.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produto.description

    const preço = document.createElement('spam')
    preço.classList.add('card__price')
    preço.textContent = 'R$' + produto.price

    card.append(foto, titulo, descricao, preço)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map( criaCard )

    container.replaceChildren(...cards)
}

carregarProdutos()