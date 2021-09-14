/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data. */
let app = new Vue(
    {
        el: '#root',
        data:{
            message : '',
            title: 'text-danger fs-1 text-center m-5',
            subTitle: 'mt-5 pb-2 fs-3',
            bottoneSegreto: 'd-none',
            value : '',
            bottoneSegreto2: 'd-none',
            bottoneSegreto3: 'd-none',
            suggerimento: 'd-none',
        },
        methods: {
             appari: function (){
                this.bottoneSegreto = 'd-block';
                this.bottoneSegreto2 = 'd-block';
                this.bottoneSegreto3 = 'd-block';
                this.suggerimento = 'd-block';
            },
            ruota: function(){
                this.title = ' animate__flip animate__animated text-danger fs-1 text-center m-5';
            },
            hinge: function(){
                this.subTitle = ' animate__flip animate__hinge mt-5 pb-2 fs-3';
            },
            clear: function(){
                this.subTitle = 'mt-5 pb-2 fs-3';
                this.title = 'text-danger fs-1 text-center m-5';
            }
        },
      
    })