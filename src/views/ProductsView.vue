<template>
  <div class="container">
    <h1 style="text-align: center;">Here are Our DELICIOUS Options</h1>
    <div class="filters d-flex justify-content-between">
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" @click="filteredData('')"  checked>
      <label class="btn btn-outline-dark" for="btnradio1" >Show All</label>
    
      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" @click="filteredData('Cakes')" autocomplete="off">
      <label class="btn btn-outline-dark" for="btnradio2">Cakes</label>
    
      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" @click="filteredData('Ice Cream')" autocomplete="off">
      <label class="btn btn-outline-dark" for="btnradio3">Ice Cream</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio4" @click="filteredData('Drinks')" autocomplete="off">
      <label class="btn btn-outline-dark" for="btnradio4">Drinks</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio5" @click="filteredData('Milshakes')" autocomplete="off">
      <label class="btn btn-outline-dark" for="btnradio5">Milkshakes</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio6" @click="filteredData('Waffles')" autocomplete="off">
      <label class="btn btn-outline-dark" for="btnradio6">Waffles</label>
  </div>

    <input type="text" class="" placeholder="Search Here" v-model="searching">
  </div>
  <Spinner class="spinner" v-if="isLoading" />
  <div v-else>
   
          <div class="card g-5" v-for="items in filtering" :key="items" style="width: 18rem;">
            <img :src=items.imgURL alt="pictures of desserts">
            <div class="info" >
              <h2>Name: {{items.prodName}}</h2>
              <h4>Price: R{{items.price}}</h4>
              <h4>Size: {{items.size}}</h4>
            </div>
          </div>
       
       
      </div>
   </div>
  </template>
  <script>
  import {computed} from '@vue/runtime-core';
  import { useStore  } from 'vuex';
  import Spinner from '@/components/SpinnerComp.vue'
  export default {
    components:{
      Spinner
    },
    setup() {
        const store = useStore()
        store.dispatch("fetchProducts")
        const products = computed( ()=>store.state.products)
        return {
          products
        }
      },
      data () {
        return {
          searching: '',
          isLoading: true
        }
      },
      created(){
        setTimeout(()=>{
          this.isLoading = false
        },1000)
      },
      computed: {
        filteredData: function(arg) {
          return this.products.filter((item) => item.categories.toLowerCase() === arg.toLowerCase())},

        filtering() {
        if(this.searching.trim().length > 0){
          return this.products.filter((name)=> name.prodName.toLowerCase().includes(this.searching.trim().toLowerCase()))
        }
        return this.products
      }},
      mounted () {
        this.$store.dispatch('fetchProducts')
      }
  }
  </script>
  <style scoped>
  .spinner{
    margin-left: 45%;
    margin-top: 10%;
  }
  .container{
    margin-top: -12%;
  }
  h1{
    border-bottom: 2px solid #e83e8c;
    font-family: 'Fredoka One';
  }
  .message{
    text-align: center;
    margin-top: 15%;
    font-size: 2rem;
  }
  .row{
    display: flex;
    justify-content: space-between;
  }
    .card{
      width: 280px;
      height: 360px;
      padding: 2rem 1rem;
      background-color: #fff;
      position: relative;
      display: flex;
      align-items: flex-end;
      box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
      transition: 0.5s ease-in-out;
    }
    .card:hover{
      transform: translateY(20px);
    }
    .card:before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to top, #e83e8c, black);
      z-index: 2;
      transition: 0.5s all;
      opacity: 0;
    }
    .card:hover:before{
      opacity: 0.5;
    }
    .card img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
    .card .info{
      position: relative;
      z-index: 3;
      color: #fff;
      opacity: 0;
      transform: translateY(30px);
      transition: 0.5s all;
    }
    .card:hover .info{
      opacity: 1;
      transform: translateY(30px);
    }
  </style>
  