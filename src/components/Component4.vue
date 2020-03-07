<template>
  <div>
    Component4
    <input type="text" v-model="val" />
    <button @click="submitData">提交</button>
  </div>
</template>
<script>
export default {
  name: "Component4",
  props: ["msg"],
  model: {
    prop: "msg",
    event: "on-callback"
  },
  data() {
    return {
      val: this.msg
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