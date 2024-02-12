<script setup>
const data = [
  'https://i.postimg.cc/Pd4FL873/IMG-20240109-WA0003.jpg',
  'https://i.postimg.cc/08XWn1P7/IMG-20240109-WA0005.jpg',
  'https://i.postimg.cc/ChWvyCZ1/263A1710.jpg',
  'https://i.postimg.cc/cWjk8WDS/263A1722.jpg',
  'https://i.postimg.cc/tpGr25Qv/GMC10012023-153112.jpg',
  'https://i.postimg.cc/YpCDQCKp/IMG-20231108-WA0004.jpg',
  'https://i.postimg.cc/fZ92cPF0/IMG-20240108-WA0007.jpg',

]

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const options = {
  rewind: true,
  autoplay: 3000,
  perPage: 3,
  perMove: 1,
  gap: '2rem',
  type: 'loop',
  rewindSpeed: 3000,
  autoplayDelay: 30000,
  arrows: false,
  pagination: false,
  extensions: { AutoScroll },
  autoScroll: {
    speed: 100,
    pauseOnHover: true,
    pauseOnFocus: false,
  },
  interval: 1000,
    breakpoints: {
    725: { perPage: 1 },
    1056: { perPage: 2 },
    1350: { perPage: 3 },
    1700: { perPage: 4 },
    1800: { perPage: 4 },
    2000: { perPage: 5 },
    2500: { perPage: 5 },
    3500: { perPage: 6 },
    4500: { perPage: 7 },
    5500: { perPage: 8 },
    6500: { perPage: 9 },
    7500: { perPage: 10 },

  },
};


</script>

<template>
  <div class="flex flex-col gap-5 max-sm:gap-4 sm:pb-10 pb-6 max-vsm:py-4 overflow-hidden">
    <div class="flex justify-between px-8">
      <span class="text-center font-extrabold font-montserrat text-[45px] max-sm:text-[45px] max-ssm:text-[40px] max-vsm:text-[30px] max-vvsm:text-[30px]">Gallery</span>
    </div>
    <div class="flex justify-center items-center">
      <Splide :options="options" class="flex justify-center">
        <SplideSlide v-for="(image ,index) in data" :key="index"
          class="flex overflow-hidden justify-center max-vsm:w-full w-[465px] h-[260px] bg-transparent">
          <img :src="image" :alt="'Gallery image - ' + (index+1)"
            class="flex justify-center active:cursor-grabbing cursor-grab rounded-3xl object-cover"
          >
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style scoped>
.carousel-container-c {
  animation: carousel-scroll 18s linear infinite;
}

@keyframes carousel-scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-465px * 8))}
}

</style>