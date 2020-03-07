<template>
  <div>
    <h1>demo14-动态组件</h1>
    <div>
      <button @click="currentComponent = 'ComponentDynamic1'">组件1</button>
      <button @click="currentComponent = 'ComponentDynamic2'">组件2</button>
    </div>

    <div>
      <!-- <ComponentDynamic1 v-if="currentComponent == 'ComponentDynamic1'"></ComponentDynamic1>
      <ComponentDynamic2 v-else></ComponentDynamic2>-->

      <!-- 使用component标签切换组件 -->
      <!-- 使用keep-alive保持选中的数据，不使用的话切回来时会是初始的状态 -->
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ComponentDynamic1 from "../components/ComponentDynamic1";
import ComponentDynamic2 from "../components/ComponentDynamic2";

export default {
  name: "Demo14",
  data() {
    return {
      currentComponent: "ComponentDynamic1"
    };
  },
  methods: {},
  components: {
    ComponentDynamic1,
    ComponentDynamic2
  }
};
</script>