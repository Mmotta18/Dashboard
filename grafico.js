
function criaGrafico(idGrafico, dados, cor){
    var ctx = document.getElementById(idGrafico).getContext('2d');
 var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: dados["Rótulox"],
        datasets: [{
            label: dados["indicador"],
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
    "indicador": "Vendas por milhão: Samsung",
    "Rótulox": ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
    "dados":[6, 5.6, 5.4, 5.6, 6.2, 6.7]
}
criaGrafico("grafico1", dadosGrafico1, 'rgb(0, 204, 0)') 

var dadosGrafico2 = {
    "indicador": "Vendas por milhão: Motorola",
    "Rótulox": ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
    "dados":[3.1, 3.2, 3.5, 3.1, 3.3, 3.8, 4]
}
criaGrafico("grafico2", dadosGrafico2, 'rgb(255, 0, 0)')

var dadosGrafico3 = {
    "indicador": "Vendas por milhão: Apple",
    "Rótulox": ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
    "dados":[4, 3.6, 3.5, 4.1, 3.7, 3.3]
}
criaGrafico("grafico3", dadosGrafico3, 'rgb(0, 255, 255)')

var dadosGrafico4 = {
    "indicador": "Vendas por milhão:  Asus",
    "Rótulox": ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
    "dados":[2.5, 2.2, 2, 2.1, 1.9, 2.1]
}
criaGrafico("grafico4", dadosGrafico4, 'rgb(100, 0, 100)')

var dadosGrafico5 = {
    "indicador": "Vendas por milhão: LG",
    "Rótulox": ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
    "dados":[1.8, 2, 2.2, 1.8, 1.5, 2]
}
criaGrafico("grafico5", dadosGrafico5, 'rgb(0, 100, 100)')

var dadosGrafico6 = {
    "indicador": "Vendas por milhão: Xiaomi",
    "Rótulox": ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
    "dados":[3.1, 3.3, 3.5, 3.6, 3.8, 4.2]
}
criaGrafico("grafico6", dadosGrafico6, 'rgb(200, 100, 0)')


