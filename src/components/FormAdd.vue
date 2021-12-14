<template>
<div class="container">
    <h2 class="my-4">Adicionar Produto</h2>
    <form class="form-add" autocomplete="off">
        <div class="mb-3">
            <label for="nameProduct" class="form-label">Nome do Produto:</label>
            <input type="text" required class="form-control" id="name" aria-describedby="nameProduct" name="name">
        </div>
        <div class="mb-3">
            <label for="priceProduct" class="form-label">Preço:</label>
            <input type="number" required class="form-control" id="price" aria-describedby="priceProduct" name="price" value='0'>
        </div>
        <div class="mb-3">
            <label for="amountProduct" class="form-label">Quantidade:</label>
            <input type="number" required class="form-control" id="amount" aria-describedby="amountProduct" name="amount" value='0'>
        </div>
        <div class="mb-3">
            <label for="imageProduct" class="form-label">Imagem:</label>
            <input type="text" required class="form-control" id="img" aria-describedby="imageProduct" name="img">
        </div>
        <div class="mb-3">
            <label for="descriptionProduct" class="form-label">Descrição:</label>
            <textarea type="text" required class="form-control" id="description" aria-describedby="descriptionProduct" name="description" rows="4" maxlength="240"></textarea>
        </div>
        <router-link class="btn btn-danger my-2" to="../admin">Voltar</router-link>
        <button type="submit" class="btn btn-primary ms-1" v-on:click="addProduct()">Salvar</button>
    </form>
</div>
</template>

<script>
import API from '../services/API.js'

export default {
    methods: {
        addProduct: function () {
            const data = {
                img: document.getElementById('img').value,
                name: document.getElementById('name').value,
                price: document.getElementById('price').value,
                amount: document.getElementById('amount').value,
                description: document.getElementById('description').value
            };

            API.post('products/add/', data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
};
</script>
