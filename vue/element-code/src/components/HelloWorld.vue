<template>
  <div class="hello">
    <!-- round不给值 默认为true -->
    <el-button type="primary" round @click="doLogin" loading>默认按钮</el-button>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
    </el-button-group>
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <!-- 使用elementui的button 但是手写badge -->
    <hh-badge :value="200" :max="99" class="item" :hidden="isHidden">
      <el-button size="small">评论</el-button>
    </hh-badge>
    <el-badge is-dot class="item">数据查询</el-badge>
  </div>
</template>

<script>
// el-button? components 手写element-ui
import ElButton from "./ElButton.vue";
import ElButtonGroup from "@/components/ElButtonGroup.vue";
import HhBadge from "@/components/HhBadge"
// import { setTimeout } from 'timers';
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    ElButton,
    "el-button-group": ElButtonGroup,
    HhBadge
  },
  methods: {
    doLogin(evt) {
      console.log(evt);
    }
  },
  mounted() {
    setTimeout(() => {
      this.isHidden = true
    }, 2000)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
