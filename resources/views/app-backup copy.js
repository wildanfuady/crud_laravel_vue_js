import '../js/bootstrap'
import Vue from 'vue'
import App from './components/ExampleComponent'

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})