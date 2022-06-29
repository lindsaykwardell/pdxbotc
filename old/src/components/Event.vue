<template>
  <div v-if="event" class="p-3 w-full">
    <div class="border-b border-gray-500 mb-4">
      <h3 class="text-2xl md:text-3xl text-white font-piratesbay flex-grow">
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
                class="
                  px-4
                  py-1
                  bg-gray-900
                  hover:bg-red-700
                  transition
                  duration-50
                  rounded
                  shadow
                "
              >
                <font-awesome-icon :icon="['fab', 'discord']" />
                <span class="pl-2">Discord</span>
              </a>
            </template>
            <template v-if="event.location === 'cloudcap'">
              <a
                href="https://cloudcapgames.com/"
                class="
                  px-4
                  py-1
                  bg-gray-900
                  hover:bg-red-700
                  transition
                  duration-50
                  rounded
                  shadow
                "
              >
                <font-awesome-icon :icon="['fa', 'map-marked-alt']" />
                <span class="pl-2">Cloud Cap Games</span>
              </a>
            </template>
            <template v-if="event.location === 'sellwood'">
              <a
                href="https://www.google.com/maps/place/Sellwood+Park/@45.4674276,-122.6613082,17z/data=!4m5!3m4!1s0x54950addbff55de7:0x4331adb2384907f2!8m2!3d45.467673!4d-122.6603033"
                target="_blank"
                class="
                  px-4
                  py-1
                  bg-gray-900
                  hover:bg-red-700
                  transition
                  duration-50
                  rounded
                  shadow
                "
              >
                <font-awesome-icon :icon="['fa', 'map-marked-alt']" />
                <span class="pl-2">Sellwood Park</span>
              </a>
            </template>
            <template v-if="event.location === 'gabriel'">
              <a
                href="https://www.google.com/maps/place/Gabriel+Park/@45.474297,-122.7212976,17z/data=!3m1!4b1!4m5!3m4!1s0x54950b9e2e29be41:0x7a5abaa35d8f5bb3!8m2!3d45.474297!4d-122.7191089"
                target="_blank"
                class="
                  px-4
                  py-1
                  bg-gray-900
                  hover:bg-red-700
                  transition
                  duration-50
                  rounded
                  shadow
                "
              >
                <font-awesome-icon :icon="['fa', 'map-marked-alt']" />
                <span class="pl-2">Gabriel Park</span>
              </a>
            </template>
          </h4>
        </div>
        <div>
          <button
            class="
              block
              my-1
              sm:m-2
              px-5
              py-1
              text-lg
              bg-gray-900
              hover:bg-red-700
              transition
              duration-50
              rounded
              shadow
            "
            @click="showRsvpForm = !showRsvpForm"
          >
            {{ showRsvpForm ? "Event Details" : "RSVP" }}
          </button>
        </div>
      </div>
    </div>
    <template v-if="!showRsvpForm">
      <img
        v-if="event.image"
        :src="event.image"
        alt="Next In-Person Event Banner"
      />
      <slot />
    </template>
    <form v-else class="w-3/4 m-auto" @submit.prevent="submitRsvpForm">
      <div class="mb-6">
        <label class="font-piratesbay text-xl">
          Your name
          <input
            v-model="formValues.name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            class="font-sans w-full bg-gray-900 shadow p-2 disabled:text-gray-500"
          />
        </label>
      </div>
      <div class="mb-6">
        <label class="font-piratesbay text-xl">
          Email address
          <input
            v-model="formValues.email"
            name="name"
            type="email"
            placeholder="your@address.here"
            required
            class="font-sans w-full bg-gray-900 shadow p-2 disabled:text-gray-500"
          />
        </label>
      </div>
      <button
        class="block m-auto px-5 py-2 text-xl bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow disabled:text-gray-500 disabled:hover:bg-gray-900"
      >
        Submit Registration
      </button>
    </form>
    <div
      v-if="formStatus === 'SUCCESS' || formStatus === 'ERROR'"
      class="
        mt-6
        py-6
        text-center text-2xl
        md:text-3xl
        font-piratesbay
        bg-gray-700
      "
    >
      <template v-if="formStatus === 'SUCCESS'">
        Submission received!
      </template>
      <template v-if="formStatus === 'ERROR'">
        Something went wrong, try again
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import axios from 'axios'

const Status = {
  IDLE: 'IDLE',
  SUBMITTING: 'SUBMITTING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

const props = defineProps({
  event: {
    type: Object,
    default: null,
  },
})

const showRsvpForm = ref(false)
const formValues = reactive({
  name: '',
  email: '',
})
const formStatus = ref(Status.IDLE)

const enableForm = computed(() => formStatus.value === Status.IDLE || formStatus.value === Status.ERROR)

function formatEventDate(date: Date) {
  return dayjs(date).format('MM/DD/YYYY h:mm a')
}
function submitRsvpForm() {
  if (!enableForm.value) return

  formStatus.value = Status.SUBMITTING

  axios
    .post('/.netlify/functions/rsvp', {
      ...formValues,
      eventName: props.event.title,
      eventDate: formatEventDate(props.event.date),
    })
    .then(() => {
      formStatus.value = Status.SUCCESS
    })
    .catch(() => {
      formStatus.value = Status.ERROR
    })
}
</script>
