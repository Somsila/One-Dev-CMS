<script lang="ts" setup>
import bunheng from '@/assets/image/bunheng1.jpg'
import tyty from '@/assets/image/tyty1.jpg'
import sila from '@/assets/image/sila.jpg'
import pheaktra from '@/assets/image/tra1.jpg'
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Bunheng",
    position: "UX/UI Designer",
    image: bunheng,
},
{
    id: 2,
    name: "Ty Ty",
    position: "Web-Developer",
    image: tyty,
},
{
    id: 3,
    name: "Si La",
    position: "Web-Developer",
    image: sila,
},
{
    id: 4,
    name: "Pheaktra",
    position: "Web-Developer",    
    image: pheaktra,
}
  // Add more members here
];
</script>

<template>
  <section class="flex flex-col items-center justify-between w-full h-full px-6 sm:px-10 md:px-20 lg:px-28 py-10 bg-gray-200">
    <h1 class="text-center text-4xl font-bold">Meet The Team</h1>
    <p class="text-gray-500 py-4 text-sm sm:text-base text-justify lg:text-center mb-8">We are a dedicated group of web designers and developers focused on crafting visually appealing and easy-to-use websites. Our combined talents ensure every project is both creative and effective.</p>
    <div class=" grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-200">
      <div
        v-for="member in teamMembers"
        :key="member.id"
        class="card elementB_T bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <div class="team-image-wrapper">
          <img
            class="team-member-image w-full h-64 object-cover"
            :src="member.image"
            :alt="`${member.name} - ${member.position}`"
          />
        </div>
        <div class="p-6 text-center">
          <p class="text-xl font-semibold name">
            {{ member.name }}
          </p>
          <p class="text-gray-500 position">
            {{ member.position }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}
</style>
