<template>
  <div>
 

    <!-- Showcase -->
    <section class="showcase">
      <div class="fx-container grid">
        <div class="showcase-text">
          <h1 class="xl">Moins de gestion ,plus de mission!</h1>
          <p>
            Cabinets de conseil, SSII, bureaux d'études : tous vos processus
            métiers au sein d'une même solution. Des dizaines de cabinets de
            conseil ou sociétés de services nous font confiance et tirent profit
            de Fluxod, rejoignez-les !
          </p>
          <span href="features.html" class="btn-demo">En savoir plus</span>
          <ul class="bg-bubbles">
            <li></li>
            <li></li>
          </ul>
        </div>

        <div class="showcase-form object">
          <img src="~/assets/images/illustration-fluxod-erp.png" alt="" />
          <ul class="bg-bubbles">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script> 
export default {
 
  computed: {
    posts() {
      return this.$store.state.posts;
      // return []
    },
  },
  mounted() {
    console.log("Allpo");
    this.getPosts().then((posts) => {
      console.log(posts);
      this.$store.commit("frontPagePosts", posts);
    });

    // var self = this;
    // self.fx-navbar = document.getElementById("fx-navbar");
    // this.sticky = self.fx-navbar.offsetTop;
    // window.onscroll = function () {
    //   self.documentIsCrolled();
    // };

    

  },
  data() {
    return {};
  },
  methods: {
    async getPosts() {
      try {
        const response = await this.$axios.$get("/pages");
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

<style lang="css">
  .object {
  animation: up-douwn 2s ease-in-out infinite alternate-reverse both; 
}
a:hover{
  text-decoration:none;
}
@keyframes up-douwn {
  0%{
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

</style>
