<template>
  <div class="container">
    <div class="element"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #fbf;
  margin: 20px auto;
}

.element {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: #fb3;
}
</style>
