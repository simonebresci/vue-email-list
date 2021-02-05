/* Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
La chiamata ajax vi ritornerà ogni volta un'email random.
Endpoint: https://flynn.boolean.careers/exercises/api/random/mail
Buon lavoro, branco! */




var app = new Vue ({
  el: '#root',
  data: {
    listaTodo: ['Fare i compiti', 'Fare la spesa', 'Fare il bucato'],
    inputAttivita: ''
  },
  mounted() {
    // alert('Eseguo axios nel mounted');

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(objReceived){
           // alert('sono nel then');
           const result = objReceived.data.response;
           console.log(result);
         });

  },
  methods : {
    pushElement: function (){
      if(this.inputAttivita != ''){
        this.listaTodo.push(this.inputAttivita);
      }
    },
    removeElement: function (index){
      // Rimuovere elemento con funzione .filter
      this.listaTodo = this.listaTodo.filter( (element,i) =>{
        return (i != index);
      });
    }
  }

});
Vue.config.devtools = true;
