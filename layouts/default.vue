<template>
  <div>
    <div class="bg-gray-900 p-2 flex">
      <div class="flex flex-col items-center justify-center w-64">
        <img
          class="h-20"
          src="https://bloodontheclocktower.com/img/website/logo.png?rel=1591572107883"
          alt="Blood on the Clocktower"
        />
        <span class="text-xl font-piratesbay text-gray-300"
          >UNOFFICIAL Portland, OR</span
        >
      </div>
      <div
        class="pt-2 flex-grow flex flex-col md:flex-row justify-center md:justify-end items-end md:items-center h-24 text-2xl"
      >
        <a
          href="https://twitter.com/pdxbotc"
          class="py-1 px-4 text-white hover:text-red-600 hover:underline transition duration-50 font-piratesbay"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <span class="hidden sm:inline pl-2">Twitter</span>
        </a>
        <a
          href="https://www.facebook.com/groups/BOTCPDX"
          class="py-1 px-4 text-white hover:text-red-600 hover:underline transition duration-50 font-piratesbay"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <span class="hidden sm:inline pl-2">Facebook</span>
        </a>
        <a
          href="https://discord.gg/HMVv8rgFTY"
          class="py-1 px-4 text-white hover:text-red-600 hover:underline transition duration-50 font-piratesbay"
        >
          <font-awesome-icon :icon="['fab', 'discord']" />
          <span class="hidden sm:inline pl-2">Discord</span>
        </a>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style lang="postcss">
@font-face {
  font-family: PiratesBay;
  src: url(../assets/fonts/piratesbay.ttf);
}

body {
  @apply bg-gray-700;
}

.prose * {
  color: white !important;
}
</style>
