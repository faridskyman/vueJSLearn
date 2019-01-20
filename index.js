// // components need to alwasy be on top else (err cant find todo-item)
// Vue.component('groc-item',{
//     // The todo-item component now accepts a
//     // "prop", which is like a custom attribute.
//     // This prop is called todo.
//     prop: ['gitem'],
//     template: '<li>{{ item.text }}</li>'
// })

Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
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
        messageform: 'Enter message here.',
        groceryList: [
            {id:0, text: 'Carrots'},
            {id:1, text: 'Kiwi Fruits'},
            {id:2, text: 'Tuna in Olive oil'}
        ]
        
    },
    methods: {
        reverseMsg: function() {
            this.messageform = this.messageform.split('').reverse().join('');
        }
    }
});

