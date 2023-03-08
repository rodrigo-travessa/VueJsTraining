const app = Vue.createApp({
    //data, functions to react to shit
    //template :'<h2> I am the template <h2>'
    data(){
        return {
            likes : 50,
            name : 'Rodrigo'
        }
    },
    methods: {
        multiplyLikes(){
            this.name = 'thiago'
            this.likes = this.likes * 10
        }

    }
})

app.mount('#app')