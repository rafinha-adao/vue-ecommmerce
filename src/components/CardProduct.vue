<template>
<div class="cards row justify-content-center">
    <div v-for="product in products" :key="product._id" class="card justify-content-center align-items-center" style="width: 18rem; height: 24rem; margin: 1rem">
        <img :src="product.img" class="card-img-top" :alt="product.name" style="width: 10rem; height: 10rem;">
        <div class="card-body" style="height: 14rem; text-align: center;">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">R$ {{product.price}}</p>
            <p class="card-text">{{product.description}}</p>
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
                alert(error)
            })
    }
};
</script>
