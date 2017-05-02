/**
 * Created by Stefan on 4/30/2017.
 */



var vue = new Vue({
    el: '#app',

    data: {
        jan: 20,
        feb: 50,
        mar: 25
    },

    methods: {
        onChange(){
            changeData(this.jan, this.feb, this.mar);
        }
    }
});




function changeData(jan, feb, mar){
    chart.data.datasets[0].data[0] = jan;
    chart.data.datasets[0].data[1] = feb;
    chart.data.datasets[0].data[2] = mar;
    chart.update();
}



var data = {
    labels: ['January', 'February', 'March'],
    datasets: [
        {
            data: [vue.jan, vue.feb, vue.mar],
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)"
        }
    ]
};

var context = document.querySelector('#graph').getContext('2d');

var chart = new Chart(context, {
    type: 'line',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Chart'
        },
        labels: {
            fontColor: 'rgb(255, 99, 132)'
        }
    }
});