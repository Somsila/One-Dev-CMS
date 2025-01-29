<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const sendEmail = () => {
  const { name, email, message } = form.value;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs
    .send("service_cdv95tb", "template_qtx5dk7", templateParams, "VjPKrqeEw1tQAgsMj")
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
    })
    .catch((err) => {
      console.log("FAILED...", err);
      alert("Failed to send message. Please try again.");
    });

  // Clear form after submission
  form.value.name = "";
  form.value.email = "";
  form.value.message = "";
};
</script>

<template>
  <form
    @submit.prevent="sendEmail"
    class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-screen p-4 sm:p-6 bg-white rounded-lg shadow-lg space-y-4 sm:space-y-6"
  >
    <!-- Name Field -->
    <div>
      <label for="name" class="block text-base sm:text-lg font-medium text-gray-700"
        >Name</label
      >
      <input
        v-model="form.name"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        class="mt-2 block w-full p-3 sm:p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
        required
      />
    </div>

    <!-- Email Field -->
    <div>
      <label for="email" class="block text-base sm:text-lg font-medium text-gray-700"
        >Email</label
      >
      <input
        v-model="form.email"
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        class="mt-2 block w-full p-3 sm:p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
        required
      />
    </div>

    <!-- Message Field -->
    <div>
      <label for="message" class="block text-base sm:text-lg font-medium text-gray-700"
        >Message</label
      >
      <textarea
        v-model="form.message"
        id="message"
        name="message"
        rows="4"
        placeholder="Enter your message"
        class="mt-2 block w-full p-3 sm:p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
        required
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div>
      <button
        type="submit"
        class="w-full px-6 sm:px-10 py-3 sm:py-4 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-200 text-base sm:text-lg"
      >
        Submit
      </button>
    </div>
  </form>
</template>
