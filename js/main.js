// Proseguendo l'esercitazione (snackone) in classe, creare una todolist dove l'utente potrà:
// scrivere in un input
// premendo invio nell'input oppure cliccando sul submit, salvare nella lista la nuova nota
// visualizzare tutte le note nel box sottostante
// cancellare la nota, cliccando sulla X corrispondente
// Bonus:
// lavorate lato CSS, per rendere la todolist più carina seguendo la vostra creatività.
// Vi lascio un esempio di todolist.
// Buon divertimento branco!


// Todo:
// - non accettare input vuoto



var app = new Vue ({
  el: '#root',
  data: {
    listaTodo: ['Fare i compiti', 'Fare la spesa', 'Fare il bucato'],
    inputAttivita: ''
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
