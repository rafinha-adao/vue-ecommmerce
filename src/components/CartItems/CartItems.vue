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
            <h5 class="">{{product.name}}</h5>
            <p class="">R$ {{product.price}}</p>
            <p class="">{{product.description}}</p>
            <p class="">{{product.amount}} disponíveis</p>
            <div class="">
                <button class="" v-on:click="increaseCount(product)">
                    <!-- SVG -->
                </button>
                <input type="number" disabled="disabled" class="" id="qtyProduct" :value="product.count">
                <button class="" v-on:click="decreaseCount(product)">
                    <!-- SVG -->
                </button>
            </div>
            <button class="" v-on:click="removeItemCart(product)">
                <!-- SVG -->
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
