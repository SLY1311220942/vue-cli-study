<template>
  <div>
    <div>{{text}}</div>
    <div>{{num}} - {{typeof num}}</div>
    <div>{{obj}}</div>
    <div>{{array}}</div>
    <div>
      <button @click="modify">修改</button>
      {{txt}}
    </div>
    <div>加一:{{number}}</div>
    <div>{{flag}}</div>
    <hr />
  </div>
</template>
<script>
export default {
  name: "Component2",
  data() {
    return {
      // 传入的参数是不能修改的，如果要修改的话需要自己定义一个数据，修改时修改自己定义的数据
      txt: this.text
    };
  },
  // props: ["text", "num", "obj", "array", "bool"],
  // 为props添加校验
  props: {
    text: {
      type: String,
      required: false,
      default: "默认参数"
    },
    num: {
      type: Number,
      validator(value) {
        return value > 10;
      }
    },
    obj: {
      type: Object
    },
    array: {
      type: Array
    },
    bool: {
      type: Boolean
    }
  },
  methods: {
    modify() {
      this.txt = "已经修改了";
    }
  },
  computed: {
    number() {
      return this.num + 1;
    },
    flag() {
      return this.bool ? "yes" : "no";
    }
  }
};
</script>
<style lang="less" scoped>
</style>