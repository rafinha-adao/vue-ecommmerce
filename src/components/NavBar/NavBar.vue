<template>
<nav class="">
    <div class="container-nav">
        <div class="logo">
            <router-link class="" to="/">
                Home
            </router-link>
        </div>
        <div class="links">
            <div class="dropdown">
                <a>Categorias</a>
                <div class="dropdown-content">
                    <li>
                        <router-link class="" to="/">Categoria 1</router-link>
                    </li>
                    <li>
                        <router-link class="" to="/">Categoria 2</router-link>
                    </li>
                    <li>
                        <router-link class="" to="/">Categoria 3</router-link>
                    </li>
                </div>
            </div>
            <ul class="">
                <li class="">
                    <router-link class="" to="/">Contato</router-link>
                </li>
                <li class="">
                    <router-link class="" to="/">Sobre a Loja</router-link>
                </li>
            </ul>
        </div>
        <div class="cart">
            <router-link to="/cart" class=" cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span v-if="countItems != 0" class="number-docker">
                    {{countItems}}
                </span>
            </router-link>
        </div>
    </div>
</nav>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    name: 'NavBar',
    computed: {
        ...mapGetters([
            'countItems'
        ])
    }
}
</script>

<style src="./NavBar.css">
