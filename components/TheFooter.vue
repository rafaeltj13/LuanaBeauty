<script setup lang="ts">
const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const openInstagram = () => {
  window.open("https://www.instagram.com/luanatbeauty/", "_blank");
};
</script>

<template>
  <div class="bg-primary w-full py-12 flex items-center">
    <div
      class="xl:px-0 md:px-8 px-0 text-secondary flex flex-col items-center justify-center lg:flex-row lg:justify-between max-w-screen-lg mx-auto w-full"
    >
      <p
        class="text-4xl cursor-pointer text-secondary lg:pb-0 pb-8"
        @click="navigateTo('/')"
      >
        LOGO
      </p>
      <div
        class="flex items-center gap-2 text-neutral-50 cursor-pointer md:mb-0 mb-4"
        @click="scrollToTop"
      >
        <p class="text-md">Voltar ao topo</p>
        <UIcon name="i-ph-caret-double-up-bold" class="text-xs" />
      </div>
      <div class="flex items-center gap-4">
        <UIcon
          name="i-ph-whatsapp-logo"
          class="text-3xl text-neutral-50 cursor-pointer"
        />
        <UIcon
          name="i-ph-instagram-logo"
          class="text-3xl text-neutral-50 cursor-pointer"
          @click="openInstagram"
        />
        <UIcon
          name="i-ph-envelope"
          class="text-3xl text-neutral-50 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
