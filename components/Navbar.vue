<script setup>
const searchInput = ref('')

const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    required: true
  },
  toggleMenu: {
    type: Function,
    required: true
  }
});

watch(searchInput, (newValue) => {
  if (newValue !== '' || newValue !== null) {
    console.log(newValue);
  }
});
</script>

<template>
  <div class="navbar">
    <div class="left">
      <div @click="toggleMenu" class="menu" :class="{ 'active': isMenuOpen }">
        <svg width=" 1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd"
            d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="logo">
        <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 180">
          <path fill="#f00"
            d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" />
          <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
        </svg>
        <span>YouTube</span>
      </div>
    </div>
    <div class="middle">
      <div class="search-box">
        <input v-model="searchInput" type="text" placeholder="ค้นหา" />
        <div class="search-icon">
          <svg width="1.4rem" height="1.4rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path fill="currentColor"
                d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0" />
            </g>
          </svg>
        </div>
      </div>
      <div class="microphone">
        <svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z" />
        </svg>
      </div>
    </div>
    <div class="right">
      <svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
          <path stroke-miterlimit="10" d="M9.047 9.5v5" />
          <path stroke-linejoin="round" d="M11.34 11.605L9.373 9.638a.46.46 0 0 0-.651 0l-1.968 1.967" />
          <path stroke-linejoin="round"
            d="M12 5.32H6.095A3.595 3.595 0 0 0 2.5 8.923v6.162a3.595 3.595 0 0 0 3.595 3.595H12a3.595 3.595 0 0 0 3.595-3.595V8.924A3.594 3.594 0 0 0 12 5.32m9.5 4.118v5.135c0 .25-.071.496-.205.708a1.36 1.36 0 0 1-.555.493a1.27 1.27 0 0 1-.73.124a1.37 1.37 0 0 1-.677-.278l-3.225-2.588a1.38 1.38 0 0 1-.503-1.047c0-.2.045-.396.133-.575c.092-.168.218-.315.37-.432l3.225-2.567a1.36 1.36 0 0 1 .678-.278c.25-.032.504.011.729.124a1.33 1.33 0 0 1 .76 1.181" />
        </g>
      </svg>
      <svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2" />
          <circle cx="12" cy="3" r="1" />
        </g>
      </svg>
      <svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path fill="none"
          d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0M20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5" />
        <path fill="currentColor"
          d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.9 13.9 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3q.418.457.87.87q.14.124.28.242q.48.415.99.782c.044.03.084.069.128.1v-.012a13.9 13.9 0 0 0 16 0v.012c.044-.031.083-.07.128-.1q.51-.368.99-.782q.14-.119.28-.242q.451-.413.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: rgb(14, 13, 13);
  color: white;
  height: 4rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: 600;
  }

  .left {
    display: flex;

    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      background-color: transparent;
      border-radius: 100%;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgb(34, 32, 32);
      }

    }

    .menu.active {
      background-color: rgb(34, 32, 32);
    }

    .logo {
      margin-left: 1rem;
      display: flex;
      align-items: center;
    }

    .logo span {
      margin-left: 0.5rem;
    }
  }

  .middle {
    display: flex;
    justify-items: center;
    align-items: center;

    .search-box {
      background-color: rgb(19, 18, 18);
      border: 1px solid rgb(73, 72, 72);
      border-radius: 20px;
      width: 30rem;
      display: flex;
      overflow: hidden;

      input {
        color: white;
        font-size: 16px;
        width: 85%;
        padding: 0.5rem 0.7rem;
        background-color: transparent;
        border: unset;
        border-radius: unset;
      }

      .search-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        background-color: rgb(34, 32, 32);
        border-left: 1px solid rgb(73, 72, 72);
      }
    }

    .microphone {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1rem;
      background-color: rgb(34, 32, 32);
      padding: 0.5rem;
      border-radius: 100%;
      height: 100%;
    }
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    >*+* {
      margin-left: 1rem;
    }
  }
}
</style>