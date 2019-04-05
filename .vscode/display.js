const app = new Vue({
    e1: '#app',
    data: {
        message: 'あばば'
    },
    methods: {
        changeMsg: function(){
            this.message = 'えばば'
        }
    }
})