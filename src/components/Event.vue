<template>
  <div v-if="event" class="p-3 w-full bg-gray-800 my-4">
    <div class="border-b border-gray-500 mb-4 p-4">
      <h3 class="text-2xl md:text-3xl text-white font-piratesbay flex-grow">
        {{ event.title }}
      </h3>
      <div class="flex flex-col sm:flex-row">
        <div class="flex-grow flex flex-col gap-3">
          <h4>When: {{ formatEventDate(event.date) }}</h4>
          <h4>
            Where:
            <a
              v-if="!event.location || event.location.includes('http')"
              href="https://discord.gg/HMVv8rgFTY"
              target="_blank"
              class="px-4 py-2 bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--carbon"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M13.647 14.907a1.448 1.448 0 1 0 1.326 1.443a1.385 1.385 0 0 0-1.326-1.443Zm4.745 0a1.448 1.448 0 1 0 1.326 1.443a1.385 1.385 0 0 0-1.326-1.443Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M24.71 4H7.29a2.671 2.671 0 0 0-2.665 2.678v17.576a2.671 2.671 0 0 0 2.665 2.678h14.742l-.689-2.405l1.664 1.547l1.573 1.456L27.375 30V6.678A2.671 2.671 0 0 0 24.71 4Zm-5.018 16.978s-.468-.559-.858-1.053a4.102 4.102 0 0 0 2.353-1.547a7.44 7.44 0 0 1-1.495.767a8.556 8.556 0 0 1-1.885.559a9.107 9.107 0 0 1-3.367-.013a10.913 10.913 0 0 1-1.911-.559a7.618 7.618 0 0 1-.949-.442c-.039-.026-.078-.039-.117-.065a.18.18 0 0 1-.052-.039a4.56 4.56 0 0 1-.364-.221a4.043 4.043 0 0 0 2.275 1.534c-.39.494-.871 1.079-.871 1.079a4.713 4.713 0 0 1-3.965-1.976a17.409 17.409 0 0 1 1.872-7.579a6.428 6.428 0 0 1 3.653-1.365l.13.156a8.77 8.77 0 0 0-3.419 1.703s.286-.156.767-.377a9.762 9.762 0 0 1 2.951-.819a1.28 1.28 0 0 1 .221-.026a11 11 0 0 1 2.626-.026a10.597 10.597 0 0 1 3.913 1.248a8.652 8.652 0 0 0-3.237-1.651l.182-.208a6.428 6.428 0 0 1 3.653 1.365a17.409 17.409 0 0 1 1.872 7.579a4.752 4.752 0 0 1-3.978 1.976Z"
                ></path>
              </svg>
              <span class="pl-2">Discord</span>
            </a>
            <a
              v-else-if="event.location.toLowerCase().includes('cloudcap')"
              href="https://cloudcapgames.com/"
              class="px-4 py-2 bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--carbon"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13Zm0-20a6.07 6.07 0 0 0-6 6.13a6.19 6.19 0 0 0 1.49 4L16 20.52L20.63 14A6.24 6.24 0 0 0 22 10.13A6.07 6.07 0 0 0 16 4Z"
                ></path>
                <circle cx="16" cy="9" r="2" fill="currentColor"></circle>
                <path
                  fill="currentColor"
                  d="M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"
                ></path>
              </svg>
              <span class="pl-2">Cloud Cap Games</span>
            </a>
            <a
              v-else
              :href="`https://maps.google.com/?q=${event.location}`"
              target="_blank"
              class="px-4 py-2 bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--carbon"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13Zm0-20a6.07 6.07 0 0 0-6 6.13a6.19 6.19 0 0 0 1.49 4L16 20.52L20.63 14A6.24 6.24 0 0 0 22 10.13A6.07 6.07 0 0 0 16 4Z"
                ></path>
                <circle cx="16" cy="9" r="2" fill="currentColor"></circle>
                <path
                  fill="currentColor"
                  d="M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"
                ></path>
              </svg>
              <span class="pl-2">{{ event.location }}</span>
            </a>
          </h4>
        </div>
        <div>
          <!-- <a
            class="block my-1 sm:m-2 px-7 py-3 text-2xl bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow"
            href="`https://discord.gg/XbQw9Wu7Uv?event=${event.id}`"
            target="_blank"
          >
            RSVP
          </a> -->
          <button
            class="block my-1 sm:m-2 px-7 py-3 text-2xl bg-gray-900 hover:bg-red-700 transition duration-50 rounded shadow"
            @click="showRsvpForm = !showRsvpForm"
          >
            {{ showRsvpForm ? "Event Details" : "RSVP" }}
          </button>
        </div>
      </div>
    </div>
    <img v-if="event.image" :src="event.image" alt="Next In-Person Event Banner" />
    <div
      v-if="!showRsvpForm"
      class="p-6 prose max-w-none m-auto whitespace-pre-wrap"
    >
      {{ event.description }}
    </div>
    <form v-else class="w-3/4 m-auto pt-4" @submit.prevent="submitRsvpForm">
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
      class="mt-6 py-6 text-center text-2xl md:text-3xl font-piratesbay bg-gray-700"
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

<script setup>
import { ref, reactive, computed } from "vue";
import dayjs from "dayjs";
import axios from "axios";

const Status = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const props = defineProps({
  event: {
    type: Object,
    default: null,
  },
});

const showRsvpForm = ref(false);
const formValues = reactive({
  name: "",
  email: "",
});
const formStatus = ref(Status.IDLE);

const enableForm = computed(
  () => formStatus.value === Status.IDLE || formStatus.value === Status.ERROR
);

function formatEventDate(date) {
  return dayjs(date).format("MM/DD/YYYY h:mm a");
}
function submitRsvpForm() {
  if (!enableForm.value) return;

  formStatus.value = Status.SUBMITTING;

  axios
    .post("/.netlify/functions/rsvp", {
      ...formValues,
      eventName: props.event.title,
      eventDate: formatEventDate(props.event.date),
    })
    .then(() => {
      formStatus.value = Status.SUCCESS;
    })
    .catch(() => {
      formStatus.value = Status.ERROR;
    });
}
</script>
