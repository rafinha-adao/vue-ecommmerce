<template>
<div>
    <h3>{{ quantityProducts }} produtos</h3>
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
                    <!--
                            <button type="button" class="btn btn-danger m-1" data-bs-toggle="modal" data-bs-target="#confirmModal">
                                <i class="bi bi-trash"></i>
                            </button>
                            -->
                </td>

                <!-- Modal Confirm Delete 
                    <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModal" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="confirmModal">
                                        Deseja mesmo excluir esse produto?
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" class="btn btn-primary" v-on:click="deleteProduct(product._id)" data-bs-dismiss="modal">
                                        Sim
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>-->
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import API from '../services/API.js'
export default {
    data() {
        return {
            products: [],
            quantityProducts: 0,
            timer: ""
        };
    },
    created() {
        this.fetchData();
        this.timer = setInterval(this.fetchData, 2800);
    },
    mounted() {
        API.get("/products")
            .then(response => {
                this.quantityProducts = this.products.length
                this.products = response.data
            })
            .catch(error => {
                alert(error)
            })
    },
    methods: {
        async fetchData() {
            API.get("/products")
                .then(response => {
                    this.quantityProducts = this.products.length
                    this.products = response.data
                })
                .catch(error => {
                    alert(error)
                })
        },
        deleteProduct: function (id) {
            API.delete('/products/delete/' + id);
        },
        cancelAutoUpdate() {
            clearInterval(this.timer);
        }
    },
    beforeDestroy() {
        this.cancelAutoUpdate();
    }
};
</script>
