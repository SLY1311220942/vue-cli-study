<template>
  <div>
    <h1>demo11-组件</h1>
    <Component1></Component1>
    <Component2 text="自定义组件接收参数"></Component2>
    <Component2></Component2>
    <Component2 :text="msg"></Component2>
    <!-- 对象和数字必须通过动态绑定的方式传参 -->
    <Component2 text="对象和数字必须通过动态绑定的方式传参" :num="11" :obj="obj" :array="array" :bool="false"></Component2>
  </div>
</template>

<script>
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";

export default {
  name: "Demo11",
  data() {
    return {
      msg: "传递动态参数",
      obj: {
        a: 1,
        b: 2,
        c: 3
      },
      array: [5, 4, 3, 2, 1],
      bool: false
    };
  },
  methods: {},
  components: {
    Component1,
    Component2
  }
};
</script>