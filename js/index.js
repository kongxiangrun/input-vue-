Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


 

 const routes = [
  { path: '/login', component: login } 
]
 const router = new VueRouter({
  routes
})



var app = new Vue({
  el: '#app',
  data: {
    loginForm: {
      username: 'admin',
      password: '111111'
    },
    loginRules: {
      username: [{ required: true, trigger: 'blur', validator: validateUsername }],
      password: [{ required: true, trigger: 'blur', validator: validatePass }]
    },
    message: 'Hello Vue!', 
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其他什么人吃的东西' }
    ],
    visible: false
  },
  router
}) 