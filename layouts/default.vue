<template>
  <TheHeader />
  <div class="flex items-start justify-between h-[calc(100vh-4rem)] shadow-md">
    <div class="w-full h-full bg-slate-200 p-10 text-slate-700">
      <slot />
    </div>
  </div>
</template>

<script setup>
const ui = /*ui*/ {
  background: "bg-white dark:bg-red-900",
};
</script>
