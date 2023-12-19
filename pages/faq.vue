<template>
  <div class="w-full h-full bg-secondary">
    <div class="p-12">
      <div class="h-[70vh] w-full flex flex-col items-center justify-start">
        <p class="text-4xl text-primary mb-20">Perguntas frequentes</p>
        <UAccordion
          color="primary"
          variant="ghost"
          size="lg"
          :items="[
            {
              label: '1. What is Nuxt UI?',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
              label: '2. Getting Started',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
              label: '3. Theming',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
              label: '4. Components',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
          ]"
          :ui="{ hover: 'hover:text-secondary' }"
        />
      </div>
    </div>
    <TheFooter />
  </div>
</template>
