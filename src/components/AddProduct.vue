<template>
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#productModal">
        Add Product
      </button>
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="productModalLabel">Product</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="container-fluid">
                      <div class="row">
                          <h2 class="display-2">Add Product</h2>
                      </div>
                      <div class="row">
                          <div class="col">
                            <form class="form" @submit.prevent="signUpNow">
                                         
                              <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                <span class="inline">
                                  <input class="form-control" type="text" placeholder="ProductName" required v-model="payload.prodName"/>   
                                  </span>
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="text" class="form-control" placeholder="Price" v-model="payload.price">
                                    </span>          
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="text" class="form-control" placeholder="Size" v-model="payload.size">
                                    </span>        
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="text" class="form-control" placeholder="Product URL" v-model="payload.imgURL">
                                    </span>        
                                </div>
                            </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success">Add Product</button>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';

export default {
    name: 'add-product',
    setup() {
        const payload = {
            prodName: '',
            price: '',
            size: '',
            imgURL: ''
          }
        const store = useStore()
        const signUpNow = ()=> {
            store.dispatch("register", payload)
            store.dispatch("fetchUsers");
        }
        const userProduct = computed( ()=>store.state.products)
        return {
          userProduct,
          payload,
          signUpNow
        }
      }
}
</script>