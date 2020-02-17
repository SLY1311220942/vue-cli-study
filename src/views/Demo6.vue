<template>
  <div>
    <h1>demo6-计算属性和监听属性</h1>
    <!-- 表达式太复杂不易维护并且没有复用性 -->
    <div>{{type + ":" + msg}}</div>

    <!-- 使用计算属性 -->
    <div>{{type_msg}}</div>
    <input type="text" v-model="firstName" /> +
    <input type="text" v-model="lastName" /> +
    <input type="text" v-model="fullName" />
    <hr />
    <!-- watch -->
    <input type="text" v-model="firstName2" /> +
    <input type="text" v-model="lastName2" /> +
    <input type="text" v-model="fullName2" />
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      type: "news",
      msg: "demo6",
      firstName: "",
      lastName: "",
      firstName2: "",
      lastName2: "",
      fullName2: ""
    };
  },
  methods: {},
  computed: {
    type_msg() {
      return this.type + ":" + this.msg;
    },
    fullName: function() {
      return this.firstName + "." + this.lastName;
    }
  },
  watch: {
    firstName2(newValue, oldValue) {
      this.fullName2 = newValue + "." + this.lastName2;
    },
    lastName2: function(newValue, oldValue) {
      this.fullName2 = this.firstName2 + "." + newValue;
    }
  }
};
</script>