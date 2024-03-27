<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './views/NavBarView.vue'
import SliderImages from './views/SliderImagesView.vue'
import SocialMediaView from './views/SocialMediaView.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  
    <NavBar/>
    <SliderImages/>
    <SocialMediaView/>
    <FooterView/>
    <!--
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    -->
 

  
</template>

<style scoped>

</style>
