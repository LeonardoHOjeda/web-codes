<template>
  <section>
    <h1>Buscar pokemon: {{pokemonId}}</h1>
    <form @submit.prevent="onSubmit" action="">
      <input type="number" placeholder="Numero del pokemon" v-model="pokemonId" ref="txtSearchId">
    </form>
    <br>
    <span>Presione Enter para buscar</span>
  </section>
</template>

<script>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup(){
    const router = useRouter()

    const pokemonId = ref(1)
    const txtSearchId = ref()
    return {
      pokemonId,
      txtSearchId,
      onSubmit: () => {
        console.log('Pokemon a buscar ', pokemonId.value);
        router.push({name: 'pokemon-id', params: {
          id: pokemonId.value
        }})
      }
    }
  }
}
</script>

<style>

</style>