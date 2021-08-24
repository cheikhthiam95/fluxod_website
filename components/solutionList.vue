<template>
  <div>
    <div class="solutions">
      <h1>Fonctionnalités principales</h1>
      <div class="cen">
        <div class="solution">
          <i class="fas fa-anchor"></i>
          <h2>affaires</h2>
        </div>

        <div class="solution">
          <i class="fab fa-android"></i>
          <h2 class="fx-hight-light">Missions</h2>
        </div>

        <div class="solution">
          <i class="fab fa-angellist"></i>
          <h2>Rh</h2>
        </div>

        <div class="solution">
          <i class="fas fa-apple-alt"></i>
          <h2>Finance</h2>
        </div>

        <div class="solution">
          <i class="fas fa-archway"></i>
          <h2>Qualité</h2>
        </div>

        <div class="solution">
          <i class="far fa-angry"></i>
          <h2>Activités</h2>
        </div>
      </div>
    </div>
    
    <div class="fx-container">
      <div id="missions" class="row solutions-section">
          <div class="col-12"><h2 class="text-fx-blue text-center">Missions</h2></div>

        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
          <b-tabs
            active-nav-item-class=" text-fx-blue"
            active-tab-class="font-weight-bold"
            content-class="mt-3"
          >
            <b-tab title="Description" active
              ><p>
                Le module de gestion de missions Fluxod PRM permet la planification des ressources de votre entreprise par projet. Les bons de commandes client sont gérés de manière détaillée permettant ainsi le contrôle des différentes consommations de ressources.
Ce module vous permettra de gérer et de suivre efficacement le planning de production ainsi que le suivi des consommations par rapport aux différents types de prestations.


                 
              </p></b-tab>
           
            <b-tab title="Fonctionnalités" >
              
              <p>
                
              <ol>
                <li>Saisie des commandes clients</li>
                <li>Assignation des collaborateurs sur les projets</li>
                <li>Planification des ressources dans le temps</li>
                <li>Saisie du "reste à faire" pour les missions facturées sur une base forfaitaire</li>
                <li>Pilotage de la rentabilité des missions</li>
                <li>Base documentaire projet/archivage des livrables</li>
                <li>Vision consolidée du planning des équipes</li>
                <li>Suivi du taux de staffing/production</li>
              </ol>
                
              </p>
            </b-tab>
      

           <b-tab title="Bénéfices"><p>
                      


              <ol>
                <li>Optimisation de la planification des ressources</li>
               
                <li>Vision instantanée de l'avancement et du reste à faire sur les projets</li>
               
                <li>Meilleur contrôle des projets au forfait avec recalcul des marges prévisionnelles en fonction du reste à faire</li>
               
                <li>Optimisation du taux de staffing/réduction des inter-contrats</li>
              </ol>
              </p></b-tab>

            </b-tabs>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
          <div>
              <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
                img-width="1024"
                img-height="480"
              >
                <b-carousel-slide
                
                  img-src="~/assets/images/missions.png"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="~/assets/images/missions_1.png"
                ></b-carousel-slide>
              
            
              </b-carousel>
            </div>
        </div>
      </div>


    <hr class="fx-hr">


        <div id="affaires" class="row solutions-section">
          <div class="col-12"><h2 class="text-fx-blue text-center">Affaires</h2></div>


               <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
        <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
    
      img-src="~/assets/images/avant_vente.png"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="~/assets/images/avant_vente1.png"
    ></b-carousel-slide>
    <b-carousel-slide
      
      img-src="~/assets/images/avant_vente2.png"
    ></b-carousel-slide>
      <b-carousel-slide
      
      img-src="~/assets/images/avant_vente3.png"
    ></b-carousel-slide>
      <b-carousel-slide
      
      img-src="~/assets/images/avant_vente4.png"
    ></b-carousel-slide>
      <b-carousel-slide
      
      img-src="~/assets/images/avant_vente5.png"
    ></b-carousel-slide>

      <b-carousel-slide
      
      img-src="~/assets/images/avant_vente6.png"
    ></b-carousel-slide>
  </b-carousel>
