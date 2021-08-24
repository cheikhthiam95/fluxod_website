<template>
  <div>
    <!-- fx-navbar -->
    <div id="fx-navbar" class="fx-navbar" style="overflow: hidden">
      <div class="fx-container flex" style="overflow: hidden">
        <h1 class="logo">
          <img src="~/assets/images/all_logo_fluxod.png" style="height: 60px" />
        </h1>
        <nav>
          <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="docs.html">Société</a></li>
            <li><a href="features.html">Services</a></li>
            <li><a href="docs.html">Blog</a></li>
          </ul>
        </nav>

        <span class="btn-demo">Demo</span>
      </div>
    </div>
    <div class="div_spacer"></div>

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

@keyframes up-douwn {
  0%{
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

</style>
