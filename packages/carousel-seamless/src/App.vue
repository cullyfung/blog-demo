<script setup lang="ts">
import { onMounted, ref } from 'vue';

const carouselItemRef = ref<HTMLDivElement[] | null>(null);
const carouselWrapperRef = ref<HTMLDivElement | null>(null);
const currentIndex = ref(0);

const carouselItemWidth = ref(220);

const slides = ref([
  {
    id: 1,
    title: 'Slide 1',
    content: 'This is the content of slide 1',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 2,
    title: 'Slide 2',
    content: 'This is the content of slide 2',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 3,
    title: 'Slide 3',
    content: 'This is the content of slide 3',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 4,
    title: 'Slide 4',
    content: 'This is the content of slide 4',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 5,
    title: 'Slide 5',
    content: 'This is the content of slide 5',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 6,
    title: 'Slide 6',
    content: 'This is the content of slide 6',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 7,
    title: 'Slide 7',
    content: 'This is the content of slide 7',
    image: 'https://via.placeholder.com/200'
  }
]);

onMounted(() => {
  let firstItem = carouselItemRef.value![0].cloneNode(true);
  const lastItem = carouselItemRef.value![slides.value.length - 1].cloneNode(true);
  carouselWrapperRef.value?.appendChild(firstItem);
  carouselWrapperRef.value?.insertBefore(lastItem, carouselWrapperRef.value?.firstChild);
});

const moveTo = (index: number) => {
  currentIndex.value = index;

  carouselWrapperRef.value!.style.transform = `translateX(-${index * carouselItemWidth.value}px)`;
  carouselWrapperRef.value!.style.transition = 'transform 0.3s ease-in-out';
};

const moveLeft = () => {
  if (currentIndex.value > 0) {
    moveTo(currentIndex.value - 1);
  } else {
    carouselWrapperRef.value!.style.transition = 'none';
    carouselWrapperRef.value!.style.transform = `translateX(-${
      slides.value.length * carouselItemWidth.value
    }px)`;
    carouselWrapperRef.value?.offsetHeight;
    moveTo(slides.value.length - 1);
  }
};

const moveRight = () => {
  if (currentIndex.value < slides.value.length - 1) {
    moveTo(currentIndex.value + 1);
  } else {
    carouselWrapperRef.value!.style.transition = 'none';
    carouselWrapperRef.value!.style.transform = `translateX(-${carouselItemWidth.value}px)`;
    carouselWrapperRef.value?.offsetHeight;
    moveTo(0);
  }
};
</script>

<template>
  <div class="relative w-640px my100px mx-auto font-mono">
    <div
      role="button"
      class="w10 h10 hover:bg-blue-500 cursor-pointer absolute top-1/2 -left-70px -translate-y-1/2 leading-50px text-blue-400 i-ant-design:left-circle-filled"
      @click="moveLeft"
    ></div>

    <div
      role="button"
      class="w10 h10 hover:bg-blue-500 cursor-pointer absolute top-1/2 left-660px -translate-y-1/2 leading-50px text-blue-400 i-ant-design:right-circle-filled"
      @click="moveRight"
    ></div>

    <div class="w640px overflow-hidden my0 mx-auto">
      <div
        class="whitespace-nowrap"
        ref="carouselWrapperRef"
      >
        <div
          ref="carouselItemRef"
          v-for="item in slides"
          :key="item.id"
          class="inline-block w200px h200px mr20px rounded-md overflow-hidden relative"
        >
          <h2 class="absolute bottom-0 left-0 right-0 text-center text-blue-500">
            {{ item.title }}
          </h2>
          <img
            :src="item.image"
            alt="image"
            class="block w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 640px;
  margin: 100px auto;

  button {
    position: absolute;
    line-height: 50px;
    text-align: center;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fee;
    top: 50%;
    transform: translateY(-50%);
    outline: none;
    border: 1px solid #fee;
    font-size: 24px;
    color: #fb8;
    cursor: pointer;
  }

  button.left-arrow {
    left: -70px;
  }
  button.right-arrow {
    left: 660px;
  }
}
.carousel-container {
  width: 640px;
  overflow: hidden;
  margin: 0 auto;

  .carousel-wrapper {
    white-space: nowrap;
  }

  .carousel-item {
    // float: left;
    display: inline-block;
    width: 200px;
    height: 200px;
    margin-right: 20px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    .title {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      color: #fe2;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
