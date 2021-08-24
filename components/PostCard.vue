<template>
  <div>
    <section class="packages container" id="packages">
      <h2 class="text-fx-blue text-center">Actualité</h2>
      
      
      <div class="box-container">
         <div class=" card"  style="width: 18rem" v-for="post in posts" v-bind:key="post.key">
        <!-- <div class="card"> -->
          <h5 class="card-title " style="background-color:var(--fx-blue)">Special title treatment</h5>
          <img src="~/assets/images/1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
             <h3 v-html="post.title.rendered"><i class="fas fa-clock"></i></h3>
            <p class="card-text" v-html="subStr(post.content.rendered)">
           
            </p>
 
           

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
    </section>


    
  </div>
</template>

<script>
export default {
  mounted() {
    var swiper = new Swiper(".review-slider", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".brand-slider", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  },
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
    return {};
  },
  methods: {
    async getPosts() {
      try {
        const response = await this.$axios.$get("/posts/?per_page=100");
        if (response) {
          console.log(response);
          return response;
        }
      } catch (error) {
        console.log("ici", error);
      }
    },

    subStr(str) {
      return str.substring(0, str.length > 50 ? 50 : str.length) + "...";
    },
  },
};
</script>
