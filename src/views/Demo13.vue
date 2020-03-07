<template>
  <div>
    <h1>demo13-组件插槽slot（内容分发）</h1>
    <div>
      <ComponentSlot title="这是标题">
        <!-- 没有设置名称的话默认名称是default，等同于下面的。 -->
        <div>这是内容</div>
        <!-- <template v-slot:default>
          <div>这是内容</div>
        </template> -->

        <!-- 通过v-slot指定位置 -->
        <template v-slot:btns>
          <button>按钮</button>
        </template>
        <template v-slot:footer>
          <div>页脚</div>
        </template>
      </ComponentSlot>
    </div>
  </div>
</template>

<script>
import ComponentSlot from "../components/ComponentSlot";

export default {
  name: "Demo13",
  data() {
    return {};
  },
  methods: {},
  components: {
    ComponentSlot
  }
};
</script>