<script setup>

</script>

<template>
<div class="container">
    <div class="slide">
        <ul>
            <li><img src="/public/slider_2.webp" alt="" class="slide-img"></li>
            <li><img src="/public/slider_3.webp" alt="" class="slide-img"></li>
            <li><img src="/public/slider_2.webp" alt="" class="slide-img"></li>
            <li><img src="/public/slider_3.webp" alt="" class="slide-img"></li>
            <li><img src="/public/slider_2.webp" alt="" class="slide-img"></li>
        </ul>
    </div>
</div>
</template>

<style scoped>

.container {
        width: 100%;
        height: auto;
        display: grid;
        place-content: center;
    }
    .slide {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .slide ul {
        margin: 0;
        padding: 0;
        display: flex;
        padding: 0;
        width: 500%;
        animation: slide 20s infinite linear;
    }
    .slide ul li{
        width: 100%;
    }
    .slide-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @keyframes slide {
        0% {margin-left: 0;}
        20% {margin-left: 0;}
        25% {margin-left: -100%;}
        45% {margin-left: -100%;}
        50% {margin-left: -200%;}
        70% {margin-left: -200%;}
        75% {margin-left: -300%;}
        95% {margin-left: -300%;}
        100% {margin-left: -400%;}
    }
</style>
