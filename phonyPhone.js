const phonyPhone = Vue.createApp({
   data(){
    return {
        phoneNumber : 0,
        showNumber : false

    }
   },
   methods: {
    toggleShowNumber(){
        this.showNumber = !this.showNumber
        console.log(this.showNumber)
    }
   }

})

phonyPhone.mount('#phonyPhone')