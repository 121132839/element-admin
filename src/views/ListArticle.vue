<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="120"></el-table-column>
      <el-table-column prop="body" label="内容" width="240"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="show(scope.row._id)" type="text" size="small">查看</el-button>
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  created() {
    console.log("request articles");
    this.fetch();
  },
  methods: {
    fetch() {
      this.$http.get("articles", this.articles).then(res => {
        console.log(res.data);
        this.articles = res.data;
      });
    },
    edit(id) {
      console.log(id);
      this.$router.push(`/article/${id}/edit`);
    },
    show(id) {
      console.log(id);
      this.$router.push(`/article/${id}/show`);
    },
    remove(id) {
      this.$http.delete(`article/${id}`).then(res => {
        this.$message({
          message: "文章删除成功！",
          type: "success"
        });
        this.fetch();
        console.log(res.data);
      });
    }
  }
};
</script>

<style scoped>
</style>