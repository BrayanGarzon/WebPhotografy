<script>

</script>

<template>
  <footer>
    <div class="contentFooter">
        <div class="content">
            <div class="item-1">
                <img src="/public/logo.webp" alt="">
                <p>The concept of Brume has roots in the Vedic Literature. It comes as a developed form of sensual photography without mechanistic details and boasts a strong emotional background.</p>
            </div>
            <div class="item-2">
                <p>PAGES</p>
                <a href="#">About</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
                <a href="#">Team</a>
                <a href="#">Contacts</a>
            </div>

            <div class="item-3">
                <p>CONTACTS</p>
                <div class="icons">
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-twitch"></i>
                </div>
                <div class="email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>demolink@demo.org</p>
                </div>
                <div class="phone">
                    <i class="fa-solid fa-phone"></i>
                    <p>123 0133 46123</p>
                </div>
            </div>
            <div class="item-4">
                <p>RELATED PROJECTS</p>
                <div class="galery">
                    <img src="/public/port10-400x400.jpg" alt="">
                    <img src="/public/port11-400x400.jpg" alt="">
                    <img src="/public/port12-400x400.jpg" alt="">
                    <img src="/public/port6-400x400.jpg" alt="">
                    <img src="/public/port8-400x400.jpg" alt="">
                    <img src="/public/port9-400x400.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <p>
        <a href="https://github.com/BrayanGarzon" target="_blank">DevDynasty</a> ©. All rights reserved.
    </p>
    
</footer>

</template>

<style>
   footer .contentFooter{
        width: 100%;
        height: 350px;
        background-color: var(--footer-background-color-second);
        border-style: solid;
        border-width: 1px 0px 0px 0px;
        border-color: var(--border-color);
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    footer .contentFooter .content{
        width: 100%;
        height: 100%;
        margin: var(--margin-containers-default);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    footer .contentFooter .content .item-1{
        width: 21%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    footer .contentFooter .content .item-1 img{
        width: 210px;
    }
    footer .contentFooter .content .item-1 p{
        font-size: 14px;
        font-family: var(--text-family-text-lato);
    }


    footer .contentFooter .content .item-2{
        width: 15%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }    
    footer .contentFooter .content .item-2 p{

        font-family: var(--text-family-titles-oswald);
    }
    footer .contentFooter .content .item-2 a{
        text-decoration: none;
        color: white;
        font-family: var(--text-family-text-lato);
        text-transform: uppercase;
        margin-top: 10px;
        font-size: 14px;
    }
    footer .contentFooter .content .item-2 a:hover {
        text-decoration: underline;
    }
    footer .contentFooter .content .item-3{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    footer .contentFooter .content .item-3 p{
        font-family: var(--text-family-titles-oswald);
    }
    footer .contentFooter .content .item-3 .icons{
        width: 100%;
        color: var(--color-text-gris-claro);
        display: flex;
        gap: 20px;
    }    
    footer .contentFooter .content .item-3 .icons i{
        cursor: pointer;
        transition:color 0.2s ease;
        font-size: 1.2rem;
    }    
    footer .contentFooter .content .item-3 .icons i:hover{
        color: white;
    }
    footer .contentFooter .content .item-3 .email{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        color: white;
        gap: 15px;
        margin-top: 1rem;
    }    
    footer .contentFooter .content .item-3 .email p, i{
        font-family: var(--text-family-text-lato);
        color: var(--color-text-gris-claro);
        transition: color 0.2s ease;
        cursor: pointer;
    }
    footer .contentFooter .content .item-3 .email:hover i, 
    footer .contentFooter .content .item-3 .email:hover p{
        color: white;
    } 
    footer .contentFooter .content .item-3 .phone{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        gap: 15px;
        transition: color 0.2s ease;
    }    
    footer .contentFooter .content .item-3 .phone:hover i, 
    footer .contentFooter .content .item-3 .phone:hover p{
        color: white;
    } 
    footer .contentFooter .content .item-3 .phone p, i{
        font-family: var(--text-family-text-lato);
        margin: 0;
        color: var(--color-text-gris-claro);
        transition: color 0.2s ease;
        cursor: pointer;
    }


    footer .contentFooter .content .item-4{
        width: 32%;
        height: 100%;
        display: flex;
  
        justify-content: center;
        flex-direction: column;
    }
    footer .contentFooter .content .item-4 .galery{
        width: auto;
        height: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 10px;
        justify-items: center; /* Centra los elementos horizontalmente */
        align-items: center; /* Centra los elementos verticalmente */
        
    }
    footer .contentFooter .content .item-4 .galery img{
        width: 90px;
        height: 115px;
        cursor: pointer;
    }
    footer .contentFooter .content .item-4 p{
        margin-left: 19px;
    }





    footer{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    footer p{
        color: white;
        font-family: var(--text-family-text-lato);
    }
    footer a{
        text-decoration: none;
        color: var(--color-text-gris-claro);
        cursor: pointer;
        transition: color 0.2s ease;
    }
    footer a:hover{
        color: white;
        font-family: var(--text-family-text-lato);
    }
</style>