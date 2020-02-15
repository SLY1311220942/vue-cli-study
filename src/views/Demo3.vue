<template>
  <div>
    <h1>demo3-[v-if,v-for]条件判断和遍历</h1>
    <h3>v-if控制显示</h3>
    <div v-if="isShow">isShow为true时显示</div>
    <div v-else-if="isElse">isElse为true时显示</div>
    <div v-else>所有条件都不满足</div>

    <!-- 一次控制多个 -->
    <div v-if="isShow2">
      <div>第一行</div>
      <div>第二行</div>
    </div>
    <!-- template不会渲染到dom中 -->
    <template v-if="isShow2">
      <div>第一行</div>
      <div>第二行</div>
    </template>

    <!-- v-show -->
    <div v-show="isShow3">v-show</div>

    <div>
      <b>v-if隐藏是将元素移除，v-show是改变display样式</b>
    </div>

    <!-- v-for遍历数组 -->
    <h3>v-for遍历数组</h3>
    <div v-for="item in array1" :key="item">{{item}}</div>
    <hr />
    <div v-for="item in array1" :key="item + 100">{{item + 1}}</div>
    <hr />
    <!-- 获取索引值index -->
    <div v-for="(item,index) in array1" :key="index + 200">{{item + ":" + index}}</div>

    <hr />
    <!-- 遍历对象 -->
    <div v-for="(item,key,index) in obj" :key="index + 300">{{index + ":" + item + ":" + key }}</div>
    <hr />
    <!-- in可以换成of -->
    <div v-for="(item,key,index) of obj" :key="index + 400">{{index + ":" + item + ":" + key }}</div>

    <ul :style="{textAlign:'left'}">
      <li v-for="(item,index) in news" :key="index + 500">{{item.id + ":" + item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo3",
  data() {
    return {
      isShow: true,
      isElse: true,
      isShow2: true,
      isShow3: true,
      array1: [1, 2, 3, 4, 5],
      obj: {
        name: "张三",
        sex: "男",
        age: 20
      },
      news: [
        { id: 0, title: "标题一" },
        { id: 1, title: "标题二" },
        { id: 2, title: "标题三" }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShow = false;
      this.isShow3 = false;
    }, 3000);

    setTimeout(() => {
      this.isElse = false;
    }, 6000);
  }
};
</script>