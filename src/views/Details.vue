<template>
<div class="details row justify-content-center">
    <NavBar/>
    <h2>This is Details View</h2>
    <div :key="product._id" class="card justify-content-center align-items-center" style="width: 18rem; height: 24rem; margin: 1rem">
        <img :src="product.img" class="card-img-top" :alt="product.name" style="width: 10rem; height: 10rem;">
        <div class="card-body" style="height: 14rem; text-align: center;">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">R$ {{product.price}}</p>
            <p class="card-text">{{product.description}}</p>
            <p class="card-text">{{product.amount}} disponíveis</p>
            <button class="btn btn-primary" v-on:click="addItemToCart(product)">Comprar</button>
        </div>
    </div>
</div>
</template>

<script>
import API from '../services/API.js'
import NavBar from '../components/NavBar'
export default {
    name: 'Details',
    components: {
        NavBar
    },
    data() {
        return {
            product: {}
        };
    },
    mounted() {
        API.get("/products/" + this.$route.params.id)
            .then(response => {
                this.product = response.data;
            })
            .catch(error => {
                alert(error)
            })
    },
    methods: {
        addItemToCart(product) {
            this.$store.dispatch('addItem', product);
        }
    }
}
</script>
