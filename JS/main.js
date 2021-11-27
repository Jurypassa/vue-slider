const app = new Vue (
    {
        el: "#root",
        data: {
            array: [
                {
                    immagine : 'img/01.jpg',
                    titolo: 'Svezia',
                    testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    immagine : 'img/02.jpg',
                    titolo: 'Svizzera',
                    testo: 'Lorem ipsum'
                },
                {
                    immagine : 'img/03.jpg',
                    titolo: 'Gran Bretagna',
                    testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    immagine : 'img/04.jpg',
                    titolo: 'Germania',
                    testo:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    immagine : 'img/05.jpg',
                    titolo: 'Paradise',
                    testo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ],
            immagineAttuale: 0,
        },
        methods: {
            nextImage: function(){
                if(this.immagineAttuale == this.array.length){
                    this.immagineAttuale = 0;
                }else{
                    this.immagineAttuale++;
                }
                
            },
            prevImage: function(){
                if(this.immagineAttuale == 0){
                    this.immagineAttuale = this.array.length;
                }else{
                    this.immagineAttuale--;
                }
            },
            immagineSelezionata: function(i){
                this.immagineAttuale = i; 
            },
        }
        
    }
);

