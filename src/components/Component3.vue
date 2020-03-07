<template>
  <div>
    Component3
    <input type="text" v-model="val" />
    <button @click="submitData">提交</button>
  </div>
</template>
<script>
export default {
  name: "Component3",
  props: ["text"],
  data() {
    return {
      val: this.text,
      val2: this.msg
    };
  },
  methods: {
    submitData() {
      this.$emit("on-callback", this.val);
    }
  }
};
</script>
<style lang="less" scoped>
</style>