<template>
<div class="admin container">
    <router-link class="btn btn-light btn-outline-secondary my-3" to="/">
        Home
    </router-link>
    <div class="row align-items-center justify-content-end m-2">
        <div class="col-1">
            <router-link class="btn btn-success" to="/admin/add">Adicionar</router-link>
        </div>
    </div>
    <Table />
</div>
</template>

<script>
import Table from '../components/Table'

export default {
    name: 'Admin',
    components: {
        Table
    }
}
</script>
