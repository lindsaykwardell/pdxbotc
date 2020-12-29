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
      <div class="flex-grow flex justify-end items-center h-20 text-2xl">
        <a
          href="https://twitter.com/pdxbotc"
          class="px-4 text-white hover:text-red-600 hover:underline transition duration-50 font-piratesbay"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <span class="pl-2">Twitter</span>
        </a>
        <a
          href="https://www.facebook.com/groups/BOTCPDX"
          class="px-4 text-white hover:text-red-600 hover:underline transition duration-50 font-piratesbay"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <span class="pl-2">Facebook</span>
        </a>
        <a
          href="https://twitter.com/pdxbotc"
          class="px-4 text-white hover:text-red-600 hover:underline transition duration-50 font-piratesbay"
        >
          <font-awesome-icon :icon="['fab', 'discord']" />
          <span class="pl-2">Discord</span>
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

  /* background-image: url('https://bloodontheclocktower.com/img/website/background-img2.jpg'); */
}
</style>
