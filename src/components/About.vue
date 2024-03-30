<script setup>
import NavBar from './Nav.vue'
import Footer from './Footer.vue'
</script>

<template>
    <NavBar/>
    <div class="navOption">
        <div class="options">
            <div class="Home">
                <router-link class="link" to="/">Home</router-link>
            </div>

            <div><span class="link">/</span></div>
            <div>
                <router-link id="about" class="link" to="/About">About</router-link>
            </div>
        </div>
    </div>
    <div class="texPage">

        <hr>
        <h1>ABOUT ME</h1>
   
    </div>

    <div class="AboutContent">
        <div class="image">
        </div>

        <div class="texto">
            <p>I’m John Taylor, one of the top 10 photography and filmmaking artists living in Florida. The way to my passion was long – filmmaking, branding, painting, and many other exciting things. However, my digital photo manipulation and compositing turned into my own style made it possible for me to work in several areas including journalism, nature photography, art nude portraits, and others.</p>
            <p>My photography collections take part in multiple festivals and contests. So, I’m sure you’ll love your photos! I love sharing my artworks and happy to say that it’s an excellent way to receive feedback and develop yourself. I’m also a leading fashion and travel photographer.</p>
        </div>

        <div class="cards">
            <div class="item-1">
                <div class="title">
                    <img src="https://ld-wp73.template-help.com/wordpress/prod_25520/v3/wp-content/uploads/2019/09/light_2.png" alt="">
                    <p>PORTRAIT PHOTOS</p>
                </div>
                <div class="text">
                    <p>Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna</p>
                </div>
            </div>


            <div class="item-1">
                <div class="title">
                    <img src="https://ld-wp73.template-help.com/wordpress/prod_25520/v3/wp-content/uploads/2019/09/flower_1.png" alt="">
                    <p>FASHION PHOTOS</p>
                </div>
                <div class="text">
                    <p>Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna</p>
                </div>
            </div>

            <div class="item-1">
                <div class="title">
                    <img src="https://ld-wp73.template-help.com/wordpress/prod_25520/v3/wp-content/uploads/2019/09/photo_1.png" alt="">
                    <p>WEDDING PHOTOS</p>
                </div>
                <div class="text">
                    <p>Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna</p>
                </div>
            </div>


            <div class="item-1">
                <div class="title">
                    <img src="https://ld-wp73.template-help.com/wordpress/prod_25520/v3/wp-content/uploads/2019/09/circle.png" alt="">
                    <p>TRAVEL PHOTOS</p>
                </div>
                <div class="text">
                    <p>Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna</p>
                </div>
            </div>
        </div>



        
    </div>
    <Footer/>
</template>

<style>   
.navOption{
    width: 100%;
    height: 50px;
    background-color: var(--background-tree-color);
}
.navOption .options{
    margin: var(--margin-containers-default);
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}
.navOption .options .link{
    text-decoration: none;
    color: var(--color-text-gris-claro);
    font-family: var(--text-family-titles-oswald);
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    transition: color 0.2s ease;
}
.navOption .options .link:hover{
    color: white;
}
.navOption .options #about{
    text-decoration: none;
    color: white;
    font-family: var(--text-family-titles-oswald);
    font-size: 14px;
    text-transform: uppercase;
}


.texPage{
    width: 450px;
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    

}
.texPage hr {
  width: 50%;
  border-color: var(--color-text-gris-claro);
  margin: 0;
}
.texPage h1 {
    color: #ffffff;
    margin-left: 2rem;
    font-family: var(--text-family-titles-oswald);
    font-size: 36px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: -0.3px;
}





.AboutContent{
    margin: var(--margin-containers-default);
    height: auto;
    margin-bottom: 1rem;
}
.AboutContent .image{
   width: 100%;
   height: 750px;
   background-image: url('../../public/stephen-caserta-265323-unsplash.jpg');
   background-position: 0px -30px;
   background-repeat: no-repeat;
   background-size: cover;
   margin-bottom: 4rem;
}
.AboutContent .texto{
    color: var(--color-text-gris-claro);
    font-family: var(--text-family-text-lato);

}

.AboutContent .cards{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
}
.AboutContent .cards .item-1{
    width: 20%;
}
.AboutContent .cards .item-1 .title{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 10px;
}

.AboutContent .cards .item-1 .title p{
    color: white;
    margin: 0;
    font-family: var(--text-family-titles-oswald);
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 300;
}


.AboutContent .cards .item-1 .text{
    width: 100%;
}
.AboutContent .cards .item-1 .text p{
    color: var(--color-text-gris-claro);
    font-family: var(--text-family-text-lato);
    font-size: 16px;
    font-weight: 300;
}
</style>