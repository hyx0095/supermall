<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
  #tab-bar {
    /* flex布局 */
    display: flex;
    /* 背景颜色 */
    background-color: #f6f6f6;

    /* 位置底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 阴影 (x偏移量 y偏移量 模糊程度 颜色) */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }
</style>
