<template>
  <div class="bg-primary-green">
    <TheHeader />
    <div class="flex items-start justify-between h-[100vh] shadow-md pt-16">
      <div class="w-full h-full bg-slate-200 text-slate-700">
        <slot />
      </div>
    </div>
  </div>
</template>
