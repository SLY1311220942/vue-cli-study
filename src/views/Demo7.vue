<template>
  <div>
    <h1>demo7-[v-model]双向数据绑定</h1>
    <input type="text" v-model="textmsg" />
    <div>{{textmsg}}</div>

    <hr />
    <textarea v-model="content" cols="30" rows="10"></textarea>
    <div>{{content}}</div>

    <hr />
    <!-- 绑定select -->
    <select v-model="cityId">
      <option value>请选择</option>
      <option v-for="city in citys" :key="city.id" :value="city.id">{{city.name}}</option>
    </select>
    <div>{{cityId}}</div>
    <div>{{cityname}}</div>
    <hr />

    <!-- 绑定radio -->
    <input name="sex" type="radio" value="man" v-model="sex" />男
    <input name="sex" type="radio" value="woman" v-model="sex" />女
    <br />
    <div>{{sex}}</div>
    <hr />

    <!-- 绑定checkbox -->
    <input type="checkbox" name="remember" v-model="remember" />
    <div>{{remember}}</div>
    <input type="checkbox" true-value="Y" false-value="N" name="remember2" v-model="remember2" />记住我
    <div>{{remember2}}</div>

    <hr />
    <input type="checkbox" name="hobby" value="cf" v-model="hobby" />吃饭
    <input type="checkbox" name="hobby" value="sj" v-model="hobby" />睡觉
    <input type="checkbox" name="hobby" value="ddd" v-model="hobby" />打豆豆
    <div>{{hobby.join('、')}}</div>
    <hr />

    <!-- v-model修饰符 -->
    <!-- lazy失去焦点时更新 -->
    <input type="text" v-model.lazy="textmsg" />
    <div>{{textmsg}}</div>

    <!-- 转换为数字，无法转换时原样显示 -->
    <input type="text" v-model.number="number" />
    <div>{{number}}</div>

    <!-- trim去除前后空格 -->
    <input type="text" v-model.trim="msg" />
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      textmsg: "",
      content: "输入点啥吧！",
      cityId: "",
      citys: [
        {
          id: "beijing",
          name: "北京"
        },
        {
          id: "sahnghai",
          name: "上海"
        },
        {
          id: "guangzhou",
          name: "广州"
        },
        {
          id: "shenzhen",
          name: "深圳"
        }
      ],
      sex: "man",
      remember: false,
      remember2: "N",
      hobby: [],
      number: 0,
      msg: ""
    };
  },
  methods: {},
  computed: {
    cityname: function() {
      let city = this.citys.find(city => city.id === this.cityId);
      return city ? city.name : "";
    }
  }
};
</script>