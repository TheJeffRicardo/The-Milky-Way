<template>
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add User
      </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Register Form</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="container-fluid">
                      <div class="row">
                          <h2 class="display-2">Registration</h2>
                      </div>
                      <div class="row">
                          <div class="col">
                            <form class="form" @submit.prevent="signUp">
                                         
                              <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                <span class="inline">
                                  <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstName"/>   
                                  </span>
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastName">
                                    </span>          
                                </div>
                                
                                <div class="d-flex ">
                                  <div class="form-check form-check-inline w-100 pb-3 m-auto">
                                    <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="femaleGender"
                                      value="Female" checked />
                                    <label class="form-check-label" for="femaleGender">Female</label>
                                  </div>
                                  <div class="form-check form-check-inline w-100 pb-3 m-auto">
                                    <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="maleGender"
                                      value="Male" />
                                    <label class="form-check-label" for="maleGender">Male</label>
                                  </div>
                                  <div class="form-check form-check-inline w-100 pb-3 m-auto">
                                    <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="otherGender"
                                      value="Other" />
                                    <label class="form-check-label" for="otherGender">Other</label>
                                  </div>
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12">
                                    </span>        
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">
                                    </span>        
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass">
                                    </span>        
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile">
                                    </span>        
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">
                                    </span >        
                                </div>
                                <div class="form-control-wrapper">
                                  <label class="form-control bg-gradient" v-show="userFetch">{{userFetch}}</label>
                                </div>
                            </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="form-control-wrapper">
                <label class="form-control bg-gradient" v-show="userFetch">{{userFetch}}</label>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success">Add User</button>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';

export default {
    name: 'add-user',
    setup() {
        const payload = {
            firstName: '',
            lastName: '',
            gender: '',
            cellphoneNumber: '',
            emailAdd: '',
            userPass: '',
            userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
            joinDate: ''
          }
        const store = useStore()
        const signUp = ()=> {
            store.dispatch("register", payload),
            store.dispatch("fetchUsers")
        }
        const userFetch = computed( ()=>store.state.message)
        return {
          userFetch,
          payload,
          signUp
        }
      }
}
</script>
<style>
    
</style>