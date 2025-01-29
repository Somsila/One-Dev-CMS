<script setup lang="ts">
import { ref } from "vue";
// Reactive state for the menu visibility
const showMenu = ref(false);

// Toggle function
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

// Close the menu when a menu item is clicked
const closeMenu = () => {
  showMenu.value = false;
};
</script>

<template>
  <!-- Header -->
  <header class="bg-white border-b pt-2 shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo/Title -->
      <div class="flex items-center">
        <!-- Overlapping circles -->
        <div class="r w-full h-20 flex items-center justify-center ml-4">
        <a href="#"><img
            src="../assets/image/ONE CLICKS.png"
            alt=""
            class="w-28 sm:w-32 md:w-36 lg:w-36"
          /></a>
          
        </div>

        <!-- Text -->
        <!-- <span class="text-lg font-semibold text-gray-800 ml-3">One.Dev</span> -->
      </div>

      <!-- Hamburger Button -->
      <button
        @click="toggleMenu"
        class="sm:hidden flex items-center px-3 py-2 rounded text-black"
      >
        <svg
          class="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <!-- Navigation -->
      <nav
        :class="[
          'sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-black text-base font-medium',
          showMenu ? 'block' : 'hidden',
        ]"
        class="absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none p-4 sm:p-0"
      >
        <a
          href="/#"
          class="hover:text-green-600 block sm:inline-block px-4 py-2 lg:text-gray-600"
          @click="closeMenu"
          >Home</a
        >

        <a
          href="/#services"
          class="hover:text-green-600 block sm:inline-block px-4 py-2 lg:text-gray-600"
          @click="closeMenu"
          >Services</a
        >
        <a
          href="/#aboutus"
          class="hover:text-green-600 block sm:inline-block px-4 py-2 lg:text-gray-600"
          @click="closeMenu"
          >About Us</a
        >
        <a
          href="/#project"
          class="hover:text-green-600 block sm:inline-block px-4 py-2 lg:text-gray-600"
          @click="closeMenu"
          >Projects</a
        >
        <!-- <a
          href="/#test"
          class="hover:text-green-600 block sm:inline-block px-4 py-2 lg:text-gray-600"
          @click="closeMenu"
          >Testimonials</a
        > -->
        <a
          href="/#contact"
          class="hover:text-green-600 block sm:inline-block px-4 py-2 lg:text-gray-600"
          @click="closeMenu"
        >
          Contact Me
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Ensure proper z-index for the menu */
nav {
  z-index: 10;
}
</style>
