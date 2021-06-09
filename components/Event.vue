<template>
  <div v-if="event" class="flex-1 p-3">
    <div class="border-b border-gray-200 mb-4">
      <h3 class="text-3xl text-white font-piratesbay flex-grow">
        {{ event.title }}
      </h3>
      <div class="flex flex-col sm:flex-row">
        <div class="flex-grow">
          <h4>When: {{ formatEventDate(event.date) }}</h4>
          <h4>
            Where:
            <template v-if="event.location === 'online'">
              <a
                href="https://discord.gg/HMVv8rgFTY"
                target="_blank"
                class="px-4 py-1 bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow"
              >
                <font-awesome-icon :icon="['fab', 'discord']" />
                <span class="pl-2">Discord</span>
              </a>
            </template>
            <template v-if="event.location === 'sellwood'">
              <a
                href="https://www.google.com/maps/place/Sellwood+Park/@45.4674276,-122.6613082,17z/data=!4m5!3m4!1s0x54950addbff55de7:0x4331adb2384907f2!8m2!3d45.467673!4d-122.6603033"
                target="_blank"
                class="px-4 py-1 bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow"
              >
                <font-awesome-icon :icon="['fa', 'map-marked-alt']" />
                <span class="pl-2">Sellwood Park</span>
              </a>
            </template>
          </h4>
        </div>
        <button
          @click="showRsvpForm = !showRsvpForm"
          class="block m-2 px-5 py-2 text-lg bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow"
        >
          {{ showRsvpForm ? 'Event Details' : 'RSVP' }}
        </button>
      </div>
    </div>
    <template v-if="!showRsvpForm">
      <img
        v-if="event.image"
        :src="event.image"
        alt="Next In-Person Event Banner"
      />
      <nuxt-content :document="event" class="prose m-auto text-white pt-4" />
    </template>
    <FormulateForm
      v-else
      v-model="formValues"
      @submit="submitRsvpForm"
      :disabled="!enableForm"
      class="w-3/4 m-auto"
    >
      <FormulateInput
        name="name"
        type="text"
        label="Your name"
        placeholder="Your name"
        validation="required"
        class="mb-6"
        label-class="font-piratesbay text-xl pb-2"
        input-class="w-full bg-gray-900 shadow p-2 disabled:text-gray-500"
        errors-class="text-sm"
        :disabled="!enableForm"
      />
      <FormulateInput
        name="email"
        type="email"
        label="Email Address"
        placeholder="your@address.here"
        class="mb-6"
        label-class="font-piratesbay text-xl pb-2"
        input-class="w-full bg-gray-900 shadow p-2 disabled:text-gray-500"
        errors-class="text-sm"
        :disabled="!enableForm"
      />
      <FormulateInput
        type="submit"
        label="Submit Registration"
        input-class="block m-auto px-5 py-2 text-xl bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow disabled:text-gray-500 disabled:hover:bg-gray-900 disabled:cursor-default"
        :disabled="!enableForm"
      />
    </FormulateForm>
    <div
      v-if="formStatus === 'SUCCESS' || formStatus === 'ERROR'"
      class="mt-6 py-6 text-center text-3xl font-piratesbay bg-gray-700"
    >
      <template v-if="formStatus === 'SUCCESS'">Submission received!</template>
      <template v-if="formStatus === 'ERROR'"
        >Something went wrong, try again</template
      >
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import axios from 'axios'

const Status = {
  IDLE: 'IDLE',
  SUBMITTING: 'SUBMITTING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

export default {
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showRsvpForm: false,
      formValues: {},
      formStatus: Status.IDLE,
    }
  },
  computed: {
    enableForm() {
      return this.formStatus === Status.IDLE || this.formStatus === Status.ERROR
    },
  },
  methods: {
    formatEventDate(date) {
      return dayjs(date).format('MM/DD/YYYY h:mm a')
    },
    submitRsvpForm() {
      if (!this.enableForm) return

      this.formStatus = Status.SUBMITTING

      axios
        .post('/.netlify/functions/rsvp', {
          ...this.formValues,
          eventName: this.event.title,
          eventDate: this.formatEventDate(this.event.date),
        })
        .then(() => {
          this.formStatus = Status.SUCCESS
        })
        .catch(() => {
          this.formStatus = Status.ERROR
        })
    },
  },
}
</script>
