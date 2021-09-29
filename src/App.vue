<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Blood on the Clocktower | Unofficial Portland Group',
  meta: [
    { name: 'description', content: 'The home of the unofficial Blood on the Clocktower group in Portland, OR' },
  ],
})
</script>

<template>
  <router-view />
</template>
