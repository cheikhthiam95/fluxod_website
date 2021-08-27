<template>
  <div>
    <h2 class="text-fx-blue text-center">Actualités</h2>
    <div class=" fx-container swiper-container review-slider services">
      <div class="swiper-wrapper s-box-container">
        <div
          class="swiper-slide s-box"
          data-aos="fade-up"
          data-aos-delay="500"
          v-for="categorie in categories"
          v-bind:key="categorie.key"
        >
          <span> <i class=""></i> </span>
          <h1 v-html="categorie.name"></h1>
          <p v-html="subStr(categorie.description)"></p>
          <nuxt-link
            :to="{
              name: 'blog-categorie-slug',
              params: { categirie: categorie.slug, slug: categorie.slug },
            }"
          >
            Lire plus</nuxt-link
          >
        </div>
      </div>
    </div>

    <!-- 
      <section class="services">
          <div class="s-box-container">
            <div
              class="s-box swiper-slide card"
              data-aos="fade-up"
              data-aos-delay="500"
              v-for="categorie in categories"
              v-bind:key="categorie.key"
            >
              <span> <i class=""></i> </span>
              <h1 v-html="categorie.title.rendered"></h1>
              <p v-html="subStr(categorie.content.rendered)"></p>
              <nuxt-link
                :to="{
                  name: 'blog-date-slug',
                  params: { date: formatDate(categorie.date), slug: categorie.slug },
                }"
              >
                Lire plus</nuxt-link
              >
            </div>
          </div>
        </section> -->
    <!-- <section class="packages container" id="packages">
      <div class="box-container">
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          class="card"
          style="width: 18rem"
          v-for="categorie in categories"
          v-bind:key="categorie.key"
        >
    
          <h5 class="card-title" style="background-color: var(--fx-blue)">
            Special title treatment
          </h5>
          <img src="~/assets/images/1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 v-html="categorie.title.rendered"><i class="fas fa-clock"></i></h3>
            <p class="card-text" v-html="subStr(categorie.content.rendered)"></p>
            <nuxt-link
              :to="{
                name: 'blog-date-slug',
                params: { date: formatDate(categorie.date), slug: categorie.slug },
              }"
            >
              Lire plus</nuxt-link
            >
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  mounted() {
    console.log("Allpo");
    this.getcategories().then((categories) => {
      console.log(categories);
      this.$store.commit("frontPagecategories", categories);
      console.log(this.formatDate(categories[0].date));
      this.initSwipper();
    });
  },
  data() {
    return {};
  },
  methods: {
    initSwipper() {
      var swiper = new Swiper(".review-slider", { 
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      });

   
    },
    async getcategories() {
      try {
        const response = await this.$axios.$get("/categories/");
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
      return str.substring(0, str.length > 50 ? 50 : str.length) + "...";
    },
  },
};
</script>


<style lang="scss" scoped>
</style>