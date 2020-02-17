<template>
  <div>
    <h1>demo5-事件修饰符</h1>
    <div @click="fatherClick">
      父级
      <div @click="subClick1">子级一</div>
      <!-- 阻止冒泡修饰符 stop -->
      <div @click.stop="subClick2">子级二</div>
      <!-- 阻止默认事件修饰符 prevent -->
      <div @click.right.prevent="rightClick">点击右键</div>
    </div>

    <hr />
    <!-- self修饰符（必须点到自己才执行） -->
    <div @click.self="fatherClick">
      父级
      <div @click="subClick1">子级一</div>
    </div>

    <hr />
    <div>
      <input type="text" @keydown.ctrl="ctrlEvent" />
      <br />
      <input type="text" @keydown.enter="submit" />
      <br />
      <input type="text" @keydown.space.prevent="spaceEvent" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {};
  },
  methods: {
    fatherClick() {
      console.log("父级事件");
    },
    subClick1() {
      console.log("子级一事件");
    },
    subClick2() {
      console.log("子级二事件");
    },
    rightClick() {
      console.log("点击右键");
    },
    ctrlEvent() {
      console.log("按下ctrl键");
    },
    submit() {
      console.log("提交");
    },
    spaceEvent() {
      console.log("阻止输入空格");
    }
  }
};
</script>