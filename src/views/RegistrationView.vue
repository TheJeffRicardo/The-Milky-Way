<template>
 <div class="container-fluid back">
    <div class="login">
      <div class="form-box">
        <div class="form-value">
          <form action="" @submit.prevent="signUp">
            <h2>Registration</h2>
              <div class="flex">
                <div class="input">
                  <i class="bi bi-person-fill"></i>
                  <input type="text" placeholder="Firstname" v-model="payload.firstName" required>
                </div>
                <div class="input">
                  <i class="bi bi-person-fill"></i>
                  <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastName" required>
                </div>
              </div>
              <div class="flex">
                <div class="radio">
                  <h6 class="mb-2 pb-1">Gender:      <i class="bi bi-person-fill"></i></h6>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="femaleGender"
                        value="Female" checked />
                      <label class="form-check-label" for="femaleGender">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="maleGender"
                        value="Male" />
                      <label class="form-check-label" for="maleGender">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="otherGender"
                        value="Other" />
                      <label class="form-check-label" for="otherGender">Other</label>
                    </div>
                  </div>
                  <div class="input">
                    <i class="bi bi-telephone-fill"></i>
                    <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12" required>
                  </div>
              </div>
              <div class="flex">
                <div class="input">
                  <i class="bi bi-envelope-at-fill"></i>
                  <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd" required>
                </div>
                <div class="input">
                    <i class="bi bi-lock-fill"></i>
                    <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass" required>
                </div>
              </div>
              <div class="flex">
                <div class="input">
                  <i class="bi bi-link"></i>
                  <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile" required>
                </div>
                <div class="input">
                  <i class="bi bi-calendar-plus-fill"></i>
                  <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate" required>
                </div>
              </div>
              <div class="form-control-wrapper">
                <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
              </div>
              <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    <!-- <img src="https://i.postimg.cc/cLQGs6C7/cute-and-funny-ice-cream-with-mic-cartoon-illustration-vector-removebg-preview.png" class="singing" alt="singing ice cream">
    <img src="https://i.postimg.cc/wv4SWm4z/64-641338-cartoon-ice-cream-ice-cream-cute-cartoon-removebg-preview.png" class="bear" alt="cute bear on ice"> -->
</template>
  <script>
 import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default {
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
      
      const signUp = async ()=> {
        console.log(payload);
          store.dispatch("register", payload),
          store.dispatch("fetchUsers");
      }
      const userMsg = 
      computed( ()=>store.state.message )
      return {
        payload,
        userMsg,
        signUp
      }
    }
}
  </script>
  <style scoped>
  .back{
    margin-top: -22.2%; 
  }
  .radio{
    margin-top: 5%;
  }
    .login{
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url('https://i.postimg.cc/qR5bKWBx/Displaying-16-Images-For-White-And-Purple-Background-Design-removebg-preview.png')no-repeat;
 
    }
    .form-box{
      margin-top: 10%;
      position: relative;
      width: 800px;
      height: 750px;
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
    .flex{
      display: flex;
      gap: 40px;
      justify-content: space-between;
    }
    .input{
      position: relative;
      margin: 30px 0;
      width: 310px;
      border-bottom: 2px solid #2c3e50;
    }
    .input input{
      width: 17.9vw;
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
  