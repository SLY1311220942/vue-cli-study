<template>
  <div>
    <h1>demo12-子组件与父组件通讯</h1>
    <div>
      <div>使用回调函数</div>
      <Component3 :text="content" @on-callback="getData"></Component3>
      <div>{{content}}</div>
    </div>
    <div>
      <div>使用v-model方式</div>
      <Component4 v-model="content2"></Component4>
      <div>{{content2}}</div>
    </div>
  </div>
</template>

<script>
import Component3 from "../components/Component3";
import Component4 from "../components/Component4";

export default {
  name: "Demo12",
  data() {
    return {
      content: "哈",
      content2: "哈2"
    };
  },
  methods: {
    getData(val) {
      console.log(val);
      this.content = val;
    }
  },
  components: {
    Component3,
    Component4
  }
};
</script>