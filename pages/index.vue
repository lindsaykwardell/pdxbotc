<template>
  <main class="py-5">
    <div
      class="flex flex-col lg:flex-row items-center py-5 text-gray-300 container m-auto"
    >
      <aside class="demon-head-wrapper w-2/5">
        <img src="/img/demon-head.png" class="demon-head" alt="Demon Head" />
      </aside>
      <content class="w-11/12 lg:w-3/5 p-5 bg-gray-800 shadow m-5">
        <h1 class="text-2xl font-piratesbay text-center">
          Welcome to the Unofficial Portland, OR, Blood on the Clocktower group!
        </h1>
        <nuxt-content class="py-4 prose max-w-none" :document="welcomeText" />
      </content>
    </div>
    <div class="flex flex-col items-center">
      <div class="py-4 flex flex-col items-center">
        <h2 class="text-3xl text-white font-piratesbay">Upcoming Events:</h2>
        <div class="w-11/12 md:w-3/5 py-4">
          <nuxt-content
            class="prose max-w-none m-auto"
            :document="upcomingEventsSubtitle"
          />
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row w-11/12 xl:w-[1100px] lg:w-[950px] md:w-[550px] bg-gray-800 text-white text-lg p-5"
      >
        <Event
          :event="nextInPersonEvent"
          class="lg:border-r border-b lg:border-b-0 border-gray-200"
        />
        <Event :event="nextOnlineEvent" />
      </div>
    </div>
    <div class="m-auto w-full md:w-[550px] bg-gray-800 text-white text-lg mt-12 p-5">
      <h2 class="text-3xl text-white font-piratesbay text-center mb-4">COVID-19 Guidelines:</h2>
      <nuxt-content class="prose m-auto" :document="covidGuidelines" />
    </div>
    <!-- <div class="flex flex-col items-center">
      <h2 class="text-5xl py-4 text-white font-piratesbay">Latest Updates:</h2>
      <article
        v-for="post in posts"
        :key="post.slug"
        class="container-small bg-gray-800 text-white text-lg p-5"
      >
        <div class="flex items-center pb-4 border-b border-gray-200 mb-4">
          <h3 class="text-3xl text-white font-piratesbay flex-grow">
            {{ post.title }}
          </h3>
          <div class="w-3/5 md:w-1/3 whitespace-nowrap text-right">
            {{ formatDate(post.date) }}<br />
            <span class="text-gray-400">{{ post.author }}</span>
          </div>
        </div>
        <div class="">
          <nuxt-content
            :document="post"
            class="prose prose-lg m-auto text-white"
          />
        </div>
      </article>
    </div> -->
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

<script>
import dayjs from 'dayjs'

export default {
  async asyncData({ $content, $fetchText }) {
    const posts = await $content('posts')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()

    const nextInPersonEvent = (
      await $content('events')
        .sortBy('date', 'desc')
        .where({ location: 'sellwood' })
        .fetch()
    )?.[0]

    const nextOnlineEvent = (
      await $content('events')
        .sortBy('date', 'desc')
        .where({ location: 'online' })
        .fetch()
    )?.[0]

    const welcomeText = await $fetchText('welcome')
    const upcomingEventsSubtitle = await $fetchText('upcoming-events-subtitle')
    const covidGuidelines = await $fetchText('covid-guidelines')

    return {
      posts,
      nextInPersonEvent,
      nextOnlineEvent,
      welcomeText,
      upcomingEventsSubtitle,
      covidGuidelines,
    }
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format('MM/DD/YYYY')
    },
  },
}
</script>

<style lang="postcss" scoped>
.demon-head-wrapper {
  max-height: 440px;
  max-width: 366px;
}
</style>
