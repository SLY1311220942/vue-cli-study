<template>
  <div>
    <h1>demo9-过滤器</h1>
    <!-- 过滤器 -->
    <div>{{"sdsdsAAdf" | uppercase}}</div>
    <div>{{"sdsdsAAdf" | lowercase}}</div>
    <!-- 带参数过滤器 -->
    <div>{{"sdsdsAAdf" | transform("upper")}}</div>
    <div>{{"sdsdsAAdf" | transform("lower")}}</div>
    <!-- 可以多个过滤器 -->
    <div>{{"sdsdsAAdf" | transform("lower") | join("-")}}</div>
    <!-- 全局过滤器 -->
    <div>{{"sdsdsAAdf" | globalUpperFilter}}</div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {};
  },
  methods: {},
  filters: {
    transform(value, type) {
      switch (type) {
        case "upper":
          return value.toUpperCase();
          break;
        case "lower":
          return value.toLowerCase();
          break;
        default:
          return value;
      }
    },
    uppercase(value) {
      return value.toUpperCase();
    },
    lowercase(value) {
      return value.toLowerCase();
    },
    join(value,str){
        return value.split("").join(str);
    }
  }
};
</script>