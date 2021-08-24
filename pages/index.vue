<template>
  <div>
    <page-header />

    <our-services />

    <solution-list/>

    <!-- <hr class="fx-hr"> -->
    <post-card />

    <!-- Cli -->
    <!-- <section class="cli">
      <div class="fx-container grid">
        <div v-for="post in posts" v-bind:key="post.id">
          <div class="md" v-html="post.title.rendered"></div>

          <div>
            {{ post.excerpt.rendered }}

            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: post.slug, id: post.id },
              }"
            >
              Lire plus</nuxt-link
            >
          </div>
        </div>
      </div>
    </section> -->

    <nos-clients />

    <!-- Cloud -->
    <section class="cloud bg-yellow my-2 py-2">
      <div class="fx-container grid"></div>
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
    // this.getPosts().then((posts) => {
    //   console.log(posts);
    //   this.$store.commit("frontPagePosts", posts);
    // });

    // var self = this;
    // self.navbar = document.getElementById("navbar");
    // this.sticky = self.navbar.offsetTop;
    // window.onscroll = function () {
    //   self.documentIsCrolled();
    // };
  },
  data() {
    return {};
  },
  methods: {
    // async getPosts() {
    //   try {
    //     const response = await this.$axios.$get("/pages");
    //     if (response) {
    //       console.log(response);
    //       return response;
    //     }
    //   } catch (error) {
    //     console.log("ici", error);
    //   }
    // },


    // documentIsCrolled() {
    //   console.log("Akkkkkkkkkkkkk", window.pageYOffset, self.navbar.offsetTop);
    //   if (window.pageYOffset >= this.sticky && window.pageYOffset > 0) {
    //     if (self.navbar) {
    //       // self.navbar.style.paddingTop = ".20cm";
    //       console.log("Styyyck");
    //       // self.navbar.classList.add("sticky");
    //       self.navbar.style.paddingTop = "unset";
    //       self.navbar.style.top = 0;
    //       self.navbar.style.width = "100%";
    //       self.navbar.style.position = "fixed";
    //       self.navbar.style.zIndex = 102;

    //       // self.navbar.classList.add("bg-white");
    //     }
    //   } else {
    //     if (self.navbar) {
    //       console.log("noteSty");

    //       // self.navbar.classList.remove("sticky");
    //       // self.navbar.classList.remove("bg-white");
    //       self.navbar.style.paddingTop = "unset";
    //       self.navbar.style.top = "unset";
    //       self.navbar.style.position = "relative";
    //     }
    //   }
    // },
  },
};
</script>
