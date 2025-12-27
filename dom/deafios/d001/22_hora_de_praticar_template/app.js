

new Vue({    
    el: '#desafio',
    data:{  
        nome: 'Anthony Ricardo',
        idade: 23,
        titulo: 'Digite seu nome!'
        
    },
    methods:{   
        id(){   
          return this.idade *3
        },
        alterar(){  
            this.titulo = event.target.value 
        }
    }
})