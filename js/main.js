/* Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
La chiamata ajax vi ritornerà ogni volta un'email random.
Endpoint: https://flynn.boolean.careers/exercises/api/random/mail
*/



// VUE *************************************************************************
var app = new Vue ({
  el: '#root',
  data: {
    listaEmail: []
  },
  mounted() {
    const self = this;
    for(let i = 0; i < 10; i ++){
      // Prendi mail generata dal link
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(objReceived){
             const result = objReceived.data.response;
             self.pushElement(result);
           });

    }

  },
  methods: {
    pushElement: function (elemento){
      this.listaEmail.push(elemento);
    },
    removeElement: function (index){
      // Rimuovere elemento con funzione .filter
      this.listaEmail = this.listaEmail.filter( (element,i) =>{
        return (i != index);
      });
    }
  }

});
Vue.config.devtools = true;

// / VUE ***********************************************************************
