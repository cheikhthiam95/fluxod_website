<template>
  <div>
    <div v-if="post.length > 0">

        <div v-html="post.id">{{post.excerpt.rendered}}</div>

    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getPost().then((res) => {
      if (res) {
        this.post = res;
      }
    });
  },
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async getPost() {
      try {
        const response = await this.$axios.$get(
          "/posts/" + this.$route.params.id
        );
        if (response) {
          console.log(response);
          return response;
        }
      } catch (error) {
        console.log("ici", error);
      }
    },
  },
};
</script>