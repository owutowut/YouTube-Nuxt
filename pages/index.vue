<script setup>
import { tag } from '@/constants/data';

const tagData = ref(tag);
const contentData = ref([]);

const fetchContentData = async () => {
  try {
    const { data } = await useFetch('https://jsonplaceholder.typicode.com/photos');
    contentData.value = data.value;
  } catch (err) {
    errorMessage.value = err.message || 'An unexpected error occurred.';
  }
};

await fetchContentData();
</script>

<template>
  <div class="home">
    <Tag class="tag" :tagData="tagData" />
    <Content v-if="contentData.length" :contentData="contentData" />
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  margin: 0 2rem 0 1rem;
}

.tag {
  margin-bottom: 1rem;
}
</style>
