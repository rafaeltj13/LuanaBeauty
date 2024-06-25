<template>
  <div class="bg-primary w-full py-32 flex items-center">
    <div
      class="px-8 xl:px-0 text-secondary flex lg:flex-nowrap flex-wrap items-center justify-center lg:justify-between max-w-screen-lg mx-auto"
    >
      <div class="lg:pr-8 lg:pb-0 pb-8">
        <img
          src="/make.png"
          alt="make"
          class="rounded-xl lg:w-[80vw] w-[50vw] h-[50-vh]"
        />
      </div>
      <div class="text-lg lg:pl-10">
        Escolher produtos de maquiagem veganos vai além de uma tendência de
        beleza, é um passo em direção a um estilo de vida mais consciente e
        responsável. Ao optar por produtos veganos, você abraça a beleza que
        respeita a vida animal e o meio ambiente. Estes produtos são criados sem
        qualquer ingrediente de origem animal, garantindo que sua rotina de
        beleza esteja alinhada com valores éticos e sustentáveis.
      </div>
    </div>
  </div>
  <div
    class="bg-secondary w-full py-32 flex items-center"
    :key="new Date().toISOString()"
  >
    <div
      class="px-8 xl:px-0 text-primary flex lg:flex-nowrap flex-wrap-reverse items-center justify-center lg:justify-between max-w-screen-lg mx-auto"
    >
      <div class="text-lg lg:pr-10 lg:pt-0 pt-8">
        Na <span class="font-bold">Khali Beauty</span>, acreditamos que a beleza
        vem em todos os tons e texturas. Por isso, nos dedicamos a utilizar uma
        linha de maquiagem que celebra e realça a beleza única de cada
        indivíduo. Com uma paleta de cores diversificada e rica, nossos produtos
        são meticulosamente formulados para se adaptarem a todos os tons de
        pele, garantindo uma cobertura impecável e natural.
      </div>
      <div class="lg:pl-8">
        <img
          src="/tons.jpeg"
          alt="make"
          class="rounded-xl lg:w-[80vw] w-[50vw] h-[50-vh]"
        />
      </div>
    </div>
  </div>
</template>
