import axios from 'axios'
import { createStore } from 'vuex'

const api = 'https://milky-way-g7q8.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: false,
    message: null,
  },
  getters(state) {
    return state.showSpinner
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async login() {
      const res = await axios.post(`${api}login`, {
        emailAdd: this.emailAdd,
        userPass: this.userPass
      })
      console.log(res);
     
    },
    async register(context, payload) {
      const res = await axios.post(`${api}register`, payload)
      let {msg, err} = await res.data
      if(msg){
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchUsers(context) {

      const res = await axios.get(`${api}users`)
      let {results, err} = await res.data
      if(results){
        context.commit('setUsers', results)
      }else{
        context.commit('setMessage', err)     
      }
    },
    async fetchUser(context, payload) {
      const res = await axios.get(`${api}user/:id`, payload)
      let {results, err} = await res.data
      if(results){
        context.commit('setUser', results)
      }else{
        context.commit('setMessage', err)
      }
    },
    async updateUser(context, id, name) {
      const res = await axios.put(`${api}user/${id}`, {name: name})
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchUsers')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async deleteUser(context, id) {
      const res = await axios.delete(`${api}user/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchUsers')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchProducts(context,) {
      const res = await axios.get(`${api}products`)
      let {results, err} = await res.data
      if(results){
        context.commit('setProducts', results)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchProduct(context, payload) {
      const res = await axios.get(`${api}product/:id`, payload)
      let {results, err} = await res.data
      if(results){
        context.commit('setProduct', results)
      }else{
        context.commit('setMessage', err)
      }
    },
    async updateProduct(context, id) {
      const res = await axios.put(`${api}product/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchProducts')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${api}product/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchProducts')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
  },
  modules: {
  }
})