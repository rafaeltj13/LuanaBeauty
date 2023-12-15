<template>
  <div
    class="rounded-md h-96 w-64 shadow-md cursor-pointer hover:shadow-xl hover:border-4 hover:border-primary transition ease-in-out"
    :key="new Date().toISOString()"
    @click="redirectToLink"
  >
    <img
      :src="coverSrc"
      alt="cover"
      class="rounded-t-md h-48 w-full object-cover"
    />
    <div class="p-4">
      <div class="flex items-center">
        <img :src="profileSrc" alt="profile" class="w-14 rounded-full mr-4" />
        <p class="text-primary text-sm font-bold">{{ name }}</p>
      </div>
      <p class="mt-4">¨{{ description }}¨</p>
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
