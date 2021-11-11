const app = new Vue({

  el: '#app',
  data:{
    images: ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'],
    // il contatore mi serve per "navigare" lungo l'array delle immagini
    counter: 0
  },
  // mounted(){
  //   // in questo punto possiamo lanciare delle azioni che vogliamo al nostro caricamento dell'app
  //   console.log('APP MONTATA');
  //   setInterval(() => {
  //     this.nextSlide();
  //   }, 3000)
  // },

   methods:{

    nextSlide(){
      this.counter++;
      if(this.counter > this.images.length - 1){
        this.counter = 0;
      }
    },

    prevSlide(){
      this.counter--;
      if(this.counter < 0){
        this.counter = this.images.length - 1;
      }
    }

  }


});
