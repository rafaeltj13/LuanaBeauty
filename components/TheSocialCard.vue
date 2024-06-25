<template>
  <div
    class="rounded-xl h-96 w-80 shadow-xl cursor-pointer hover:shadow-2xl hover:border-2 hover:border-primary transition ease-in-out"
    :key="new Date().toISOString()"
    @click="redirectToLink"
  >
    <img
      :src="coverSrc"
      alt="cover"
      class="rounded-t-xl h-56 w-full object-cover"
    />
    <div class="p-4 flex">
      <img
        :src="profileSrc"
        alt="profile"
        class="w-12 h-12 rounded-full mr-4"
      />
      <div class="flex flex-col justify-start items-start">
        <p class="text-primary text-xl font-bold">{{ name }}</p>
        <p class="text-sm pt-3">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps([
  "coverSrc",
  "profileSrc",
  "name",
  "description",
  "redirect",
]);

const redirectToLink = () => {
  window.open(props.redirect, "_blank");
};
</script>
