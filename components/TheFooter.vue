<template>
  <div class="bg-primary w-full py-12 flex items-center">
    <div
      class="xl:px-0 md:px-8 px-0 text-secondary flex flex-col items-center justify-center lg:flex-row lg:justify-between max-w-[1160px] mx-auto w-full"
    >
      <p
        class="text-4xl cursor-pointer text-secondary lg:pb-0 pb-8"
        @click="navigateTo('/')"
      >
        LOGO
      </p>
      <div class="flex items-center gap-4">
        <UButton
          icon="i-ph-instagram-logo"
          size="sm"
          color="primary"
          square
          variant="solid"
        />
        <UButton
          icon="i-ph-whatsapp-logo"
          size="sm"
          color="primary"
          square
          variant="solid"
        />
        <p class="text-xl text-secondary font-bold">Khali Beauty</p>
      </div>
    </div>
  </div>
</template>
