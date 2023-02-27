<template>
  <Navbar></Navbar>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/NavbarComp.vue"
import Footer from "@/components/FooterComp.vue"

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a:hover {
  color: pink;
}

nav a.router-link-exact-active {
  color: #e83e8c;
}
</style>
