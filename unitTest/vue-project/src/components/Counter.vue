<template>
  <p>{{ count }}</p>
  <button @click="decrement" id="minus">-</button>
  <button @click="increment" id="add">+</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
}
</script>
