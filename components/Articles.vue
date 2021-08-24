<template>
  <div>
 
<section class="packages container" id="packages">

    <h2 class="text-fx-blue text-center">Actualité</h2>

    <div class="box-container">

        <div class="box" v-for="post in posts" v-bind:key="post.key">
            <img src="~/assets/images/1.jpg" alt="">
            <div class="content">
                <h3 v-html="post.title.rendered"> <i class="fas fa-clock"></i>  </h3>
                <p v-html="subStr(post.content.rendered)"></p>
               
                
                <a href="#" class="btn-demo">Voir plus</a>
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
    loop:true,
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
    loop:true,
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
      // return []
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
        const response = await this.$axios.$get("/categories/");
        if (response) {
          console.log(response);
          return response;
        }
      } catch (error) {
        console.log("ici", error);
      }
    },

    subStr(str){
      return str.substring(0, str.length > 50 ? 50 :str.length) + "..."
    }
  },
};
</script>
