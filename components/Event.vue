<template>
  <div v-if="event" class="flex-1 p-3">
    <div class="border-b border-gray-200 mb-4">
      <h3 class="text-3xl text-white font-piratesbay flex-grow">
        {{ event.title }}
      </h3>
      <div class="flex">
        <div class="flex-grow">
          <h4>When: {{ formatEventDate(event.date) }}</h4>
          <h4>
            Where:
            {{
              event.location === 'online' ? 'Discord Channel' : 'Sellwood Park'
            }}
          </h4>
        </div>
        <button
          class="block m-2 px-3 py-2 text-lg bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow"
        >
          RSVP Here!
        </button>
      </div>
    </div>
    <img
      v-if="event.image"
      :src="event.image"
      alt="Next In-Person Event Banner"
    />
    <nuxt-content
      :document="event"
      class="prose m-auto text-white pt-4"
    />
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
  methods: {
    formatEventDate(date) {
      return dayjs(date).format('MM/DD/YYYY h:MM a')
    },
  },
}
</script>
