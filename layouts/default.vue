<script setup>
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div>
    <NuxtHead>
      <title>YouTube - Nuxt</title>
    </NuxtHead>
    <Navbar :isMenuOpen="isMenuOpen" :toggleMenu="toggleMenu" />
    <main>
      <Sidebar :isMenuOpen="isMenuOpen" />
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  display: flex;
}
</style>