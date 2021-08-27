<template>
  <div>
    <!-- Showcase -->

    <section v-if="posts.length > 0" class="header-section">
      <div class="fx-container">
        <div>
          <h1 class="xl" v-html="$route.params.date"></h1>
          <!-- <p>
            Cabinets de conseil, SSII, bureaux d'études : tous vos processus
            métiers au sein d'une même solution. Des dizaines de cabinets de
            conseil ou sociétés de services nous font confiance et tirent profit
            de Fluxod, rejoignez-les !   
          </p> -->
        </div>
      </div>
    </section>

    <section style="z-index: 100000 !important" v-if="posts.length > 0">
      <div class="fx-container">
        <hr class="fx-hr" />
        <div v-for="post in posts" v-bind:key="post.id">
          <div class="row">
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-6"></div>
            <div class="col-sm-12 col-lg-6 col-md-6 col-xs-6">
              <div class="text-fx-blue-slim" v-html="post.title.rendered"></div>
              <nuxt-link
                :to="{
                  name: 'blog-date-slug',
                  params: { date: formatDate(post.date), slug: post.slug },
                }"
              >
                <div v-html="subStr(post.content.rendered)"></div>
              </nuxt-link>
            </div>
          </div>
          <hr class="fx-hr" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getPost().then((res) => {
      if (res) {
        this.posts = res;
      }
    });
  },
  data() {
    return {
      posts: {},
    };
  },
  methods: {
    async getPost() {
      try {
        const response = await this.$axios.$get(
          "/posts?orderby=date&order=desc&after=" +
            this.$route.params.date +
            "T00:00:00"
        );
        if (response) {
          console.log(response);
          return response;
        }
      } catch (error) {
        console.log("ici", error);
      }
    },

    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    subStr(str) {
      return str.substring(0, str.length > 300 ? 300 : str.length) + "...";
    },
  },
};
</script>