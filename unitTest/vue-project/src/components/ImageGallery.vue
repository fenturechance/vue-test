<template>
  <img v-for="(image, index) in images" :key="index" :src="image" />
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>
