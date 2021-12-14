<template>
<nav class="navbar navbar-expand-sm bg-light navbar-dark row mb-5">
    <ul class="navbar-nav container px-5">
        <li class="nav-item m-1">
            <router-link class="btn btn-light btn-outline-primary" to="/">
                Home
            </router-link>
        </li>
        <li class="nav-item m-1">
            <router-link class="btn btn-primary position-relative" to="/cart">
                <i class="bi bi-cart3"></i>
                <span v-if="countItems != 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {{countItems}}
                    <span class="visually-hidden">unread messages</span>
                </span>
            </router-link>
        </li>
    </ul>
</nav>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    name: 'NavBar',
    computed: {
        ...mapGetters([
            'countItems'
        ])
    }
}
</script>

<style lang="sass">
    
</style>
