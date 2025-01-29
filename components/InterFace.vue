<script setup lang="ts">
import { ref, onMounted } from 'vue';
const visibleRight = ref(false);

// model
interface FormData {
    interface:{
    title: string;
    title_color: string;
    title_font: string;
    description: string;
    description_color: string;
    description_font: string;
    button_text: string;
    button_font: string;
    button_color: string;
    button_background_color: string;
    button_border_color: string;
    button_border_radius: string;
    img: string;
    }
}
//Declare for Editable
const formData = ref<FormData>({
    interface: {
        title: '',
        title_color: '',
        title_font: '',
        description: '',
        description_color: '',
        description_font: '',
        button_text: '',
        button_font: '',
        button_color: '',
        button_background_color: '',
        button_border_color: '',
        button_border_radius: '',
        img: '',
    }
});

// queryData From json
const fetchData = async () => {
    try {
        const response = await queryContent('/interface').findOne();
        if (response) {
            formData.value.interface = response.formData;
        }
    } catch {
        console.log('Error');
    }
};

//Handle update data for request to api
const handleUpdate = async () => {
    try {
        const response = await $fetch('api/interface', {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData.value),
        })
        console.log(response);
    } catch (err) {
        console.log('Error');
    }

}
onMounted(() => {
    fetchData();
})

</script>
<template>
    <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
    <Drawer v-model:visible="visibleRight" header="Editor" position="right">

    </Drawer>

    <section
        class="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between w-full h-full px-6 sm:px-10 lg:px-28 sm:py-10 bg-gray-200 lg:py-0">
        <div class="flex-1 space-y-4 text-center lg:text-left lg:mx-10 animate__animated animate__slideInUp">
            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-600 leading-snug sm:leading-tight">
                <b class="lg:text-7xl">UI & UX</b> <span class="block">Designer</span>
            </h3>
            <p class="text-gray-900 max-w-md mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg font-medium">
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
                        class="border-2 border-green-500 text-green-500 px-6 py-2 rounded-lg shadow-md hover:bg-green-600 hover:text-white">
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
</template>