<template>
  <div>
    <h1>demo4-事件绑定</h1>
    <div>{{ count }}</div>
    <button v-on:click="add">加1</button>
    <!-- 简写形式 -->
    <button @click="reduce">减1</button>
    <button @click="reduce(2)">减2</button>
    <button @click="reduce(2,$event)">减2</button>

    <hr />

    <div>
      <div v-if="isShow">我显示了</div>
      <div v-if="!isShow">我不显示了</div>
      <button @click="switch1">切换</button>
    </div>

    <hr />
    <ul :style="{textAlign:'left'}">
      <li v-for="(item,index) of news" :key="index">{{item.id + ":" + item.title}}</li>
    </ul>
    <button @click="addNews">添加新闻</button>
    <button @click="delNews">删除新闻</button>
    <button @click="updateNews">修改新闻</button>

    <hr />
    <div v-for="(item,key,index) in obj" :key="index + 100">{{ key + " : " + item}}</div>
    <button @click="addAttr">添加属性</button>
    <button @click="delAttr">删除属性</button>
    <button @click="updateAttr">修改属性</button>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      count: 0,
      isShow: true,
      news: [
        { id: 0, title: "标题一" },
        { id: 1, title: "标题二" },
        { id: 2, title: "标题三" }
      ],
      obj: {
        id: 1,
        name: "张三",
        age: 20
      }
    };
  },
  methods: {
    add(event) {
      console.log(event);
      this.count++;
    },
    reduce(value, event) {
      if (typeof value === "number") {
        this.count -= value;
      } else {
        this.count--;
      }
      console.log(event);
    },
    switch1() {
      this.isShow = !this.isShow;
    },
    addNews() {
      // this.news.unshift({
      //   id: this.news.length + 1,
      //   title: "新增标题"
      // });

      this.news.push({
        id: this.news.length,
        title: "新增标题"
      });
    },
    delNews() {
      this.news.pop();
    },
    updateNews() {
      // this.news[0].title = "修改后的标题";
      this.$set(this.news, 0, { id: 0, title: "修改后的标题" });
    },
    addAttr() {
      // 此方法无效
      // this.obj.hobby = "sadas";

      this.$set(this.obj, "hobby", "唱、跳、rap、篮球");

      // this.obj = {
      //   ...this.obj,
      //   hobby: "吃饭、睡觉、打豆豆"
      // };
    },
    delAttr() {
      // 此方法无效
      // delete this.obj.age;
      let _obj = { ...this.obj };
      delete _obj.age;
      this.obj = { ..._obj };
    },
    updateAttr() {
      this.obj.age = 30;
    }
  }
};
</script>