</div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
          <b-tabs
            active-nav-item-class=" text-fx-blue"
            active-tab-class="font-weight-bold"
            content-class="mt-3"
          >
            <b-tab title="Description" active
              ><p>
                Le module de gestion d'affaires Fluxod CRM couvre l’ensemble du
                processus commercial de votre entreprise depuis l’avant-vente
                jusqu’à la facturation. Fluxod CRM repose sur les quatre
                composantes fondamentales de la gestion commerciale :


                 <ul><li>La
                maîtrise des canaux et réseaux de communication, </li>
                <li>L'écoute et la
                connaissance de son client/prospect, </li>
                <li>
                  Le développement de la
                relation/communication long terme avec les clients,
                </li>
                <li>
                   La capacité
                à proposer une offre de valeur individualisée.
                </li>
                </ul>
              </p></b-tab>
           
            <b-tab title="Fonctionnalités" >
              
              <p>
                
                <ol>
                  <li>Gestion du pipe commercial</li>
                  <li>Suivi de l’activité commerciale par agent</li>
                  <li>Suivi de l’évolution d’une opportunité depuis la détection de l’affaire jusqu’à la conclusion</li>
                  <li>Suivi des pistes et/ou de la prospection téléphonique / intégration de fichiers de contacts</li>
                  <li>Génération de campagnes d'emailing ciblées</li>
                  <li>Gestion collaborative de l'ensemble des activités liées à une affaire (appels téléphoniques, comptes-rendus de réunion, tâches, emails, proposition commerciale, archivage des documents émis ou transmis par le prospect...)</li>
                  <li>Suivi du réalisé par rapport aux objectifs</li>
                  <li>Édition des devis, bons de commandes, factures</li>
                  <li>Gestion de la facturation quelque soit le mode de prestation (régie, forfait, régie forfaitée, régie plafonnée, ATG (Assistance Technique Groupée), centres de services)</li>
                  <li>Suivi des règlements clients</li>
                  <li>Suivi d'activité grâce à des tableaux de bords personnalisables par profil utilisateur, permettant en un clin d’oeil d’avoir une vision synthétique de l'activité commerciale.</li>
                </ol>
                
              </p>
            </b-tab>
      

           <b-tab title="Bénéfices"><p>
        Vous augmentez votre réactivité commerciale :

                <ol>
<li>Réponses aux appels d'offres</li>
<li>Suivi des pistes (augmentation de la détection de prospects potentiels)</li>
<li>Possibilité donnée à l'ensemble des consultants de saisir de nouvelles pistes dès qu'ils entendent parler d'un projet au cours d'une de leurs missions</li>
</ol>

Vous améliorez le suivi de votre activité commerciale :



<ol>
<li>Pour chaque dossier vous savez à quelle étape il en est et quelles sont les actions à entreprendre</li>
<li>Visualisation des performances de vos commerciaux</li>
</ol>

Vous facilitez le travail de vos commerciaux en les dotant d’un outil collaboratif leur permettant facilement de :


<ol>
<li>Consulter l’historique des propositions faites à un client, voir les conditions et quels ont été les retours</li>
<li>Capitaliser sur le travail des propositions déjà émises</li>
</ol>


              
              </p></b-tab>

                  </b-tabs>
        </div>
   
      </div>
    <hr class="fx-hr">


        <div id="affaires" class="row solutions-section">
          <div class="col-12"><h2 class="text-fx-blue text-center">Ressources Humaines</h2></div>


        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
          <b-tabs
            active-nav-item-class=" text-fx-blue"
            active-tab-class="font-weight-bold"
            content-class="mt-3"
          >
            <b-tab title="Description" active
              ><p>
                L’objectif principal du module Fluxod RH est le suivi des ressources humaines pour une plus grande efficacité au sein de votre entreprise.

