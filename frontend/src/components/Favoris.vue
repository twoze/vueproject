<template>
  <div>
    <h2>Favoris</h2>
    <div class="container">
      <div class="row">
        <div
          v-for="film in favorites"
          :key="film.imdbID"
        >
          <ImageCard :film="film" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ImageCard from "./ImageCard"

export default {
    name: 'Favoris',
    components:{
        ImageCard
    },
    data() {
        return {
            favorites: this.$store.getters.favorites ,
        }
    },
    mounted () {
        console.log(this.$store.getters.favorites)
    }
}
</script>

<style>
</style>