<template>
<div class="cards container">
    <div v-for="product in products" :key="product._id" class="card">
        <img :src="product.img" class="card-img-top" :alt="product.name">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">R$ {{product.price}}</p>
            <p class="card-text">{{product.amount}} disponíveis</p>
            <router-link :to="`/details/${product._id}`" class="btn btn-primary">Comprar</router-link>
        </div>
    </div>
</div>
</template>

<script>
import API from '../services/API.js'
export default {
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        API.get("/products")
            .then(response => {
                this.products = response.data;
            })
            .catch(error => {
                console.log(error)
            })
    }
};
</script>
