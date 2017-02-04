import Vue from 'vue'

Vue.component('my-component', {
  props: ['message'],
  template: '<h2>{{ message }}</h2>'
})

new Vue({
  el: '#app'
})
