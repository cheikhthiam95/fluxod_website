<template>
  <div>
    <!-- Showcase -->
    <section class="showcase">
      <div class="fx-container grid">
        <div class="">
          <h1 class="xl">Services
</h1>
          <p>
            Une équipe expérimentée à votre service pour vous livrer la solution
            qui répond parfaitement à vos besoins et vos exigences. Notre
            méthodologie projet, fruit de plusieurs années d'expérience, est
            parfaitement adaptée au développement itératif que permet la
            technologie Fluxod.
          </p>
        </div>

        <div class="showcase-form object">
          <!-- <img src="~/assets/images/teamwork-fluxod.png" /> -->
          <img src="~/assets/images/partner_acceuil_header_deuxxo.png" />

        </div>
      </div>
    </section>
    <section class="fx-container" style="position:relative">
      <div id="content-margin">
        <h3 class="text-fx-blue-slim">Notre mission</h3>
        <p>
          Pour mieux répondre à vos besoins, un ensemble de services accompagne
          l'implémentation d'une solution Fluxod. Ces services ont pour objectif
          de satisfaire aux principes d'exigence que Fluxod s'est fixé, à
          savoir:
        </p>
        <ul>
          <li>
            Connaître votre métier et votre entreprise, et s'adapter à chaque
            modèle d'organisation et de processus
          </li>

          <li>
            Faire évoluer en permanence la solution Fluxod en l'enrichissant des
            «meilleures pratiques» du secteur et vous faire profiter de ces
            évolutions sans disruption dans vos opérations
          </li>

          <li>
            Rester disponible en permanence et suivre chaque client sur le long
            terme grâce à un support attitré
          </li>

          <li>Respecter les délais de livraison</li>

          <li>
            Garantir la confidentialité de vos projets et de vos informations
          </li>
        </ul>

        <br />
        <h3 class="text-fx-blue-slim">Une équipe dédiée à nos clients</h3>
        <p>
          En fonction de leur positionnement, de leur taille ou de leur existant
          informatique, les besoins des clients de Fluxod sont très variés, en
          termes de degré de spécificité ou d'externalisation. Fort de cette
          expérience, Fluxod est en mesure de vous proposer une gamme de
          services très large, où vous pourrez trouver la réponse la plus
          appropriée à vos problématiques:
        </p>
        <ol>
          <li>Conseil</li>
          <li>Intégration</li>
          <li>Formation</li>
          <li>Support</li>
        </ol>

        <br />
        <h3 class="text-fx-blue-slim"></h3>

        <br />
        <h3 class="text-fx-blue-slim"></h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getPost().then((res) => {
      if (res) {
        this.post = res;
      }
    });
  },
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async getPost() {
      try {
        const response = await this.$axios.$get(
          "/posts/" + this.$route.params.id
        );
        if (response) {
          console.log(response);
          return response;
        }
      } catch (error) {
        console.log("ici", error);
      }
    },
  },
};
</script>