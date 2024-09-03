<script setup>
const props = defineProps({
  tagData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="tag-wrapper">
    <p v-for="item in tagData" :key="item.id"
      :style="{ backgroundColor: item.id === 0 ? 'white' : 'rgb(40, 41, 41)', color: item.id === 0 ? 'black' : 'white' }">
      {{ item.message }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
p {
  padding: 8px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
}

.tag-wrapper {
  display: flex;

  >*+* {
    margin-left: 0.6rem;
  }
}
</style>