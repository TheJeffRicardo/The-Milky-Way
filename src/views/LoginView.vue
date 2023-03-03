<template>
  <div class="container-fluid back">
    <div class="login">
      <div class="form-box">
        <div class="form-value">
          <form action="" @click.prevent="logSubmit">
            <h2>Login</h2>
              <div class="input">
                <i class="bi bi-envelope-at-fill"></i>
                <input type="email" v-model="email" placeholder="Email" required>
              </div>
              <div class="input">
                <i class="bi bi-lock-fill"></i>
                <input type="password" v-model="password" placeholder="Password" required>
              </div>
              <a href="">
                <div class="forgot">
                  <p>Forgot Password?</p>
                </div>
              </a>
              <button @click.prevent="login">Log In</button><br><br><br>
              <a href="/registration">
                <div class="register">
                  <p>Wanna Sign Up?</p>
                </div>
              </a>
          </form>
        </div>
      </div>
    </div>
  </div>
    <img src="https://i.postimg.cc/cLQGs6C7/cute-and-funny-ice-cream-with-mic-cartoon-illustration-vector-removebg-preview.png" class="singing" alt="singing ice cream">
    <img src="https://i.postimg.cc/wv4SWm4z/64-641338-cartoon-ice-cream-ice-cream-cute-cartoon-removebg-preview.png" class="bear" alt="cute bear on ice">
</template>
  <script>
  import {computed} from '@vue/runtime-core';
  import { useStore  } from 'vuex';
  export default {
    setup() {
        const store = useStore()
        store.dispatch("fetchUsers")
        const login = ()=> {
          store.dispatch('login')
        }
        const userFetch = computed( ()=>store.state.users)
        return {
          userFetch,
          login
  
        }
      },
   data(){
    return {
      email: '',
      password: ''
    }
   },
   methods: {
   
   }
  }
  </script>
  <style scoped>
  .back{
    margin-top: -19.2%;
    background-position: 100%;
  }
    .login{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .form-box{
      margin-top: 10%;
      position: relative;
      width: 400px;
      height: 450px;
      background: transparent;
      border: 2px solid #2c3e50;
      border-radius: 20px;
      backdrop-filter: blur;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h2{
      font-size: 2rem;
      color: #2c3e50;
      text-align: center;
    }
    .input{
      position: relative;
      margin: 30px 0;
      width: 310px;
      border-bottom: 2px solid #2c3e50;
    }
    .input input{
      width: 59.5vw;
      height: 50px;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
      padding: 0 35px 0 5px;
      color: #2c3e50;
    }
    .input i{
      position: absolute;
      right: 8px;
      color: #2c3e50;
      font-size: 1.2rem;
      top: 20px;
    }
    .register{
      margin: -15px 0 15px;
      font-size: .9rem;
      color: #2c3e50;
      display: flex;
      justify-content: center;
    }
    .forgot{
      margin: -15px 0 15px;
      font-size: .9rem;
      color: #2c3e50;
      display: flex;
      justify-content: center;
    }
    button{
      width: 100%;
      height: 40px;
      border-radius: 40px;
      background: #2c3e50;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
    }
    img{
      position: absolute;
      width: 20%;
      margin-top: -28%;
    }
    .bear{
      margin-left: 73%;
      transform: rotate(-20deg);
    }
    .singing{
      margin-left: 5%;
      transform: rotate(20deg);
    }
  </style>
  