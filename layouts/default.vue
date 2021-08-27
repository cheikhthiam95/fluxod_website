<template>
  <div class="main-div">
    <!-- fx-navbar -->
    <!-- <div id="fx-navbar" class="fx-navbar" style="overflow: hidden">
      <div class="fx-container flex" style="overflow: hidden">
        <h1 class="logo">
          <img src="~/assets/images/all_logo_fluxod.png" style="height: 60px" />
        </h1>
        <nav>
          <ul>
            <li><nuxt-link to="/">Accueil</nuxt-link></li>
            <li><nuxt-link to="/company">Société</nuxt-link></li>
            <li><nuxt-link to="/services">Services</nuxt-link></li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
            <li><nuxt-link to="/recruting">Nous recrutons</nuxt-link></li>
            <li><nuxt-link to="/contact">Contacts</nuxt-link></li>
          </ul>
        </nav>

        <span class="btn-demo">Demo</span>
      </div>
    </div> -->

    <header>
      <div id="menu-bar" class="fas fa-bars"></div>

      <a href="#" class="logo"><img src="~/assets/images/all_logo_fluxod.png" style="height: 60px" /></a>

      <nav class="fx-navbar">
          <ul>
            <li><nuxt-link to="/">Accueil</nuxt-link></li>
            <li><nuxt-link to="/company">Société</nuxt-link></li>
            <li><nuxt-link to="/services">Services</nuxt-link></li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
            <li><nuxt-link to="/recruting">Nous recrutons</nuxt-link></li>
            <li><nuxt-link to="/contact">Contacts</nuxt-link></li>
          </ul>
      </nav>

      <div class="icons">
    
      </div>  <div class="icons">
    
      </div>
 
    </header>
    <div class="div_spacer"></div>

    <Nuxt />

    <!-- Bonton back to top -->
    <button type="button" class="btn-circle btn-floating" id="btn-back-to-top">
      <i class="fas fa-arrow-up"></i>
    </button>
    <!--  -->

    <!-- Footer -->
    <footer class="footer bg-dark py-5">
      <div class="fx-container grid grid-3">
        <div>
          <h1>Fluxod</h1>
          <p>Copyright &copy; 2021</p>
        </div>
        <nav>
          <ul>
            <li><a href="index.html">Visite guidée</a></li>
            <li><a href="features.html">Services</a></li>
            <li><a href="features.html">Société</a></li>
            <li><a href="docs.html">Blog </a></li>
          </ul>
        </nav>
        <div class="social">
          <a href="#"><i class="fab fa-github fa-2x"></i></a>
          <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
          <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
          <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$initBackToTopBtn();
    this.$loadMenu()
  },
};
</script>



<style>
.main-div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>






 