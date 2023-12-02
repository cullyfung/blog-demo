<template>
  <div class="container">
    <div class="centered">
      <div class="content">content</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  display: table;
  text-align: center;
  background-color: #f92;
  width: 200px;
  height: 200px;
  margin: 20px auto;
}

.centered {
  display: table-cell;
  vertical-align: middle;
}

.content {
  display: inline-block;
  background-color: #fb7299;
  width: 100px;
  height: 100px;
}
</style>
