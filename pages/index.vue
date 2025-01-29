<script setup lang="ts"></script>

<template>
  <HeaderComponent />
  <!-- Section 1 -->
  <section
    class="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between w-full h-full px-6 sm:px-10 lg:px-28 sm:py-10 bg-gray-200 lg:py-0"
  >
    <div
      class="flex-1 space-y-4 text-center lg:text-left lg:mx-10 animate__animated animate__slideInUp"
    >
      <h3
        class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-600 leading-snug sm:leading-tight"
      >
        <b class="lg:text-7xl">UI & UX</b> <span class="block">Designer</span>
      </h3>
      <p
        class="text-gray-900 max-w-md mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg font-medium"
      >
        Crafting user-friendly and fascinating designs that guarantee effortless
        navigation and accessibility across all devices.
      </p>
      <div class="flex flex-wrap justify-center lg:justify-start space-x-4 mt-4">
        <!-- <button
          class="bg-yellow-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500"
        >
          Hire Me
        </button> -->
        <a href="/#services">
          <button
            class="border-2 border-green-500 text-green-500 px-6 py-2 rounded-lg shadow-md hover:bg-green-600 hover:text-white"
          >
            Get Start
          </button>
        </a>
      </div>
    </div>

    <!-- Image -->
    <div class="flex-1 flex justify-center mt-6 sm:mt-8 lg:mt-0">
      <div class="w-60 sm:w-72 lg:w-full h-auto">
        <SvG />
      </div>
    </div>
  </section>

  <!-- Services -->
  <ServiceView />

  <!--   Our Team -->
  <OurTeam />

  <!-- About us -->
  <section
    id="aboutus"
    class="flex flex-wrap items-center justify-between w-full h-full px-6 py-10 bg-gray-200 lg:px-28"
  >
    <div
      class="elementB_T w-full lg:w-1/2 flex justify-center relative mb-6 lg:mb-0"
    >
      <div class="relative w-full h-auto z-10 sm:w-72 lg:w-full">
        <AboutUs-svg />
      </div>
    </div>

    <div
      class="elementB_T w-full lg:w-1/2 space-y-6"
    >
      <h1
        class="text-3xl font-bold pb-2 sm:text-4xl lg:text-5xl lg:text-left sm:text-center md: text-center"
      >
        Discover Us
      </h1>
      <p class="text-gray-500 max-w-full pb-2 sm:max-w-md text-justify lg:text-left">
        Welcome to <b class="text-green-500">One.Dev</b>, where passion drives innovation.
        From the start, we've been dedicated to providing outstanding services that make a
        real difference in people’s lives. We focus on quality, creativity, and putting
        our customers first. At <b class="text-green-500">One.Dev</b>, we believe in
        building strong relationships based on trust and continually adapting to meet your
        needs. Join us in shaping a future of excellence and success together.
      </p>
    </div>
    <div id="project" class="bg-gray-200 w-full h-14"></div>
  </section>

  <MyProject />
  <div id="contact" class="bg-gray-200 w-full h-14"></div>

  <section
    class="flex flex-col lg:flex-row items-center justify-between w-full h-full p-6 sm:p-12 lg:px-48 py-16 bg-gray-200"
  >
    <!-- Let Design Together -->
    <div class="flex-1 space-y-4 mb-8 lg:mb-0 text-center lg:text-left">
      <div
        class="elementB_T flex flex-row lg:flex-col text-4xl md:text-5xl lg:text-6xl font-bold space-x-2 lg:space-x-0 lg:space-y-2 text-green-500"
      >
        <h1 class="text-center lg:text-left">Let</h1>
        <h1 class="text-center lg:text-left">Design</h1>
        <h1 class="text-center lg:text-left">Together</h1>
      </div>

      <p
        class="text-gray-600 max-w-lg mx-auto lg:mx-0 lg:pr-16 text-justify lg:text-left"
      >
        Collaborate to create unique, functional, and beautiful websites. Together, we’ll
        bring your ideas to life with personalized design solutions.
      </p>
    </div>

    <!-- Form Section -->
    <div
      class="elementB_T w-full lg:w-auto flex justify-center"
    >
      <FormSubmit />
    </div>
  </section>
</template>

<style>
.slide-up {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}
</style>
