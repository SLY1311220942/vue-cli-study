<template>
  <div>
    <h1>demo1-数据绑定</h1>
    <div>
      <p>{{msg}}</p>
      <p>{{type + ":" + msg}}</p>
    </div>
    <!-- v-bind绑定属性 -->
    <div v-bind:title="title" v-bind:msg="msg">这是一个div</div>
    <!-- 简写 -->
    <div :title="title" :msg="msg">这是一个div</div>
    <!-- 绑定动态属性 -->
    <div :[attrName]="msg">绑定动态属性</div>
  </div>
</template>

<script>
export default {
  name: "Demo1",
  data() {
    return {
      msg: "demo1",
      type: "vue",
      title: "这是一个div",
      attrName: 'title'
    };
  },
  mounted() {
    // 页面渲染完成后执行

    setTimeout(() => {
      this.msg = "哈哈";
      this.attrName = "msg"
    }, 3000);
  }
};
</script>