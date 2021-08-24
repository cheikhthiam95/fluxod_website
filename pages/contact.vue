



<template>
  <div>
    <!-- Showcase -->
    <section class="showcase">
      <div class="fx-container grid">
        <div class="">
          <h1 class="xl">Contactez-nous</h1>
          <p>
            Vous avez encore des questions sur Fluxod ? Vous souhaitez une
            démonstration de nos produits ? Un commentaire ? une observation ?
            Voici comment nous joindre.
          </p>
        </div>

        <div class="showcase-form object"></div>
      </div>
    </section>
    <section class="fx-container" style="position: relative">
      <!-- contact section starts  -->

      <section class="contact" id="contact">
        <div class="row">
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="600"
            height="600"
            src="https://www.fluxod.com/elabxrm//pistes/new_lead?parametrage_id=1&lead_source_id=10&lead_statut_id=2&contact_id=12&intitule=formulaire%20inscription%20d%C3%A9mo"
          >
          </iframe>
          <form action="">
            <div class="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <input type="number" placeholder="number" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea
              placeholder="message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" class="btn" value="send message" />
          </form>
        </div>
      </section>

      <!-- contact section ends -->
    </section>
  </div>
</template>

 