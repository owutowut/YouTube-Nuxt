<script setup>
const props = defineProps({
  contentData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="content-wrapper">
    <div class="content-item" v-for="item in contentData" :key="item.id">
      <img class="thumbnail" :src="item.url" :alt="item.title" />
      <div class="content-inner">
        <svg width="3rem" height="3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path fill="none"
            d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0M20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5" />
          <path fill="currentColor"
            d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.9 13.9 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3q.418.457.87.87q.14.124.28.242q.48.415.99.782c.044.03.084.069.128.1v-.012a13.9 13.9 0 0 0 16 0v.012c.044-.031.083-.07.128-.1q.51-.368.99-.782q.14-.119.28-.242q.451-.413.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0" />
        </svg>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  color: white;

  .content-item {
    font-size: 14px;
    height: fit-content;
  }

  .thumbnail {
    border-radius: 20px;
    background-color: rgb(32, 58, 97);
    height: 300px;
    width: 100%;
    margin-bottom: 0.5remrem;
  }

  .content-inner {
    display: flex;
    justify-content: center;
    align-items: center;

    >*+* {
      margin-left: 10px;
    }
  }
}
</style>
