<script setup></script>
<template>
    <div class="app-container flex justify-center relative mt-24 max-md:gap-6 max-xl:gap-12 gap-24 flex-wrap place-items-center">
      <img class="md:w-[40%] max-ssm:w-[85%] w-[70%]" src="https://i.postimg.cc/PqMWFdzq/7161412-removebg-preview.png" alt="temp"/>
      <div class="overlay-box2 lg:w-[40%]  md:w-[50%] max-md:px-4 max-sm:w-[90%] max-vsm:w-[95%] w-[75%] mb-3">
          <h2 class="overlay-heading2 font-extrabold font-montserrat text-left text-[50px] pb-8 max-sm:pb-4 max-lg:pb-4 max-sm:text-[55px] max-ssm:text-[45px] max-vsm:text-[35px] max-vvsm:text-[30px]">
            Theme
          </h2>
          <p class="mb-3 font-montserrat flex justify-center text-[18px] max-sm:text-[18px] max-ssm:text-[16px] max-vsm:text-[16px]">Thematic dance is a form of dance that incorporates a specific theme or concept into the choreography, music, costumes, and overall performance. It aims to convey a particular message, story, or emotional expression through movement and artistic expression. Themed dance is a potent medium for artistic expression and communication, whether it be a modern production addressing social issues or a historical one based in cultural heritage. Thematic dance allows choreographers and dancers to explore a wide range of topics and emotions while showcasing their creativity and storytelling abilities.<br><br>
          </p>
        </div>
      </div>
</template>

<style scoped>
.app-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  background-color: #000;
}
.overlay-box2{
  background-color: transparent;
  border-radius: 10px;
  text-align: left;
  color: #fff;
}

.overlay-box2 p {
  letter-spacing: 1px;
}

.overlay-heading2 {
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
}

</style>