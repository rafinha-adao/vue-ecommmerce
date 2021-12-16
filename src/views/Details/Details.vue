<template>
<div class="details">
    <NavBar />
    <div class="container">
        <div class="card" :key="cartModel.id">
            <div class="img-container">
                <img :src="cartModel.img" class="" :alt="cartModel.name">
            </div>
            <div class="card-body">
                <h4 class="">{{cartModel.name}}</h4>
                <p class="">R$ {{cartModel.price}}</p>
                <p class="">{{cartModel.description}}</p>
                <p class="">{{cartModel.amount}} disponíveis</p>
                <div class="">
                    <button class="" v-on:click="increaseQty(cartModel.amount)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                    <input disabled="disabled" type="number" class="" id="qtyProduct" :value="cartModel.count">
                    <button class="" v-on:click="decreaseQty()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>
                </div>
                <a class="button-add-cart" v-on:click="addItemToCart(cartModel, id = cartModel.id)">Adicionar ao Carrinho</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import API from '../../services/API.js'
import NavBar from '../../components/NavBar/NavBar'
import {
    mapGetters
} from 'vuex'

export default {
    name: 'Details',
    components: {
        NavBar
    },
    data() {
        return {
            cartModel: {
                id: 0,
                img: "",
                name: "",
                description: "",
                price: 0,
                amount: 0,
                count: 1
            }
        };
    },
    mounted() {
        API.get("/products/" + this.$route.params.id)
            .then(response => {
                this.cartModel.id = response.data._id
                this.cartModel.img = response.data.img
                this.cartModel.name = response.data.name
                this.cartModel.description = response.data.description
                this.cartModel.price = response.data.price
                this.cartModel.amount = response.data.amount
            })
            .catch(error => {
                alert(error)
            })
    },
    computed: {
        ...mapGetters([
            'allItems'
        ])
    },
    methods: {
        addItemToCart(cartModel, id) {
            this.$store.dispatch('addItem', cartModel, id);
        },
        increaseQty(max) {
            if (this.cartModel.count < max) {
                this.cartModel.count++
            }
        },
        decreaseQty() {
            if (this.cartModel.count > 1) {
                this.cartModel.count--
            }
        }
    }
}
</script>

<style src="./Details.css">
