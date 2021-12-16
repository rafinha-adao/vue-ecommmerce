<template>
<div>
    <h4 v-if="countItems > 0">
        {{
            countItems == 1 ?  countItems + " produto no carrinho"
            : countItems + " produtos no carrinho"
        }}
    </h4>
    <h4 v-else>Seu carrinho está vazio :(</h4>
    <h5 v-if="countItems > 0">Valor total: R$ {{totalPrice}}</h5>
    <div v-for="product in allItems" :key="product.name" class="card">
        <img :src="product.img" class="card-img-top" :alt="product.name">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">R$ {{product.price}}</p>
            <p class="card-text">{{product.description}}</p>
            <p class="card-text">{{product.amount}} disponíveis</p>
            <div class="">
                <button class="btn btn-primary" v-on:click="increaseCount(product)"><i class="bi bi-plus"></i></button>
                <input type="number" disabled="disabled" class="form-control" id="qtyProduct" aria-describedby="qtyProduct" :value="product.count">
                <button class="btn btn-primary" v-on:click="decreaseCount(product)"><i class="bi bi-dash"></i></button>
            </div>
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

export default {
    name: "CartItems",
    data() {
        return {
            products: []
        }
    },
    computed: {
        ...mapGetters([
            'allItems',
            'countItems',
            'totalPrice'
        ])
    },
    methods: {
        removeItemCart(product) {
            this.$store.dispatch('removeItem', product);
        },
        increaseCount(product) {
            this.$store.dispatch("increaseCount", product);
        },
        decreaseCount(product) {
            this.$store.dispatch("decreaseCount", product);
        },
    }
}
</script>
