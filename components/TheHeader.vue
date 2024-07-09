<template>
  <div
    :class="{ 'shadow-xl opacity-90': !isScrollAtTop }"
    class="bg-primary-green w-full z-10 flex items-center fixed h-20 transition"
  >
    <div
      class="w-full max-w-screen-lg mx-auto flex items-center justify-between xl:px-0 px-4 md:px-12"
    >
      <div class="flex items-center">
        <img src="/logo-secondary.png" class="w-20 h-20 relative" />
        <p class="text-sm md:text-xl text-secondary-green">
          LUANA TOMAZ BEAUTY
        </p>
      </div>
      <div class="relative inline-flex group">
        <div
          class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-secondary-green to-secondary-green rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
        ></div>
        <div
          @click="sendToWhatsapp"
          class="relative inline-flex items-center justify-center px-4 md:px-8 py-2 text-md font-bold text-primary-green transition-all duration-200 bg-secondary-green font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          <p class="hidden md:inline">Contato</p>
          <UIcon
            name="i-ph-whatsapp-logo"
            class="text-2xl text-primary-green cursor-pointer inline md:hidden"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isScrollAtTop = ref(true);

const handleScroll = () => {
  isScrollAtTop.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const sendToWhatsapp = () => {
  window.open("https://wa.me/5585999999999", "_blank");
};
</script>
