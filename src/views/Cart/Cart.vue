<template>
<div>
    <NavBar />
    <div class="container">
        <CartItems />
        <a class="" v-if="allItems != 0" v-on:click="clearCart()">
            Limpar Carrinho
        </a>
        <a class="" v-if="allItems != 0" target="_blank" :href="`https://wa.me/5519993551857?text=${orderList}`">
            Fazer Pedido
        </a>
    </div>
</div>
</template>

<script>
import NavBar from '../../components/NavBar/NavBar'
import CartItems from '../../components/CartItems/CartItems'
import {
    mapGetters
} from 'vuex'

export default {
    name: "Cart",
    computed: {
        ...mapGetters([
            'allItems',
            'orderList'
        ]),
    },
    components: {
        NavBar,
        CartItems
    },
    methods: {
        clearCart() {
            this.$store.dispatch('clearCart');
        }
    },
}
</script>
