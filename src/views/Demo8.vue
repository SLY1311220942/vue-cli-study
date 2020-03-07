<template>
  <div>
    <h1>demo8-表格数据操作</h1>
    <!-- 只做了修改，其它的都只是工作量 -->
    <div>
      <button @click="addUser">新增</button>
      <table class="table">
        <tr>
          <th>序号</th>
          <th>名字</th>
          <th>外号</th>
          <th>技能</th>
          <th>操作</th>
        </tr>
        <tr v-for="(user,index) in userList" :key="user.id">
          <td>{{index + 1}}</td>
          <td>{{user.name}}</td>
          <td>{{user.nickname}}</td>
          <td>
            <span v-for="(skill,index2) in user.skills" :key="user.id + index2">{{skill}}</span>
          </td>
          <td>
            <a href="javascript:;" @click="editUser(user)">修改</a> |
            <a href="javascript:;" @click="delUser(user.id)">删除</a>
          </td>
        </tr>
      </table>
    </div>

    <div class="modal" v-show="isShow">
      <form class="form">
        <input type="hidden" v-model="modelUser.id" />
        <label for class="form-item">
          <span>姓名：</span>
          <input type="text" class="form-input" v-model="modelUser.name" />
        </label>
        <br />
        <label for class="form-item">
          <span>外号：</span>
          <input type="text" class="form-input" v-model="modelUser.nickname" />
        </label>
        <br />
        <label for class="form-item">
          <span>技能：</span>
          <textarea rows="4" class="form-input textarea" placeholder="多个技能用回车分隔" v-model="skill2"></textarea>
        </label>
        <br />
        <button @click.prevent="saveUser(modelUser.id)">保存</button>
        <button @click.prevent="closeModel">取消</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      isShow: false,
      modelUser: {
        id: "",
        name: "",
        nickname: "",
        skills: []
      },
      userList: [
        {
          id: 1562725945741,
          name: "大毛",
          nickname: "毛",
          skills: ["skill1", "skill2"]
        },
        {
          id: 1562725945742,
          name: "二毛",
          nickname: "毛毛",
          skills: ["skill1", "skill2"]
        },
        {
          id: 1562725945743,
          name: "三毛",
          nickname: "毛毛毛",
          skills: ["skill1", "skill2"]
        }
      ]
    };
  },
  computed: {
    skill2: {
      get() {
        return this.modelUser.skills ? this.modelUser.skills.join("\n") : "";
      },
      set(val) {
        let skill = val.split("\n");
        this.modelUser = {
          ...this.modelUser,
          skills: skill
        };
      }
    }
  },
  methods: {
    addUser() {
      this.isShow = true;
    },
    saveUser(id) {
      this.userList.some((item, i) => {
        if (item.id == id) {
          this.$set(this.userList, i, { ...this.modelUser });
          return true;
        }
      });
      this.isShow = false;
    },
    closeModel() {
      this.isShow = false;
    },
    editUser(user) {
      this.modelUser = { ...user };
      this.isShow = true;
    },
    delUser(id) {
      this.userList.some((item, i) => {
        if (item.id == id) {
          this.list.splice(i, 1);
          return true;
        }
      });
    }
  }
};
</script>