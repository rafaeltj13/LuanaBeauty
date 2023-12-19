<template>
  <div
    :class="{ 'shadow-xl opacity-90': !isScrollAtTop }"
    class="bg-primary w-full h-16 z-10 flex items-center fixed"
  >
    <div
      class="w-full max-w-[1160px] mx-auto flex items-center justify-between xl:px-0 px-4 md:px-12"
    >
      <p
        class="text-4xl cursor-pointer text-secondary"
        @click="navigateTo('/')"
      >
        LOGO
      </p>
      <div class="md:flex items-center gap-8 hidden">
        <UButton size="lg" color="white" variant="link" label="Serviços" />
        <UButton
          size="lg"
          color="white"
          variant="link"
          label="Perguntas"
          @click="navigateTo('/faq')"
        />
      </div>
      <UButton
        icon="i-heroicons-pencil-square"
        size="lg"
        color="emerald"
        variant="solid"
        label="AGENDAR"
        trailing
        class="hidden md:flex"
      />
      <div class="flex items-center gap-4 md:hidden">
        <UButton
          icon="i-heroicons-list-bullet"
          size="md"
          color="emerald"
          variant="link"
          trailing
        />
        <UButton
          icon="i-heroicons-pencil-square"
          size="md"
          color="emerald"
          variant="solid"
          trailing
        />
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
