<template>
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="avatar"></div>
  </el-header>
</template>

<script>
export default {};
</script>


<style scoped >
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.avatar {
  width: 20px;
  height: 20px;
  background: #af2097;
  border-radius: 5px;
}
</style>