

new Vue({    
    el: '#desafio',
    data:{  
        nome: 'Anthony Ricardo',
        idade: 23,
        imagem: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg'
       
        
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