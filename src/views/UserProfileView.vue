<template>
    <div class="color">
      <img class="pics" src='https://i.postimg.cc/3rZ0H0D8/profile-Image.png' alt="picofyou">
      <h3>JeffRicardo</h3>
      <p>Web Developer and WordSmith</p>
      <div class="white">
        <p>Learn more about me</p>
      </div>
    </div>
  </template>
  <script>
  import {computed} from '@vue/runtime-core';
  import { useStore  } from 'vuex';
  export default {
    setup() {
        const store = useStore()
        store.dispatch("fetchUsers")
        const userFetch = computed( ()=>store.state.users)
        return {
          userFetch
        }
      }
  }
  </script>
  <style>
    .color{
      margin-top: -13%;
      background-color: #e83e8c;
      text-align: center;
      padding: 40px 90px;
      color: #fff;
      position: relative;
      border-radius: 20px;
      width: 40%;
      margin-left: 30%;
    }
    .pics{
      width: 150px;
      border-radius: 50%;
      background-color: #fff;
      padding: 6px;
    }
    .white{
      background-color: #fff;
      border: 2px solid #999;
      color: #999;
      padding: 60px 0;
      margin-right: -90px;
      margin-left: -90px;
      margin-bottom: -40px;
      border-radius: 20px;
    }
  </style>
  