<script setup lang="ts">
import web_design from "@/assets/image/web-design.gif";
import UXUI from "@/assets/image/UX-UI.gif";
import branding from "@/assets/image/branding.gif";
import web_development from "@/assets/image/web-devolopment.gif";
import seo from "@/assets/image/seo.gif";
import content from "@/assets/image/content.gif";
import { useGSAPAnimations } from "~/library/gsapanimation";
useGSAPAnimations();


interface Service {
  title: string;
  src: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Web Design",
    src: web_design,
    description:
      "We design attractive, easy-to-use websites that match your brand’s unique style and work smoothly for your users.",
  },
  {
    title: "UX/UI Design",
    src: UXUI,
    description:
      "Our designs aim to provide easy and enjoyable user experiences, with interfaces that encourage engagement.",
  },
  {
    title: "Branding",
    src: branding,
    description:
      "We help you create a strong brand identity that makes your business stand out and connect with your audience.",
  },
  {
    title: "Web Development",
    src: web_development,
    description:
      "Our team creates fast, interactive websites using the latest technologies to improve your online presence and user experience.",
  },
  {
    title: "SEO Optimization",
    src: seo,
    description:
      "We boost your website's visibility on search engines, making it easier for your audience to find you and visit your site.",
  },
  {
    title: "Content Creation",
    src: content,
    description:
      "Our creative team creates high-quality content that clearly tells your brand's story and vision.",
  },
];
</script>

<template>
  <div id="services" class="bg-gray-200 w-full h-14"></div>
  <!-- Services -->
  <section
    class="flex flex-col items-center justify-between w-full h-full px-6 sm:px-10 md:px-20 lg:px-28 py-10 bg-gray-200"
  >
    <div class="items-center text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">Services</h1>
      <p class="text-gray-500 py-4 text-sm sm:text-base text-justify lg:text-center">
        we provide professional services tailored to your needs, from web design to
        branding, ensuring your business thrives online. <br />
        Explore how our creative solutions can elevate your brand.
      </p>
    </div>

    <!-- looping -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-10">
      <div
      ref="section"
        v-show="true"
        v-for="(service, index) in services"
        :key="index"
        class=" elementB_T bg-white flex flex-col items-center justify-center border border-gray-300 aspect-square p-4 rounded-lg shadow-sm w-full transition transform hover:scale-105 hover:shadow-lg"
        
      >
        <img
          :src="service.src"
          :alt="service.title + ' Icon'"
          class="w-12 sm:w-14 lg:w-16 h-auto mb-3"
        />
        <h1 class="text-base sm:text-lg font-medium text-gray-700 mb-1">
          {{ service.title }}
        </h1>
        <p class="text-center text-gray-600 text-xs sm:text-sm">
          {{ service.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Include the CSS animation definitions */
.slide-up {
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.slide-up.show {
  transform: translateY(0);
  opacity: 1;
}
</style>
