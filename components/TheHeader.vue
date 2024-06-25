<template>
  <div
    :class="{ 'shadow-xl opacity-90': !isScrollAtTop }"
    class="bg-primary w-full h-20 z-10 flex items-center fixed"
  >
    <div
      class="w-full max-w-screen-lg mx-auto flex items-center justify-between xl:px-0 px-4 md:px-12"
    >
      <p
        class="text-4xl cursor-pointer text-secondary"
        @click="navigateTo('/')"
      >
        LOGO
      </p>
      <div class="relative inline-flex group">
        <div
          class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-neutral-50 to-neutral-50 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
        ></div>
        <a
          href="#"
          title="Get quote now"
          class="relative inline-flex items-center justify-center px-8 py-2 text-md font-bold text-primary transition-all duration-200 bg-neutral-50 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
          >Contato
        </a>
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
</script>
