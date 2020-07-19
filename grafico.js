function criaGrafico(idGrafico, dados, cor){
    var ctx = document.getElementById(idGrafico).getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: dados['rótulo horizontal'],
        datasets: [{
            label: dados['indicador'],
            backgroundColor: cor,
            borderColor: cor,
            data: dados["dados"]
        }]
    },

    // Configuration options go here
    options: {}
});
}

var dadosGrafico1 = {
    "indicador": "Quantidade de unidades (milhões) vendidas do PS4",
    "rótulo horizontal": ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    "dados":[2.1, 22.3, 30, 45.2, 62.2, 73.6, 91, 110.4]
}
criaGrafico("grafico1", dadosGrafico1, 'rgb(0, 0, 255)')
