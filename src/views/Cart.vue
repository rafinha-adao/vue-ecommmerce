<template>
<div>
    <NavBar />
    <h2>This is Cart View</h2>
    <h4>{{countItems}} itens no carrinho</h4>
    <div v-for="product in allItems" :key="product.name" class="card justify-content-center align-items-center" style="width: 18rem; height: 24rem; margin: 1rem">
        <img :src="product.img" class="card-img-top" :alt="product.name" style="width: 10rem; height: 10rem;">
        <div class="card-body" style="height: 14rem; text-align: center;">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">R$ {{product.price}}</p>
            <p class="card-text">{{product.description}}</p>
            <p class="card-text">{{product.amount}} disponíveis</p>
            <button class="btn btn-danger" v-on:click="removeItemCart(product)">
              <i class="bi bi-trash"></i>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import NavBar from '../components/NavBar'

export default {
    name: "Cart",
    components: {
        NavBar
    },
    computed: {
        ...mapGetters([
            'allItems',
            'countItems'
        ])
    },
    methods: {
        removeItemCart(id) {
            this.$store.dispatch('removeItem', id);
            console.log(this.$store.state.cart)
        }
    }
}
</script>
