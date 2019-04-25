
<template>
  <el-container class="bgImage" style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets"></i>内容管理
          </template>
          <el-menu-item index="/articles/list">文章列表</el-menu-item>
          <el-menu-item index="/articles/create">新建文章</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container class="content">
      <!-- 头部组件 -->
      <top-vue></top-vue>

      <el-main>
        <!-- 路由 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}


.content {
  flex-direction: column !important;
}

.el-aside {
  color: #333;
}
</style>

<script>
import topVue from "./components/top.vue";

export default {
  data() {
    return {};
  },
  components: {
    topVue
  }
};
</script>