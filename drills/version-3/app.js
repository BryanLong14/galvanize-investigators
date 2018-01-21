var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [2014, 2015, 2016],
        datasets: [{
            borderColor: 'tomato',
            data: [73, 199, 395],
            fill: false
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Number of graduates'
                },
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Year'
                }
            }]
        }
    }
});
