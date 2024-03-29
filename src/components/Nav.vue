<script setup>

</script>

<template>
<nav>
    <!-- Contenido de tu barra de navegación -->
    <div class="logo">
        <router-link to="/">
            <img src="/public/logo.webp" alt="">
        </router-link>
    </div>
    <ul>
        <li><router-link to="/About">About</router-link></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contacts</a></li>
    </ul>
</nav>
</template>

<style>
    /* Aquí van tus estilos específicos para el componente de navegación */
    .logo{
        cursor: pointer;
    }
    nav {
        
        height: 100px;
        background-image: url(/public/bg.jpg);
        color: white;
        padding: 1rem 20rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav ul {
        
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    nav ul li {
        display: inline;
        margin-right: 20px;
    }
    nav ul li a {
        color: white;
        text-decoration: none;
        font-family: var(--text-family-text-lato);
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
    }
    nav ul li a:hover {
        text-decoration: underline;
    }
</style>
