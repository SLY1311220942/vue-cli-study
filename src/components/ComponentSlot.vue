<template>
  <div>
    <h2>{{title}}</h2>
    <!-- slot可以展示传递过来的内容 -->
    <slot></slot>
    <slot name="btns"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: "SlotDemo",
  props: ["title"]
};
</script>
<style lang="less" scoped>
</style>