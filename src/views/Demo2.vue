<template>
  <div>
    <h1>demo2-class和style绑定</h1>
    <!-- 绑定一个class -->
    <div :class="classA">绑定一个class</div>
    <!-- 通过数组绑定多个class -->
    <div :class="[classA,classB]">通过数组绑定多个class</div>
    <!-- 通过对象绑定class -->
    <div :class="classObj">通过对象绑定class</div>
    <div :class="{current: false,focus: true}">通过对象绑定class</div>
    <div :class="{current: isCurrent,focus: isFocus}">通过对象绑定class</div>

    <!-- 绑定style -->
    <div :style="{color:'red',fontSize:'18px'}">绑定style</div>
    <div :style="{color:color,fontSize:fontSize}">绑定style</div>
    <div :style="styleObj">绑定style</div>
  </div>
</template>

<script>
export default {
  name: "Demo2",
  data() {
    return {
      classA: "current",
      classB: "focus",
      classObj: {
        current: true,
        focus: false
      },
      isCurrent: true,
      isFocus: true,
      color: "blue",
      fontSize: "26px",
      styleObj: {
        color: "green",
      fontSize: "18px",
      }
    };
  }
};
</script>