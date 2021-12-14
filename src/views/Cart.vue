<template>
<div>
    <NavBar />
    <div class="container">
        <h2>This is Cart View</h2>
        <CartItems />
        <a class="btn btn-success" v-if="allItems != 0" 
        :href="`https://wa.me/5519993551857?text=${orderList}`">
            Fazer Pedido
        </a>
    </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar'
import CartItems from '../components/CartItems'
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
    }
}
</script>