Il permet le suivi de l’ensemble des données relatives aux collaborateurs, les tâches administratives ou comptables associées et de manière plus générale l’ensemble des processus liés à la gestion des ressources de l’entreprise.


                 
              </p></b-tab>
           
            <b-tab title="Fonctionnalités" >
              
              <p>

                Gestion de l'ensemble des données collaborateurs (état civil, coordonnées, données sociales, contrat de travail, statut, temps de travail, poste, position, coefficient, salaire, remboursement transport, responsable hiérarchique, etc...)
                <br>
                <br>
Gestion de l'ensemble des activités administratives liées aux ressources : <br><br>


                  <ol>
<li>Visites médicales</li>
<li>Entretiens d'évaluation</li>
<li>Évolution des salaires</li>
<li>Mises à jours du CV pour les propositions commerciales après chaque mission</li>
<li>Formations</li>
<li>Attribution de matériel</li>
<li>Gestion des compétences</li>
<li>Soldes congés/arrêts de travail</li>
<li>Base documentaire liée à chaque salarié</li>
<li>etc...</li>
</ol>
 
Transmission donnés paie/sociale 


                 
                
              </p>
            </b-tab>
      

           <b-tab title="Bénéfices"><p>
                    <ol>
<li>Vous centralisez, simplifiez et optimisez la gestion administrative de vos salariés</li>
<li>Vous recrutez les bons candidats</li>
<li>Vous adoptez une réelle gestion des talents et des compétences</li>
</ol>
              </p></b-tab>

                  </b-tabs>
        </div>


               <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
        <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
    
      img-src="~/assets/images/rh_2.png"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="~/assets/images/rh.png"
    ></b-carousel-slide>
    
  </b-carousel>
</div>
        </div>
   
      </div>
    <hr class="fx-hr">

        <div id="gestion_de_la_qualite" class="row solutions-section">
          <div class="col-12"><h2 class="text-fx-blue text-center">Gestion de la qualité</h2></div>


               <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
        <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
    
      img-src="~/assets/images/qualite.png"
    ></b-carousel-slide>   <b-carousel-slide
    
      img-src="~/assets/images/qualite_2.png"
    ></b-carousel-slide>
 
  </b-carousel>
</div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
          <b-tabs
            active-nav-item-class=" text-fx-blue"
            active-tab-class="font-weight-bold"
            content-class="mt-3"
          >
            <b-tab title="Description" active
              ><p>
      Il va également vous offrir la possibilité de suivre toutes les actions correctives ou préventives lancées afin de contribuer à corriger les dysfonctionnements constatés. Enfin, il vous permet de façon très simple de référencer et consolider les compétences de vos collaborateurs par rapport à un référentiel que vous aurez paramétré.
<br><br>
La mise en place d’une démarche qualité passe par le suivi des aspects suivants dans l'entreprise :

<br> 



<ol>
<li>La responsabilité de la direction,</li>
<li>La gestion des ressources et des compétences,</li>
<li>L'identification et suivi des processus opérationnels,</li>
<li>L'engagement d’actions visant à corriger les dysfonctionnements,</li>
<li>La mise en place de mesures d'analyse de la performance.</li>
</ol>  

Le module Fluxod Quality vous permet d'implémenter rapidement une démarche qualité en proposant un ensemble complet d'indicateurs, en offrant la possibilité d'auditer toutes les actions correctives ou préventives lancées afin de contribuer à corriger les dysfonctionnements constatés sur les processus opérationnels et en permettant de suivre de façon très simple l'évolution des compétences de vos collaborateurs par rapport à un référentiel de compétence défini au préalable.
                 
              </p></b-tab>
           
            <b-tab title="Fonctionnalités" >
              
              <p>
                
   <ol>
<li>Indicateurs de qualité concernant l'ensemble des processus de l'entreprise</li>

