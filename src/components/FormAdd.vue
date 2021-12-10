<template>
<div class="form-add">
    <h2>Adicionar Produto</h2>
    <form autocomplete="off">
        <div class="mb-3">
            <label for="nameProduct" class="form-label">Nome do Produto:</label>
            <input type="text" class="form-control" id="name" aria-describedby="nameProduct" required v-model="product.name" name="name">
        </div>
        <div class="mb-3">
            <label for="priceProduct" class="form-label">Preço:</label>
            <input type="number" class="form-control" id="price" aria-describedby="priceProduct" required v-model="product.price" name="price">
        </div>
        <div class="mb-3">
            <label for="amountProduct" class="form-label">Quantidade:</label>
            <input type="number" class="form-control" id="amount" aria-describedby="amountProduct" required v-model="product.amount" name="amount">
        </div>
        <div class="mb-3">
            <label for="imageProduct" class="form-label">Imagem:</label>
            <input type="text" class="form-control" id="img" aria-describedby="imageProduct" required v-model="product.img" name="img">
        </div>
        <div class="mb-3">
            <label for="descriptionProduct" class="form-label">Descrição:</label>
            <input type="text" class="form-control" id="description" aria-describedby="descriptionProduct" required v-model="product.description" name="description">
        </div>
        <router-link class="btn btn-danger m-2" to="../admin">Voltar</router-link>
        <button type="submit" class="btn btn-primary" v-on:click="addProduct()">Salvar</button>
    </form>

</div>
</template>

<script>
import API from '../services/API.js'

export default {
    data() {
        return {
            product: {
                img: '',
                name: '',
                price: 0,
                amount: 0,
                description: ''
            }
        };
    },
    created() {

    },
    methods: {
        addProduct: function () {
            const data = {
                img: this.product.img,
                name: this.product.name,
                price: this.product.price,
                amount: this.product.amount,
                description: this.product.description
            };

            API.post('products/add/', data)
                .catch(error => {
                    alert(error)
                })
        }
    }
};
</script>
