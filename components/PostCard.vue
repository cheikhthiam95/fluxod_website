<template>
  <div class="fx-container">
    <h2 class="lg text-center fx-section-title">Actualités</h2>
 
    <div v-swiper="swiperOption" class="swiper-container ">
      <div class="swiper-wrapper">
         <div
          class="swiper-slide s-box"
          data-aos="fade-up"
          data-aos-delay="500"
          v-for="post in posts"
          v-bind:key="post.key"
        >
           <span> <i class=""></i> </span>
          <h3 v-html="post.title.rendered"><i class="fas fa-clock"></i></h3>
          <p class="card-text" v-html="subStr(post.content.rendered)"></p>
          <nuxt-link
            :to="{
              name: 'blog-date-slug',
              params: { date: post.date, slug: post.slug },
            }"
          >
            Lire plus</nuxt-link
          >
        </div>
    
      </div>
    </div>
    </div>

 
 
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    console.log("Allpo");
    this.getPosts().then((posts) => {
      console.log(posts);
      this.$store.commit("frontPagePosts", posts);
    });
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,

          },
          768: {
            slidesPerView: 1,
            spaceBetween: 1,
            slidesPerGroup: 1,

          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  methods: {
    async getPosts() {
      try {
        const response = await this.$axios.$get("/posts/?per_page=10");
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
