const robo = document.querySelector("[data-robo]")
const robos = [
    {
        cor: "img/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png"
    },

    {
        cor: "img/Robotron 2000 - Azul/Robotron 2000 - Azul.png"
    },

    {
        cor: "img/Robotron 2000 - Branco/Robotron 2000 - Branco.png"
    },

    {
        cor: "img/Robotron 2000 - Preto/Robotron 2000 - Preto.png"
    },

    {
        cor: "img/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png"
    },

    {
        cor: "img/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png"
    }
]

const controle = document.querySelectorAll("[data-controle]")

const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        autualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function autualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}


// Mudar cor do Robotron
let indice = 0

robo.addEventListener("click", () => {

    if (indice <= 4) {
        indice++
    } else {
        indice = 0
    }

    robo.setAttribute("src", robos[indice].cor)
})
