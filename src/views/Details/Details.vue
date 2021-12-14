<template>
<div class="details">
    <NavBar />
    <div class="container">
        <h2>This is Details View</h2>
        <div :key="cartModel._id" class="card">
            <img :src="cartModel.img" class="card-img-top" :alt="cartModel.name">
            <div class="card-body">
                <h5 class="card-title">{{cartModel.name}}</h5>
                <p class="card-text">R$ {{cartModel.price}}</p>
                <p class="card-text">{{cartModel.description}}</p>
                <p class="card-text">{{cartModel.amount}} disponíveis</p>
                <div class="">
                    <button class="btn btn-primary" v-on:click="increaseQty(cartModel.amount)"><i class="bi bi-plus"></i></button>
                    <input disabled="disabled" type="number" class="form-control" id="qtyProduct" aria-describedby="qtyProduct" :value="cartModel.count">
                    <button class="btn btn-primary" v-on:click="decreaseQty()"><i class="bi bi-dash"></i></button>
                </div>
                <button class="btn btn-primary" v-on:click="addItemToCart(cartModel, id = cartModel.id)">Adicionar ao Carrinho</button>
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
