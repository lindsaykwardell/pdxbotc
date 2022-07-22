<template>
  <div v-if="!loaded">Loading, please wait</div>
  <tempalte v-else>
    <Event v-for="event in events" :key="event.id" :event="event" />
  </tempalte>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Event from "./Event.vue";

const loaded = ref(false);
const events = ref([]);

onMounted(() => {
  fetchEvents();
});

function fetchEvents() {
  fetch("/.netlify/functions/events")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      events.value = res;
      loaded.value = true;
    })
    .catch(() => {
      fetchEvents();
    });
}
</script>
