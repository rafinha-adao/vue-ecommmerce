<template>
<div class="home">
    <NavBar/>
    <div class="container">
        <h2>This is Home View</h2>
        <CardProduct/>
    </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar'
import CardProduct from '../components/CardProduct'

export default {
    name: 'Home',
    components: {
        NavBar,
        CardProduct
    }
}
</script>
