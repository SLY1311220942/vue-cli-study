<template>
  <div>
    <h1>demo10-自定义指令</h1>
    <input type="text" v-focus />
    <div class="drag" v-drag></div>
  </div>
</template>

<script>
// 自定义指令集成第三方插件
import drag from "../plugins/drag";

export default {
  name: "Demo",
  data() {
    return {};
  },
  methods: {},
  directives: {
    focus: {
      inserted: (el, binding) => {
        console.log(binding);
        el.focus();
      }
    },
    drag: {
      inserted: el => {
        drag(el);
      }
    }
    // drag: {
    //   inserted: (el, binding) => {
    //     const fnDown = ev => {
    //       let currentX = el.offsetLeft;
    //       let currentY = el.offsetTop;

    //       let downX = ev.clientX;
    //       let downY = ev.clientY;

    //       const fnMove = ev => {
    //         let left = ev.clientX - downX + currentX;
    //         let top = ev.clientY - downY + currentY;

    //         el.style.left = left + "px";
    //         el.style.top = top + "px";
    //       };

    //       const fnUp = ev => {
    //         document.removeEventListener("mousemove", fnMove, false);
    //         document.removeEventListener("mouseup", fnUp, false);
    //       };

    //       document.addEventListener("mousemove", fnMove, false);
    //       document.addEventListener("mouseup", fnUp, false);
    //     };

    //     el.addEventListener("mousedown", fnDown, false);
    //   }
    // }
  }
};
</script>

<style lang="less" scoped>
.drag {
  position: absolute;
  height: 300px;
  width: 400px;
  background: red;
}
</style>