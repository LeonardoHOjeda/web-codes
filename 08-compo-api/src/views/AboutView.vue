<template>
  <section class="about">
    <h1>{{title}}</h1>
    <button @click="changeTitle">Cambiar</button>
  </section>
</template>

<script>
import { ref } from 'vue'

  export default{
    setup(){
      const title = ref('About')

      return {
        title,
        changeTitle: () => {
          title.value = 'New About'
        }
      }
    }
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
