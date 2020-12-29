<template>
  <main class="flex flex-col items-center py-5 text-gray-300 container m-auto">
    <div class="demon-head-wrapper">
      <img
        src="~/assets/img/demon-head.png"
        class="demon-head py-5"
        alt="Demon Head"
      />
    </div>
    <h1 class="text-4xl font-piratesbay text-center">
      Welcome to the unoffical Portland, OR, Blood on the Clocktower group!
    </h1>
    <p class="py-8 w-3/5 m-auto">
      This group is for players of Blood On The Clocktower based in Portland,
      Oregon.
      <a
        class="underline text-red-300 hover:text-red-400"
        href="https://bloodontheclocktower.com/"
        >Blood on the Clocktower</a
      >
      is a social deduction game enjoyed by 5 to 20 players on opposing teams of
      good and evil. Think of it as Werewolf on steroids, where each player has
      a unique ability, and death is not the end as you continue to participate
      in the game even as a ghost.
    </p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" scoped>
.demon-head-wrapper {
  height: 540px;
  width: 466px;
}
</style>
