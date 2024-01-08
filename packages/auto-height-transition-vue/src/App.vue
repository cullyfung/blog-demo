<script setup lang="ts">
import { ref } from 'vue';

const container = ref<HTMLDivElement | null>(null);
const collapse = ref(false);

const handleClick = () => {
  if (!container.value) {
    return;
  }

  collapse.value = !collapse.value;

  container.value.style.height = 'auto';
  const contentHeight = container.value.offsetHeight;
  container.value.style.transition = 'none';
  container.value.style.height = '0';

  //  Force reflow.
  container.value.offsetHeight;
  container.value.style.height = collapse.value ? '5rem' : `${contentHeight}px`;
  container.value.style.transition = 'height 1s';
};
</script>

<template>
  <div class="m-10">
    <button
      @click="handleClick"
      class="outline-none px-4 py-2 border-blue-200 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      {{ collapse ? '展开' : '收起' }}
    </button>
    <div
      ref="container"
      class="text-base w-32 p-2 border overflow-hidden leading-6 pr-[1em] text-ellipsis relative"
    >
      这是一个天才辈出的世界，每个人都有机会成为万众瞩目的存在。在这个世界中，斗气大陆上有着无数的天才少年少女，他们拥有着各自不同的天赋和能力，为了争夺无上的荣耀和地位，展开了激烈角逐。萧炎，就是其中一个天赋异禀的少年，他的家族曾经是斗气大陆上的赫赫有名的大族，然而，在一场意外中，家族遭受重创，萧炎也从此背负起了家族的重任。
    </div>
  </div>
</template>

<style scoped></style>
