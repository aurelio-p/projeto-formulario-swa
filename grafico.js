var respostasMatematica = {
    "questao_1": 4,
    "questao_2": 200,
    "questao_3": -50,
    "pontuacao": 0
}
var respostasHistoria = {
    "questao_1": "Pedro Alvares Cabral",
    "questao_2": "Comandante da frota espanhola que chegou às terras do “Novo Mundo”, em 12 de outubro de 1492",
    "questao_3": "1939 à 1945",
    "pontuacao": 0
}
var respostasGeografia = {
    "questao_1": "Mata Atlântica",
    "questao_2": "Vaticano e Rússia",
    "questao_3": "Japão e Serra Leoa",
    "pontuacao": 0
}

function matematica1() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('matematica1')



    if (recebido == respostasMatematica.questao_1) {
        respostasMatematica.pontuacao = respostasMatematica.pontuacao + 1;
    }
}

function matematica2() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('matematica2')



    if (recebido == respostasMatematica.questao_2) {
        respostasMatematica.pontuacao = respostasMatematica.pontuacao + 1;
    }
}

function matematica3() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('matematica3')



    if (recebido == respostasMatematica.questao_3) {
        respostasMatematica.pontuacao = respostasMatematica.pontuacao + 1;
    }

}

function historia1() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('historia1')
    if (recebido == respostasHistoria.questao_1) {
        respostasHistoria.pontuacao = respostasHistoria.pontuacao + 1;
    }
}

function historia2() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('historia2')
    if (recebido == respostasHistoria.questao_2) {
        respostasHistoria.pontuacao = respostasHistoria.pontuacao + 1;
    }
}

function historia3() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('historia3')
    if (recebido == respostasHistoria.questao_3) {
        respostasHistoria.pontuacao = respostasHistoria.pontuacao + 1;
    }
}

function geografia1() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('geografia1')
    if (recebido == respostasGeografia.questao_1) {
        respostasGeografia.pontuacao = respostasGeografia.pontuacao + 1;
    }
}

function geografia2() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('geografia2')
    if (recebido == respostasGeografia.questao_2) {
        respostasGeografia.pontuacao = respostasGeografia.pontuacao + 1;
    }
}

function geografia3() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('geografia3')
    if (recebido == respostasGeografia.questao_3) {
        respostasGeografia.pontuacao = respostasGeografia.pontuacao + 1;
    }
}

function drawChart() {
    var options = {
        legend: { position: "none" },
        colors: ['#1B50B6', '#9EBAEF']
    };
    var data = google.visualization.arrayToDataTable([
        ['', 'Quantidade de Perguntas', 'Acertos'],
        ['Matemática', 3, respostasMatematica.pontuacao],
        ['História', 3, respostasHistoria.pontuacao],
        ['Geografia', 3, respostasGeografia.pontuacao]


    ]);

    var chart = new google.charts.Bar(document.getElementById('grafico'));

    chart.draw(data, options);
}

function calcularNota() {
    var totalPontos = respostasMatematica.pontuacao + respostasHistoria.pontuacao + respostasGeografia.pontuacao
    var resultadoFinal = (100 / 9 * totalPontos).toFixed(2)
    document.getElementById('resultadoFinal').innerText = resultadoFinal

}

function mostrarGabarito() {
    window.location.href='gabarito.html' + window.location.search
}

function init() {
    matematica1()
    matematica2()
    matematica3()
    historia1()
    historia2()
    historia3()
    geografia1()
    geografia2()
    geografia3()
    calcularNota()

    console.log(respostasMatematica.pontuacao)
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawChart);
}

init()



