<template>
  <div class="w-full xl:w-[1200px] lg:w-[1100px] bg-gray-900 text-white text-lg p-5 m-auto mt-12">
    <h2 class="text-3xl md:text-4xl text-white font-piratesbay text-center mb-4">
      Ready for a Night at the Clocktower?
    </h2>
    <p class="py-3 w-full lg:w-[850px] m-auto">
      We'd love to have you join us! Find us on social media, Discord, or contact us by email. We look forward to hearing from you!
    </p>
    <div
      class="pt-8 flex justify-around text-2xl w-full md:w-[500px] m-auto"
    >
      <a
        href="https://twitter.com/pdxbotc"
        target="_blank"
        class="py-1 px-4 text-white hover:text-red-600 transition duration-50 font-piratesbay"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a
        href="https://www.facebook.com/groups/BOTCPDX"
        target="_blank"
        class="py-1 px-4 text-white hover:text-red-600 transition duration-50 font-piratesbay"
      >
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a
        href="https://discord.gg/HMVv8rgFTY"
        target="_blank"
        class="py-1 px-4 text-white hover:text-red-600 transition duration-50 font-piratesbay"
      >
        <font-awesome-icon :icon="['fab', 'discord']" />
      </a>
      <a
        href="mailto:pdxbotc@gmail.com"
        target="_blank"
        class="py-1 px-4 text-white hover:text-red-600 transition duration-50 font-piratesbay"
      >
        <font-awesome-icon :icon="['fa', 'envelope']" />
      </a>
    </div>
  </div>
</template>
