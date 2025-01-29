<template>
  <!-- Testimonials -->
  <section
    id="test"
    class="flex flex-col items-center justify-between w-full h-full px-6 md:px-12 lg:px-28 py-10 bg-white"
  >
    <div class="items-center mt-10">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Testimonials</h1>
      <p class="text-gray-500 text-center py-4 text-sm md:text-base">
        At <b class="text-green-500">One.Dev</b>, we value the voices of our clients. Our
        testimonials showcase the experiences and success stories of those we’ve had the
        privilege to work with. From glowing reviews about our exceptional services to
        heartfelt messages of appreciation, these stories highlight the trust and
        satisfaction we strive to deliver. See what makes us the preferred choice for so
        many.
      </p>
    </div>
    <!-- grid feedback -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-10 md:mx-3 lg:justify-items-center"
    >
      <div
        class="flex flex-col w-full max-w-sm mx-auto border-solid bg-slate-400 p-6 rounded-lg shadow-md shadow-gray-400"
      >
        <img
          type="profile"
          src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
          alt=""
          class="w-16 h-16 rounded-full border-4 border-white mb-3"
        />
        <p class="mb-3 text-sm md:text-base">
          "<b class="text-green-700">One.Dev</b> delivered results that not only met but
          surpassed our expectations. The team’s innovative approach and expertise brought
          a fresh perspective to our project, leaving a lasting impact. The positive
          feedback we’ve received from our audience is a testament to their exceptional
          work. Highly recommended for anyone looking for top-tier service!"
        </p>
        <p class="text-yellow-400 mb-3 text-sm md:text-base">John Wick</p>
        <div class="flex justify-between text-sm md:text-base">
          <p>CEO</p>
          <p class="text-yellow-400">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        </div>
      </div>

      <!-- Repeat the above block for each testimonial -->
      <div
        class="flex flex-col w-full max-w-sm mx-auto border-solid bg-slate-400 p-6 rounded-lg shadow-md shadow-gray-400"
      >
        <img
          type="profile"
          src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
          alt=""
          class="w-16 h-16 rounded-full border-4 border-white mb-3"
        />
        <p class="mb-3 text-sm md:text-base">
          "Working with <b class="text-green-700">One.Dev</b> felt like a true
          partnership. They listened to our needs, offered valuable insights, and ensured
          we were involved at every stage of the project. Their professionalism and
          dedication made the entire process smooth and stress-free. We’re thrilled with
          the outcome and look forward to future collaborations!"
        </p>
        <p class="text-yellow-400 mb-3 text-sm md:text-base">John Wick</p>
        <div class="flex justify-between text-sm md:text-base">
          <p>CEO</p>
          <p class="text-yellow-400">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        </div>
      </div>

      <div
        class="flex flex-col w-full max-w-sm mx-auto border-solid bg-slate-400 p-6 rounded-lg shadow-md shadow-gray-400"
      >
        <img
          type="profile"
          src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
          alt=""
          class="w-16 h-16 rounded-full border-4 border-white mb-3"
        />
        <p class="mb-3 text-sm md:text-base">
          "Our experience with <b class="text-green-700">One.Dev</b> has been nothing
          short of amazing. The team truly understood our vision and brought it to life
          with creativity and precision. Their attention to detail and commitment to
          delivering top-quality work exceeded our expectations. We couldn’t be happier
          with the results and highly recommend their services!"
        </p>
        <p class="text-yellow-400 mb-3 text-sm md:text-base">John Wick</p>
        <div class="flex justify-between text-sm md:text-base">
          <p>CEO</p>
          <p class="text-yellow-400">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        </div>
      </div>
    </div>
  </section>
</template>
