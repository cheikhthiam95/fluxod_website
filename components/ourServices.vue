<template>
  <div>
          <!-- Stats -->
    <!--    <section class="stats">
      <div class="fx-container">
        <our-services />
        <carousselle/> 
      </div>
    </section> --> 
    <section class=" services">
      <!--heading---------------->
      <!-- <div class="s-heading"> -->
        <!-- <h1>Ser<font color="var(--fxblue-color)">vic</font>es</h1> -->
        <!-- <p>We Provide The Best In Class Servies For Our Customers</p> -->
      <!-- </div> -->
      <!--services-box-container------------------->
      <div class="s-box-container">
        <!--service-box-1---------------->
        <div class="s-box" data-aos="fade-up" data-aos-delay="350">
          <!--top-bar-------->
          <!-- <div class="bar"></div> -->
          <!--img---------->
         <span> <i class=""></i> </span>
          <!--servies-name---------->
          <h1>1 plateforme</h1>
          <!--details------>
          <p>
            Un ERP métier capable de gérer l'ensemble des processus
            opérationnels de votre société. Conçue sur les standards du marché,
            Fluxod est une solution collaborative SaaS puissante, robuste et
            flexible.
          </p>
          <!--btn---------->
          <a class="s-btn" href="#">More</a>
        </div>
        <!--service-box-1---------------->
        <div class="s-box" data-aos="fade-up" data-aos-delay="350">
          <!--top-bar-------->
          <!-- <div class="bar"></div> -->
          <!--img---------->
         <span>  </span>
          <!--servies-name---------->
          <h1>6 modules</h1>
          <!--details------>
          <p>
              <ol>
                  
                  <li>Gestion d'affaires (CRM)</li>
                  <li>Gestion de missions</li>
                  <li>Activités des consultants</li>
                  <li>Gestion RH</li>
            <li>
                Finance
            </li>
            <li>
                Qualité / ISO 9001
            </li>
              
              </ol> 
          </p>
          <!--btn---------->
          <a class="s-btn" href="#">More</a>
        </div>
        <!--service-box-3---------------->
        <div class="s-box" data-aos="fade-up" data-aos-delay="350">
          <!--top-bar-------->
          <!-- <div class="bar"></div> -->
          <!--img---------->
         <span> </span>
          <!--servies-name---------->
          <h1>Vos processus</h1>
          <!--details------>
          <p>
            Vous n'avez rien à acheter ou à installer au sein de votre
            entreprise. Vous devez juste souscrire à un service pour accéder à
            votre solution. Aucun engagement de durée.
          </p>
          <!--btn---------->
          <a class="s-btn" href="#">More</a>
        </div>
      </div>
    </section>
  </div>
</template>
 

<style lang="scss" scoped>
@charset "utf-8";
/* CSS Document */

:root { 
  --fxblue-color: #009dc9; 
}

body {
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
  // font-family: calibri;
}
a {
  text-decoration: none;
}

ol {
  list-style: none;
  counter-reset: steps;
}
ol li {
  counter-increment: steps;
}
ol li::before {
  content: counter(steps);
  margin-right: 0.5rem;
  background: var(--fxblue-color);
  color: white;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  line-height: 1.2em;
}
// ol ol li::before {
//   background: darkorchid;
// }



.solutions-section ul li {

}




</style>