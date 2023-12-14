<template>
  <div
    :class="{ 'shadow-xl': !isScrollAtTop }"
    class="bg-primary w-full h-16 z-10 flex items-center fixed"
  >
    <div
      class="w-full max-w-[1160px] mx-auto flex items-center justify-between"
    >
      <p class="text-4xl cursor-pointer">LOGO</p>
      <div class="flex items-center gap-8">
        <UButton size="lg" color="white" variant="link" label="Serviços" />
        <UButton size="lg" color="white" variant="link" label="Contato" />
      </div>
      <UButton
        icon="i-heroicons-pencil-square"
        size="lg"
        color="emerald"
        variant="solid"
        label="AGENDAR"
        trailing
      />
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
