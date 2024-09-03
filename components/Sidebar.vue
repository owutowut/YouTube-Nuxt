<script setup>
const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <div class="sidebar">
    <div class="nav" :class="{ 'active': isMenuOpen }">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
      </svg>
      <p>หน้าแรก</p>
    </div>
    <div class="nav" :class="{ 'active': isMenuOpen }">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="m18.931 9.99l-1.441-.601l1.717-.913a4.48 4.48 0 0 0 1.874-6.078a4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.5 4.5 0 0 0-2.402 4.193a4.52 4.52 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.53 4.53 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.49 4.49 0 0 0 2.39-4.192a4.53 4.53 0 0 0-2.678-3.904Zm-9.334 5.2V8.824l6.007 3.184z" />
      </svg>
      <p>Shorts</p>
    </div>
    <div class="nav" :class="{ 'active': isMenuOpen }">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 14v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
        <path fill="currentColor"
          d="M13 16h-2l-5 5v-5H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v4h-4v3h-3z" />
      </svg>
      <p>การติดตาม</p>
    </div>
    <div class="nav" :class="{ 'active': isMenuOpen }">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 16 16">
        <path fill="currentColor"
          d="M2.5 4.553a.998.998 0 1 0 0 1.996a.998.998 0 0 0 0-1.996m0-1q-.165.001-.325.026A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5V7.487A2.002 2.002 0 0 0 4.498 5.55A2 2 0 0 0 2.5 3.553m3 2.947A.5.5 0 0 0 6 7h4a.5.5 0 1 0 0-1H6a.5.5 0 0 0-.5.5m0 3a.5.5 0 0 0 .5.5h2.614a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5" />
      </svg>
      <p>คุณ</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  color: white;
  min-height: 100vh;
  width: fit-content;
  padding: 0 1rem;
  white-space: nowrap;

  >*+* {
    margin-top: 1rem;
  }
}

.nav {
  width: 100%;
  display: grid;
  margin-top: 1rem;
  place-items: center;

  p {
    font-size: 12px;
  }
}

.nav.active {
  display: flex;

  >*+* {
    margin-left: 0.5rem;
  }
}
</style>