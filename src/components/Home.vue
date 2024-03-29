<script setup>
    import SliderImages from './sliderImages.vue';
    import NavBar from './Nav.vue'
    import Footer from './Footer.vue'
    import SocialMedia from './SocialMedia.vue';
</script>

<template>
    <div class="home">
        <NavBar/>
        <SliderImages/>
        <SocialMedia/>
        <h1>HELLO FROM HOME</h1>



        <Footer/>
    </div>
</template>

<style> 

   .home h1{
    color: white;
   }


</style>