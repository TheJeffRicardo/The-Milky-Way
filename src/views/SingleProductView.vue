<template>
    <div class="container">
        <Spinner class="spinner" v-if="isLoading" />
        <div v-else>
            <div class="row" v-for="items in products" :key="items">
                <img :src="items.imgURL" alt="" style="width: 5rem;">
                <table class="table">
                    <thead class="table-dark">
                    <tr>
                        <th scope="col">prodName</th>
                        <th scope="col">price</th>
                        <th scope="col">size</th>
                        <th scope="col">category</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{{items.prodName}}</td>
                        <td>R{{items.price}}</td>
                        <td>{{items.size}}</td>
                        <td>{{items.categories}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>
<script>
 import {computed} from '@vue/runtime-core';
  import { useStore  } from 'vuex';
  import Spinner from '@/components/SpinnerComp.vue'
  export default {
    name: 'single-product',
    components:{
      Spinner
    },
    setup() {
        const store = useStore()
        store.dispatch("fetchProducts")
        const products = computed( ()=>store.state.products)
        return {
          products
        }}}
</script>
<style>
    .row{
        display: flex;
    }
</style>