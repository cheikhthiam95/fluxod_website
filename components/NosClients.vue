<template>
  <div>
    <section data-aos="fade-up" data-aos-delay="350" class="brand-container">
      <hr class="fx-hr" />
      <h1 class="fx-section-title lg">Ils nous font confiance</h1> <br>

      <div class="swiper-container brand-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="~/assets/images/1.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="~/assets/images/2.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="~/assets/images/3.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="~/assets/images/4.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="~/assets/images/5.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="~/assets/images/6.jpg" alt="" />
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
};
</script>

<style lang="css" scoped>
.swiper-slide img {
  height: fit-content;
  width: 150px;
}
</style>> 