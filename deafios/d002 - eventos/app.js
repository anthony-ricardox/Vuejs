new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{    
        alerta(){   
            alert('Estou Alertando!!')
        },
        alterarvalor(event){ 
            this.valor = event.target.value
        }
    }
})