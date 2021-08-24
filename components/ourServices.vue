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
        <div class="s-box">
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
        <div class="s-box">
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
        <div class="s-box">
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
  --primary-color: #047aed;
  --fxblue-color: #009dc9;
  --fxblue-dark: #4d4644;
  --white-color: #fff;
  --secondary-color: #1c3fa8;
  --dark-color: #002240;
  --light-color: #f4f4f4;
  --success-color: #5cb85c;
  --error-color: #d9534f;
}

body {
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
  font-family: calibri;
}
a {
  text-decoration: none;
}
.services {
//   width: 100%;
//   height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.s-heading {
  text-align: center;
}
.s-heading h1 {
  color: #576975;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0px;
}
.s-heading p {
  color: rgba(87, 105, 117, 0.6);
  font-size: 1rem;
  margin: 5px;
  text-align: center;
}
.s-box-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.s-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  padding: 20px 25px;
  height: 400px;
  box-sizing: border-box;
  margin: 30px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.08);
}
.s-box span {
  height: 75px;
}
.s-box p {
  text-align: justify;
}

.s-box ol li {
  text-align: left;
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
ol ol li::before {
  background: darkorchid;
}
.s-box h1 {
  color: #576975;
  letter-spacing: 1px;
  font-size: 1.5rem;
  margin-bottom: 8px;
}
.s-box p {
  color: rgba(87, 105, 117, 0.9);
  text-align: center;
}
.s-btn {
  width: 140px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid var(--fxblue-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #576975;
  margin-top: 10px;
}
.bar {
  width: 100px;
  height: 6px;
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  background-color: var(--fxblue-color);
  border-radius: 0px 0px 10px 10px;
  display: none;
  animation: bar 0.5s;
}
.s-box:hover {
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.08);
  transition: all ease 0.3s;
}
.s-btn:hover {
  background-color: var(--fxblue-color);
  border: 1px solid var(--fxblue-color);
  color: #ffffff;
  transition: all ease 0.3s;
}
.s-box:hover .bar {
  display: block;
}
@keyframes bar {
  0% {
    width: 0px;
  }
  100% {
    width: 100px;
  }
}
@media (max-width: 1050px) {
  .s-box-container {
    flex-wrap: wrap;
  }
  .services {
    height: auto;
  }
  .s-heading {
    margin: 15px;
  }
  .s-box {
    flex-grow: 1;
  }
}


.solutions-section ul li {

}




</style>