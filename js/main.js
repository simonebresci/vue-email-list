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

// JS VANILLA ******************************************************************
var xhr = new XMLHttpRequest();
var listaVanilla = document.getElementById('lista-vanilla');

listaVanilla.innerHTML = '';

xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {

    // console.log(this.response);
    // Trasformazione stringa in oggetto
    var responseObject = JSON.parse(this.response)
    // console.log(responseObject);
    // console.log(responseObject.response)
    listaVanilla.append(responseObject.response);
  }
}


// Mettendo a true la funzionalità asincrona, non riesce a fare le richieste in sequenza.
// Mtettendo a false l'asincrono, funziona correttamente.
for (var i = 0; i < 10; i++) {
    xhr.open('GET',
    'https://flynn.boolean.careers/exercises/api/random/mail', true);
    xhr.send();
}
//******************************************************************************

// JQUERY **********************************************************************
for (var z = 0; z< 10; z++) {
  $.ajax(
   {
     url: "https://flynn.boolean.careers/exercises/api/random/mail",
     method: "GET",
     success: function (data, status) {
       // console.log(data);
       // console.log(status)
       $("#lista-jquery").append('<div>' + data.response + '</div>');
     },
     error: function (request, status, error) {
       // console.log(error)
       // console.log(status)
       alert('errore');

     }
   });

}

// *****************************************************************************
