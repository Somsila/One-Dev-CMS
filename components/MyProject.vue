<script setup lang="ts">
const showSection = (sectionId: string): void => {
  // Hide all sections
  const sections = document.querySelectorAll<HTMLDivElement>('.section');
  sections.forEach((section) => {
    section.classList.add('hidden');
  });

  // Show the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  } else {
    console.error(`Section with ID "${sectionId}" not found.`);
  }
};

</script>
<template>
  <section class="card bg-gray-200">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center">My Projects</h1>
    <p
      class="text-gray-500 py-4 text-sm sm:text-base mx-4 md:mx-20 lg:mx-28 text-justify lg:text-center"
    >
      We take pride in offering exceptional website designs that balance creativity and
      functionality. Crafted with precision and tailored to each client's vision, our
      projects drive success and elevate brands. Explore our portfolio to see how we bring
      ideas to life.
    </p>
    <div
    class="flex justify-center items-center bg-gray-200 whitespace-nowrap p-4 gap-2 lg:gap-4 lg:flex lg:justify-center lg:items-center"
  >
    <!-- <button
      class="px-6 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none"
      @click="showSection('ux-ui')"
    > 
      UX UI
    </button> -->
    <button
      class="px-6 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none"
      @click="showSection('website-design')"
    >
      Website Design
    </button>
    <button
    disabled="true";
      class="px-6 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg focus:outline-none"
      @click="showSection('app-design')"
    >
      App Design
    </button>
  </div>

  <!-- Sections -->
  <div id="website-design" 
  class="elementR_L section w-full flex gap-4 overflow-x-auto flex-nowrap sm:flex-row md:flex-row p-2 ">
    <!-- Content for Website Design -->
    <a href="https://theoneclicks.com/" target="_blank" class="block flex-shrink-0">
      <img
        src="../assets/image/PAGE-ONECLICK.jpg"
        alt="Project 1"
        class="w-96 rounded-lg lg:w-96"
      />
    </a>
    <a href="https://mylekha.net/" target="_blank" class="block flex-shrink-0">
      <img
        src="../assets/image/PAGE-MYLEKHA.jpg"
        alt="Project 1"
        class="w-96 rounded-lg lg:w-96"
      />
    </a>
    <a href="https://rambutansiemreap.com/" target="_blank" class="block flex-shrink-0">
      <img
        src="../assets/image/PAGE-RAMBUTAN.png"
        alt="Project 1"
        class="w-96 rounded-lg lg:w-96"
      />
    </a>
    <a href="https://riversquare24.com/" target="_blank" class="block flex-shrink-0">
      <img
        src="../assets/image/PAGE-RIVERSQUARE.jpg"
        alt="Project 1"
        class="w-96 rounded-lg lg:w-96"
      />
    </a>
    <a href="https://thenight-hotel.com/" target="_blank" class="block flex-shrink-0">
      <img
        src="../assets/image/PAGE-THENIGHTHOTEL.jpg"
        alt="Project 1"
        class="w-96 rounded-lg lg:w-96"
      />
    </a>
  </div>

  </section>
</template>

<style scoped>
/* Optional styles for dots */
button {
  transition: background-color 0.3s ease;
}
</style>
