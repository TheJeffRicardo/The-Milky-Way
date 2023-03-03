<template>
  
    <div class="structure">
      <div class="btnh2"><h2>User's Table</h2><AddUser></AddUser></div>
      <div class="table">
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">gender</th>
              <th scope="col">cellphoneNumber</th>
              <th scope="col">emailAdd</th>
              <th scope="col">userPass</th>
              <th scope="col">userRole</th>
              <th scope="col">userProfile</th>
              <th scope="col">joinDate</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <Spinner class="spinner" v-if="isLoading" />
          <div v-else></div>
          <tbody>
            <tr v-for="items in userFetch" :key="items">
              <td>{{items.firstName}}</td>
              <td>{{items.lastName}}</td>
              <td>{{items.gender}}</td>
              <td>{{items.cellphoneNumber}}</td>
              <td>{{items.emailAdd}}</td>
              <td>***{{items.userPass}}***</td>
              <td>{{items.userRole}}</td>
              <td>{{items.userProfile}}</td>
              <td>{{items.joinDate}}</td>
              <td><button type="button" class="btn btn-outline-danger" @click.prevent="deleteUser(items.userID)">Delete</button>
              </td>
              <td><button type="button" class="btn btn-outline-warning" @click.prevent="updateUser(items.userID)">Update</button>
              </td>
             </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="structures">
      <div class="btnh2"><h2>Product's Table</h2><AddProduct></AddProduct></div>
      <div class="table">
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">prodName</th>
              <th scope="col">price</th>
              <th scope="col">size</th>
              <th scope="col">imgURL</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            <Spinner class="spinner" v-if="isLoading" />
            <div v-else></div>
            <tr v-for="items in productFetch" :key="items">
              <td>{{items.prodName}}</td>
              <td>R{{items.price}}</td>
              <td>{{items.size}}</td>
              <td>{{items.imgURL}}</td>
              <td><button type="button" class="btn btn-outline-danger" @click.prevent="deleteProduct(items.userID)">Delete</button>
              </td>
              <td><button type="button" class="btn btn-outline-warning" @click.prevent="updateProduct(items.userID)">Update</button>
              </td>
             </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
  import {computed} from '@vue/runtime-core';
  import { useStore  } from 'vuex';
  import AddUser from '@/components/AddUser.vue'
  import AddProduct from '@/components/AddProduct.vue'
  import Spinner from '@/components/SpinnerComp.vue'
  export default {
    components: {
      AddUser,
      AddProduct,
      Spinner
    },
      setup() {
        const store = useStore()
        store.dispatch("fetchUsers")
        store.dispatch("fetchProducts")
        const deleteUser = (id)=> {
          alert('You have deleted successfully')
          store.dispatch('deleteUser', id)
        }
        const deleteProduct = (id)=> {
          alert('You have deleted successfully')
          store.dispatch('deleteProduct', id)
        }
        const userFetch = computed( ()=>store.state.users)
        const productFetch = computed( ()=>store.state.products)
        return {
          userFetch,
          productFetch,
          deleteUser,
          deleteProduct,
        }
      },
      data () {
        return {
          isLoading: true,
        }
      },
      created(){
        setTimeout(()=>{
          this.isLoading = false
        },1000)
      }
  }
  </script>
  <style scoped>
  .spinner{
    margin-left: 235%;
  }
  .structure{
    margin-top: -15%;
  }
  .structures{
    margin-top: 5%;
  }
  .btnh2{
    display: flex;
    justify-content: space-between;
  }
  </style>