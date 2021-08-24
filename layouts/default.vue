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
            <li> <nuxt-link to="/">Accueil</nuxt-link> </li>
            <li><a href="docs.html">Société</a></li>
            <li><a href="features.html">Services</a></li>
            <li><a href="docs.html">Blog</a></li>
          </ul>
        </nav>

        <span class="btn-demo">Demo</span>
      </div>
    </div>
    <div class="div_spacer"></div>

    <nuxt />
  </div>
</template>

 