<li>Enregistrement et suivi des non conformités détectées et actions correctives ou préventives</li>

<li>Fonctionnalités GPEC (Gestion Prévisionnelle de l'Emploi et des Compétences)</li>

<li>Mesures de satisfaction clients/fournisseurs</li>
</ol>
                
              </p>
            </b-tab>
      

           <b-tab title="Bénéfices"><p>
 Augmenter l'efficacité globale de l'entreprise : <br> 
 <ol>
<li>Satisfaction clients</li>
<li>Satisfaction fournisseurs</li>
<li>Satisfaction collaborateurs</li>
<li>Respect des processus</li>
</ol>

Faciliter la certification ISO 9001

<br> 

<ol>
<li>Élément différenciateur dans les démarches commerciales</li>
<li>Parfois indispensable pour le référencement "grands comptes"</li>
</ol>
              
              </p></b-tab>

                  </b-tabs>
        </div>
   
      </div>
    <hr class="fx-hr">

            <div id="finance" class="row solutions-section">
          <div class="col-12"><h2 class="text-fx-blue text-center">Finance</h2></div>


        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
          <b-tabs
            active-nav-item-class=" text-fx-blue"
            active-tab-class="font-weight-bold"
            content-class="mt-3"
          >
            <b-tab title="Description" active
              ><p>
      Le module Fluxod Finances vous permet d'agréger l'ensemble des informations de produits et charges renseignées dans la solution afin d’extrapoler un compte de résultat prévisionnel ainsi que l’ensemble des flux de trésorerie prévisionnels.

La direction financière va également pouvoir configurer les coûts de structure de la société afin d’être parfaitement exhaustif en ce qui concerne les charges fixes.




                 
              </p></b-tab>
           
            <b-tab title="Fonctionnalités" >
              
              <p>
          
 <ol>
<li>Paramétrage des différents postes de charges et de produits de l'entreprise (périodicité, fixe/variable, décalage résultat/cash flow...)</li>

<li>Configurations des coûts de structure de l'entreprise</li>

<li>Extrapolation des charges et produits futurs à partir des bons de commandes clients, de la masse salariale et des coûts de structure</li>

<li>Calcul des résultats prévisionnels</li>

<li>Calcul de la trésorerie prévisionnelle</li>

<li>Export des données comptables</li>

<li>Export des variables de paie</li>
</ol>
                
              </p>
            </b-tab>
      

           <b-tab title="Bénéfices"><p>
<ol>
<li>Pilotez de manière efficace votre entreprise grâce à des projections financières fiables et précises</li>

<li>Ne perdez plus de temps à consolider vous-même vos prévisions court et moyen terme en vous basant sur des données gérées en dehors de votre système d'informations et par conséquent souvent obsolètes et/ou erronées.</li>
</ol>
              
              </p></b-tab>

                  </b-tabs>
        </div>
   
               <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
        <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
    
      img-src="~/assets/images/qualite.png"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="~/assets/images/qualite_2.png"
    ></b-carousel-slide>
 
  </b-carousel>
</div>
        </div>


      </div>


      <hr>

              <div id="gestion_des_activite" class="row solutions-section">
          <div class="col-12"><h2 class="text-fx-blue text-center">Gestion des activités</h2></div>


               <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
        <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
    
      img-src="~/assets/images/avant_vente.png"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="~/assets/images/avant_vente1.png"
    ></b-carousel-slide>
    <b-carousel-slide
      
      img-src="~/assets/images/avant_vente2.png"
    ></b-carousel-slide>
      <b-carousel-slide
      
      img-src="~/assets/images/avant_vente3.png"
    ></b-carousel-slide>
      <b-carousel-slide
      
      img-src="~/assets/images/avant_vente4.png"
    ></b-carousel-slide>
      <b-carousel-slide
      
      img-src="~/assets/images/avant_vente5.png"
    ></b-carousel-slide>

      <b-carousel-slide
      
      img-src="~/assets/images/avant_vente6.png"
    ></b-carousel-slide>
  </b-carousel>
</div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
          <b-tabs
            active-nav-item-class=" text-fx-blue"
            active-tab-class="font-weight-bold"
            content-class="mt-3"
          >
            <b-tab title="Description" active
              ><p>
     Le module de gestion des activités permet aux consultants de pouvoir à tout moment transmettre les informations liées à l'activité des ressources en missions et nécessaires au bon fonctionnement de la société. Il s'agit du lien de communication entre les ressources en poste chez leur client et l'entreprise.
<br><br>
Les différents écrans de ce module disposent également d'une version optimisée accessibles via n'importe quel smartphone.

                 
              </p></b-tab>
           
            <b-tab title="Fonctionnalités" >
              
              <p>
           
 <ol>
<li>Saisie des feuilles de temps</li>

<li>Impression des feuilles de temps clients pour signature</li>

<li>Soumission/validation des feuilles de temps (workflow de validation)</li>

<li>Saisie des demandes de congés (workflow de validation)</li>

<li>Saisie des déclarations d'arrêts de travail</li>

<li>Saisie des notes de frais : détail des frais, refacturation client, remboursement etc...</li>

<li>Nombreux contrôles croisées entre feuilles de temps, congés, arrêts de travail et notes de frais</li>

<li>Rappels automatiques par emails permettant d'éviter bon nombre d'actions de relance.</li>
</ol>         
              </p>
            </b-tab>
      

           <b-tab title="Bénéfices"><p>
 
              <ol>
<li>Suppression du risque d'erreurs liées à de la double saisie</li>

<li>Gain de temps de traitement administratif considérable au niveau de la saisie/consolidation des feuilles de temps et de leur contrôle</li>

<li>Gain de trésorerie car les factures partent 5 à 10 jours plus tôt en utilisant Fluxod</li>

<li>Convivialité accrue pour les utilisateurs "nomades" qui disposent à tout moment de leur planning, leurs soldes de congés, les notifications de traitement de leur différentes demandes, etc...</li>
</ol>
              </p></b-tab>

                  </b-tabs>
        </div>
   
      </div>

    </div>
  </div>
</template>
 <script>
export default {
  mounted() {
    // $(".carousel").carousel();
    window.addEventListener("scroll", this.reveal);
  },
  methods: {
    reveal() {
      console.log("Scroling****");
      this.relevals = document.querySelectorAll(".solutions-section");
      // console.log("solutions-section",relevals)
      for (var i = 0; i < this.relevals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = relevals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          console.log("solutions-section", relevals);

          this.relevals[i].classList.Add("active");
        } else {
          console.log("solutions-section", relevals);

          this.relevals[i].classList.remove("active");
        }
      }
    },
  },
};
</script>

 <style lang="css" scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "montserrat", sans-serif;
}
.solutions {
  background: #f1f1f1;
  text-align: center;
}
.solutions h1 {
  display: inline-block;
  text-transform: uppercase;
  border-bottom: 4px solid #009dc9;
  font-size: 20px;
  padding-bottom: 10px;
  margin-top: 40px;
}
.cen {
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 20px;
}
.solution {
  display: inline-flex;
  width: calc(100% / 3);
  margin: 0 -2px;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  /* transition: 0.4s; */
}
.solution:hover {
  border: #009dc9 solid 0.5px;

  /* background: #ddd; */
}
.solution i {
  color: #009dc9;
  font-size: 34px;
  margin-bottom: 30px;
}
.solution h2 {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  padding-left: 50px;
  /* margin: 0; */
}
.solution p {
  color: gray;
  font-size: 15px;
  font-weight: 500;
}
@media screen and (max-width: 800px) {
  .solution {
    width: 50%;
  }
}
@media screen and (max-width: 500px) {
  .solution {
    width: 100%;
  }
}
</style>
