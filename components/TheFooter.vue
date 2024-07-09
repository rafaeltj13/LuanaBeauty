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

const sendToWhatsapp = () => {
  window.open("https://wa.me/5585999999999", "_blank");
};
</script>

<template>
  <div class="bg-primary-green w-full flex items-center">
    <div
      class="xl:px-0 md:px-8 px-0 text-secondary-green flex flex-col items-center justify-center lg:flex-row lg:justify-between max-w-screen-lg mx-auto w-full"
    >
      <img src="/logo-name-secondary.png" class="w-60 h-52" />
      <div
        class="flex items-center gap-2 text-secondary-green cursor-pointer md:mb-0 mb-8"
        @click="scrollToTop"
      >
        <p class="text-md">Voltar ao topo</p>
        <UIcon name="i-ph-caret-double-up-bold" class="text-xs" />
      </div>
      <div
        class="flex items-center justify-center pb-8 md:justify-end md:pb-0 gap-4 w-60"
      >
        <UIcon
          name="i-ph-whatsapp-logo"
          @click="sendToWhatsapp"
          class="text-3xl text-secondary-green cursor-pointer"
        />
        <UIcon
          name="i-ph-instagram-logo"
          class="text-3xl text-secondary-green cursor-pointer"
          @click="openInstagram"
        />
        <a
          href="mailto:luanaxsabrina@gmail.com"
          class="flex items-center justify-center"
        >
          <UIcon
            name="i-ph-envelope"
            class="text-3xl text-secondary-green cursor-pointer"
          />
        </a>
      </div>
    </div>
  </div>
</template>
