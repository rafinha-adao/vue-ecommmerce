<template>
<div class="cards-container">
    <div class="card" v-for="product in products" :key="product._id">
        <div class="img-container">
            <img :src="product.img" class="" :alt="product.name">
        </div>
        <div class="card-body">
            <h4 class="">{{product.name}}</h4>
            <p class="">R$ {{product.price}}</p>
            <router-link class="button-buy" :to="`/details/${product._id}`">Comprar</router-link>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'products',
            'countProducts'
        ])
    },
    mounted() {
        this.$store.dispatch("getProducts");
    }
};
</script>

<style src="./CardProduct.css">
