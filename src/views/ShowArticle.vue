<template>
  <div class="container">
    <div class="aTitle">{{article.title}}</div>
    <div class="aBody">{{article.body}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.$http.get(`/article/${this.$route.params.id}`).then(res => {
        this.article = res.data;
      });
    }
  }
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;

}
.aTitle {
  display: block;
  color: black;
  text-align: center;
  
  }
.aBody {
  display: block;
  color: blue;
}
</style>