<template>
<div>
    <h3>{{ countProducts }} produtos</h3>
    <table class="table table-striped" style="text-align: center;">
        <thead class="table-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Preço</th>
                <th scope="col">Quantidade</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product._id">
                <th scope="row">{{product._id}}</th>
                <td>{{product.name}}</td>
                <td>R$ {{product.price}}</td>
                <td>{{product.amount}}</td>
                <td>
                    <router-link type="button" class="btn btn-warning mx-1" :to="`/admin/update/${product._id}`">
                        <i class="bi bi-pencil-square"></i>
                    </router-link>
                    <button type="button" class="btn btn-danger mx-1" v-on:click="deleteProduct(product._id)">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
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
    },
    methods: {
        deleteProduct(id) {
            this.$store.dispatch("deleteProduct", id);
        }
    }
};
</script>
