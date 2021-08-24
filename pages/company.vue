<template>
  <div>
    <!-- Showcase -->
    <section class="showcase">
      <div class="fx-container grid">
        <div class="">
          <h1 class="xl">ELAB</h1>
          <p>
            Née d'un projet lancé en 2007, ELAB a pour mission d'apporter aux
            PME des outils jusque là réservés aux grandes entreprises tout en
            conservant la souplesse dont ont besoin des structures qui évoluent
            en permanence. Pour cela ELAB a constitué une équipe expérimentée et
            une force d'innovation unique
          </p>
        </div>

        <div class="showcase-form object">
          <img src="~/assets/images/societe_header_maison.png" alt="" />
        </div>
      </div>
    </section>
    <section class="fx-container" style="position:relative">
      <div id="body-content">
        <br /><br />
        <div class="dirigeant">
          <h2 class="text-fx-blue-slim">Renaud de Lacotte - Fondateur - Président</h2>
          <h3 class="text-fx-blue-slim">Parcours</h3>
          <p>
            Renaud a notamment cofondé en 2000 l'éditeur de logiciels Enablon
            dont il a, durant 7 ans, contribué au développement et au succès en
            assurant les rôles de VP Services puis VP Business Development.
          </p>
          <h3 class="text-fx-blue-slim">Pourquoi Fluxod</h3>
          <p>
            Après avoir adressé le marché des grandes entreprises pendant
            plusieurs années, il m'est apparu essentiel que nous puissions
            mettre à disposition des PME des outils similaires à ceux que
            peuvent utiliser les grands groupes.<br />
            Dès lors le grand défi qui s'ouvrait à nous était d'accompagner
            l'offre que nous souhaitions mettre en place d'une structure
            tarifaire adaptée à notre cible.<br />
            Ce défi nous y avons répondu en créant l'infrastructure
            technologique Fluxod que vous découvrirez en parcourant notre site.
            Ses principaux atouts: une grande capacité d'adaptation aux besoins
            de nos clients et une facilité de mise en place inégalée en
            conservant la fiabilité et la sécurité de systèmes beaucoup plus
            lourds.<br />
            Au delà de tout cela, nous faisons très attention d'avoir une vision
            humaine de l'entreprise où chacun peut, à son rythme, trouver une
            place, évoluer et nous accompagner pour atteindre de façon durable
            les résultats que nous nous sommes fixés.
          </p>
        </div>

        <div class="dirigeant">
          <h2 class="text-fx-blue-slim">Ludovic de la Genardière - Fondateur - Directeur des Services</h2>
          <h3 class="text-fx-blue-slim">Parcours</h3>
          <p>
            Après deux ans à la Société Générale CIB en tant Custodian Network
            manager, Ludovic de la Genardière choisit de se tourner vers le
            conseil en système d’information et intègre début 2001, le cabinet
            OTC Conseil. Durant 5 ans, il participe et/ou pilote des missions de
            conseil en organisation ou de maîtrise d’ouvrage dans des
            établissements bancaires ou des sociétés de gestion, en tant que
            consultant puis responsable de missions et contribue également au
            développement de l’offre « Asset Management » du cabinet. En 2006,
            il fonde le cabinet de conseil Deciseo (renommé VP&amp;White)
            spécialisé dans la conception de solutions web collaboratives en
            partenariat avec l’éditeur Enablon. En 2007, il s’associe avec
            Renaud de Lacotte pour créer investigo.fr, premier site permettant
            aux PME de réaliser des levées de fonds auprès d’investisseurs
            privés, puis Fluxod.
          </p>
          <h3 class="text-fx-blue-slim">Pourquoi Fluxod</h3>
          <p>
            Réunir sous une même casquette maîtrise d’ouvrage et maîtrise
            d’oeuvre, afin de donner à un expert métier la possibilité de
            transformer sa connaissance en processus au sein d’une application.
            Ce challenge nous est rapidement apparu comme une évidence en
            dressant le constat que les PME n’avaient que très peu de
            possibilités pour se doter d’outils leur permettant de se structurer
            et de piloter leur activité.
          </p>
        </div>

        <div class="dirigeant">
          <h2 class="text-fx-blue-slim">Antoine Joulie - Fondateur - Directeur technique</h2>
          <h3 class="text-fx-blue-slim">Parcours</h3>
          <p>
            Après un doctorat en informatique théorique, Antoine Joulie rejoint
            l'équipe de développement de l'éditeur de logiciel financier FactSet
            - JCF. Pendant 2 ans, il contribue au développement des produits de
            saisie et de contrôle d'intégrité de la base de données financière
            de FactSet, utilisée par les produits Excel Connect et FactSet
            Estimate.
          </p>
          <h3 class="text-fx-blue-slim">Pourquoi Fluxod</h3>
          <p>
            Plusieurs années de liberté de pensée (et de liberté tout court)
            dans le monde de la recherche scientifique et une première
            expérience enrichissante dans une entreprise privée m'ont poussé à
            réunir le pragmatisme et la réactivité nécessaires pour entreprendre
            avec mon besoin de création.
            <br />
            Quoi de mieux que Elab pour cela! Le secteur du Cloud Computing est
            jeune et en continuelle évolution. Avec sa base open source, la
            technologie Fluxod est armée pour anticiper toutes ces évolutions.
            Notre but est de devancer les besoins de plus en plus innovants de
            nos clients.
            <br />
            Une technologie de pointe aux services d'entreprises à taille
            humaine, un développement agile pour des produits en perpétuelle
            amélioration, de la bonne humeur et une bonne dose de boulot sont
            les atouts de Fluxod pour se placer en leader sur le marché des
            applications collaboratives SaaS.
          </p>
        </div>
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