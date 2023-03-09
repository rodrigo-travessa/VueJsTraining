const app = Vue.createApp({
    //data, functions to react to shit
    //template :'<h2> I am the template <h2>'
    data(){
        return {
            likes : 50,
            name : 'Rodrigo',
            x: 0,
            y: 0,
            titles : [ 'title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7'],
            complex :[{title: 'name of the song', author: 'that guy', img:'assets/1.jpeg', isFav : true},
                      {title: 'name of the movie', author: 'this guy', img:'assets/2.jpeg', isFav : true},
                      {title: 'name of the play', author: 'those guys', img:'assets/3.jpeg', isFav : false},
                      {title: 'name of the stuff', author: 'them guys', img:'assets/4.jpeg', isFav : true}]}},
    methods: {
        multiplyLikes(e){
            console.log(e)
            this.name = 'thiago'
            this.likes = this.likes * 10
        },

        handleEvent(e){
            console.log(e)
        },
        handleMouseMove(e){
            this.x = e.offsetX,
            this.y = e.offsetY
        },
        toggleFav(item){
            this.complex[this.complex.indexOf(item)].isFav = !item.isFav
        },

    },
    computed: {
        filteredList(){
            return this.complex.filter((item) => item.isFav == true)
        }

    }
})



app.mount('#app')