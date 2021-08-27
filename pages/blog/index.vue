<template>
  <div>
    <!-- Showcase -->
    <section v-if="post.title" class="header-section">
      <div class="fx-container"> 
        <div>
          <h1 class="xl" v-html="this.$route.datz"></h1>
          <!-- <p>
            Cabinets de conseil, SSII, bureaux d'études : tous vos processus
            métiers au sein d'une même solution. Des dizaines de cabinets de
            conseil ou sociétés de services nous font confiance et tirent profit
            de Fluxod, rejoignez-les !   
          </p> -->
        </div>

        
      </div>
    </section>
   
    <section style="z-index:100000!important" v-if="post.content">
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
          "/posts?orderby=date&order=desc&after=/"+this.$route.params.date+" 00:00:00"
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