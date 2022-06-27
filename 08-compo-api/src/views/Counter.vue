<template>
  <section>
    <h1>Counter View</h1>
    <h2>{{counter}}</h2>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </section>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  setup(){
    const{counter, decrease, increase} = useCounter()
    return{
      counter,
      decrease,
      increase
    }
  }
}
</script>

<style>

</style>