<template>
  <div>
    <!-- Showcase --> 
    <section v-if="post.title" class="header-section">
      <div class="fx-container">
        <div>
          <h1 class="xl" v-html="post.title.rendered"></h1>
          <!-- <p>
            Cabinets de conseil, SSII, bureaux d'études : tous vos processus
            métiers au sein d'une même solution. Des dizaines de cabinets de
            conseil ou sociétés de services nous font confiance et tirent profit
            de Fluxod, rejoignez-les !   
          </p> -->
        </div>
      </div>
    </section>

    <section v-if="post.content">
      <div class="fx-container">
        <p v-html="post.content.rendered"></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getPost().then((res) => {
      if (res[0]) {
        this.post = res[0];
        this.getAtachment(res[0].id).then((result)=>{
          console.log("Result",result)
        })

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
          "/posts?slug=" + this.$route.params.slug
        );
        if (response) {
          console.log(response);
          return response;
        }
      } catch (error) {
        console.log("ici", error);
      }
    },    async getAtachment(id) {
      try {
        const response = await this.$axios.$get(
          "/media?[post]="+id
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