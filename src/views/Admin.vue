<template>
<div class="admin">
    <nav class="navbar navbar-expand-sm bg-light navbar-dark row mb-5">
        <ul class="navbar-nav">
            <li class="nav-item m-1">
                <router-link class="btn btn-light btn-outline-secondary" to="/">
                    Home
                </router-link>
            </li>
        </ul>
    </nav>
    <h2>This is Admin View</h2>
    <div class="row align-items-center justify-content-end m-2">
        <div class="col-1">
            <router-link class="btn btn-success" to="admin/add">Adicionar</router-link>
        </div>
    </div>
    <Table />
</div>
</template>

<script>
import Table from '../components/Table.vue'

export default {
    name: 'Admin',
    components: {
        Table
    }
}
</script>
