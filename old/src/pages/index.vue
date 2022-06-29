<template>
  <main class="py-5">
    <div
      class="flex flex-col lg:flex-row items-center py-5 text-gray-300 container m-auto"
    >
      <aside class="demon-head-wrapper w-2/5">
        <img src="/img/demon-head.png" class="demon-head" alt="Demon Head" />
      </aside>
      <section class="w-11/12 lg:w-3/5 p-5 bg-gray-800 shadow m-5">
        <h1 class="text-2xl font-piratesbay text-center">
          Welcome to the Unofficial Portland, OR, Blood on the Clocktower group!
        </h1>
        <Welcome class="prose max-w-none m-auto" />
      </section>
    </div>
    <div class="flex flex-col items-center">
      <div class="py-4 flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl text-white font-piratesbay">
          Upcoming Events:
        </h2>
        <div class="w-11/12 md:w-3/5 py-4">
          <UpcomingEventsSubtitle class="prose max-w-none m-auto" />
        </div>
      </div>
      <div
        class="flex flex-col md:w-[500px] lg:w-[750px] bg-gray-800 text-white text-lg"
      >
        <NextGame class="flex-1" />
      </div>
    </div>
    <ContactUs />
    <div class="m-auto w-11/12 md:w-[550px] bg-gray-800 text-white text-lg mt-12 p-5">
      <h2 class="text-2xl md:text-3xl text-white font-piratesbay text-center mb-4">
        COVID-19 Guidelines:
      </h2>
      <CovidGuidelines class="prose m-auto" />
    </div>
    <div class="flex-col justify-center items-center pt-8 hidden sm:flex">
      <h2 class="text-2xl font-piratesbay text-center text-white">
        What is Blood on the Clocktower?
      </h2>
      <p class="py-4 text-white">
        Watch this video to learn more about Blood on the Clocktower:
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nuOq54FHDsg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import Welcome from '../content/text/welcome.md'
import CovidGuidelines from '../content/text/covid-guidelines.md'
import UpcomingEventsSubtitle from '../content/text/upcoming-events-subtitle.md'
// import ClocktowerAtThePark from '../content/events/clocktower-at-the-park.md'
import NextGame from '../content/events/next-game.md'
</script>

<style lang="postcss" scoped>
.demon-head-wrapper {
  max-height: 440px;
  max-width: 366px;
}
</style>
