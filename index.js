// components need to alwasy be on top else (err cant find todo-item)
Vue.component('todo-item',{
    template: '<li>this is a todo</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello from vue!!',
        fname: 'Farid',
        spanmsg:  'Page rendered on: ' + new Date().toLocaleString(),
        seen: true,
        todos: [
            {text:"Learning Javascript"},
            {text:'Using Vue.js'},
            {text:'Exploring ng = Angular!'}
        ],
        messageform: 'Enter message here.'
        
    },
    methods: {
        reverseMsg: function() {
            this.messageform = this.messageform.split('').reverse().join('');
        }
    }
});

