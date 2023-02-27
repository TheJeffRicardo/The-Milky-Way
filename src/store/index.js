import { createStore } from 'vuex'

// const api = ''

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
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
    // async login(context, payload) {
    //   const res = await axios.post(`${api}login`, payload)
    //   const {result, err} = await res.data
    //   if(result) {
    //     context.commit('setUser', result)
    //   }else{
    //     context.commit('setMessage', err)
    //   }
    // },
    // async register(context, payload) {
    //   const res = await axios.post(`${api}register`, payload)
    //   let {msg, err} = await res.data
    //   if(msg){
    //     context.commit('setMessage', msg)
    //   }else{
    //     context.commit('setMessage', err)
    //   }
    // },
    // async fetchUsers(context) {
    //   const res = await axios.get(`${api}users`)
    //   let {results, err} = await res.data
    //   if(results){
    //     context.commit('setUsers', results)
    //   }else{
    //     context.commit('setMessage', err)
    //   }
    // },
    // async fetchUser(context, payload) {
    //   const res = await axios.get(`${api}user/:id`, payload)
    //   let {results, err} = await res.data
    //   if(results){
    //     context.commit('setUser', results)
    //   }else{
    //     context.commit('setMessage', err)
    //   }
    // },
    // async updateUser(context, payload) {
    //   const res = await axios.put(`${api}user/:id`, payload)
    //   let {results, err} = await res.data
    //   if(results){
    //     context.commit('setUser', results)
    //   }else{
    //     context.commit('setMessage', err)
    //   }
    // },
    // async deleteUser(context, payload) {
    //   const res = await axios.delete(`${api}user/:id`, payload)
    //   let {results, err} = await res.data
    //   if(results){
    //     context.commit('setUser', results)
    //   }else{
    //     context.commit('setMessage', err)
    //   }
    // },
    // async fetchProducts(context, payload) {
    // },
    // async fetchProduct(context, payload) {
    // },
    // async updateProduct(context, payload) {
    // },
    // async deleteProduct(context, payload) {
    // },
  },
  modules: {
  }
})