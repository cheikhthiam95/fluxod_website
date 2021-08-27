 
<template>
  <div>
    <fx-menu />
  </div>
</template>

<script>
import FxMenu from "../components/FxMenu.vue";

export default {
  components: { FxMenu },

  data() {
    return {
      banners: [
        "~/assets/images/1.png",
        "~/assets/images/2.png",
        "~/assets/images/3.png",
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
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
          delay: 1000,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
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
};
</script>

<style lang="css" scoped>
</style>
 