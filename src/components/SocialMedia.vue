<script setup>

</script>

<template>
<div class="containersocial">
    <div class="media">
        <div class="contentLeft">
            <div class="email">
                <i class="fa-solid fa-envelope"></i>
                <p>demolink@demo.org</p>
            </div>
            <div class="phone">
                <i class="fa-solid fa-phone"></i>
                <p>123 0133 46123</p>
            </div>
            
        </div>

        <div class="contentRight">
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-twitch"></i>
        </div>
    </div>
</div>
</template>

<style scoped>
    .containersocial{
        width: 100%;
        height: auto;
        margin-top: 1rem;
    }
    .containersocial .media{
        margin: var(--margin-containers-default);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .containersocial .media .contentLeft{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .containersocial .media .contentLeft .email,
    .containersocial .media .contentLeft .phone {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: var(--color-text-gris-claro);
        cursor: pointer;
        transition: color 0.2s ease;
    }

    .containersocial .media .contentLeft .email:hover i,
    .containersocial .media .contentLeft .phone:hover i {
        color: white;
    }
    .containersocial .media .contentLeft .phone i {
        margin-left: 15px;
    }
    .containersocial .media .contentLeft .email:hover p,
    .containersocial .media .contentLeft .phone:hover p {
        color: white;
        transition: color 0.2s ease;
    }


    .containersocial .media .contentRight{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }
    .containersocial .media .contentRight i{
        font-size: 1.4rem;
        color: var(--color-text-gris-claro);
        transition:color 0.2s ease;
        cursor: pointer;
    }
    .containersocial .media .contentRight i:hover{
        color: white;
    }
</style>