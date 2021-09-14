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
        },
        methods: {
             appari: function (){
                this.bottoneSegreto = 'd-block';
            },
            ruota: function(){
                this.title += ' animate__flip animate__animated';
            }
        },
      
    })