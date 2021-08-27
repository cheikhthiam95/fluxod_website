<template>
  <div>
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-10 col-sm-offset-1 text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center">{{error.errorCode}}</h1>
              </div>
              <div class="content_box_404">
                <h3 class="h2">On dirait que vous êtes perdu</h3>
                <p>La page que vous recherchez n'est pas disponible</p>
                <nuxt-link to="/" class="btn-demo"
                  >Aller à l'accueil
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </section>
  </div>
</template>

<script>
export default {
    mounted() {
        // console.log("ERRRRRRRRRRRRRRRRRRRRRr", this.error
    },
  props: {
    error: {
      default: {},
      type: String,
    },
  },
};
</script>

<style lang="scss">
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Poppins";
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background: url("~/assets/images/404.gif");
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width:1000px){
.four_zero_four_bg {
  background: url("~/assets/images/404.gif");
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
}
}

@media (max-width:991px){
.four_zero_four_bg {
  background: url("~/assets/images/404-350.gif");
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
}
 

}

@media (max-width:768px){

 .four_zero_four_bg {
  background: url("~/assets/images/404-206.gif");
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
}

}
</style>