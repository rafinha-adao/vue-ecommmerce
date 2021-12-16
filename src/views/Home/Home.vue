<template>
<div class="home">
    <NavBar/>
    <div class="container">
        <CardProduct/>
    </div>
</div>
</template>

<script>
import NavBar from '../../components/NavBar/NavBar'
import CardProduct from '../../components/CardProduct/CardProduct'

export default {
    name: 'Home',
    components: {
        NavBar,
        CardProduct
    }
}
</script>

<style src="./Home.css">
