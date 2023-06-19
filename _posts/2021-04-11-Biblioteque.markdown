---
permalink:      /biblio
layout:         project
title:          "Gestion de la bibliothèque"
date:           2021-04-11
description:    "La bibliothèque de la maison est si grande que l'on est incapable de dire avec certitude si on possède tel ou tel livre ou film. On a alors décidé de créer une base de données regroupant tous les livres et les films présents. Cette base de données peut être parcouru sur le navigateur grâce à une interface web réalisée avec VueJS."
images:
    - img: "/assets/images/ressources/HomeBiblio/Books.webp"
      alt: "Vue des livres elle permet de filtrer, chercher et editer des entrées de livres dans la base de donnée."
    - img: "/assets/images/ressources/HomeBiblio/Films.webp"
      alt: "Vue des filmes elle permet de filtrer, chercher et editer des entrées de films dans la base de donnée."
    - img: "/assets/images/ressources/HomeBiblio/Home.webp"
      alt: "Page d'accueil du site."
    - img: "/assets/images/ressources/HomeBiblio/About.webp"
      alt: "Page à propos du site."

technos:
    - tech: "Python"
      url: "https://python.org"
    - tech: "FastAPI"
      url: "https://fastapi.tiangolo.com/"
    - tech: "Javascript"
      url: "https://developer.mozilla.org/en-US/docs/Web/javascript"
    - tech: "VueJS"
      url: "https://vuejs.org/"

homepages:
    - url: "https://github.com/JulienAldon/FamilleAldonBiblio"
      alt: "Lien vers le github"
      icon: "fab fa-github"
    - url: "https://home.aldon.fr"
      alt: "Lien vers le site"
      icon: "fa fa-globe"

made-by: "Réalisé par <a rel='author' target='_blank' href='https://github.com/JulienAldon'>Julien Aldon</a>"
excerpt_separator: <!--more-->
google-seo-data-markup: |
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Aldon Biblio",
        "image": "https://julien.aldon.fr/assets/images/ressources/HomeBiblio/Books.webp",
        "author": {
            "@type": "Person",
            "name": "Julien Aldon",
            "url": "https://julien.aldon.fr"
        },
        "description": "La bibliothèque de la maison est si grande que l'on est incapable de dire avec certitude si on possède tel ou tel livre ou film. On a alors décidé de créer une base de données regroupant tous les livres et les films présents. Cette base de données peut être parcouru sur le navigateur grâce à une interface web réalisée avec VueJS."
    }
    </script>

---
# Outil de gestion de base de donnée de livres
## Pour enregistrer la bibliothèque de la maison
La bibliothèque de la maison est si grande que l'on est incapable de dire avec certitude si on possède tel ou tel livre ou film.
<!--more-->
On a alors décidé de créer une base de données regroupant tous les livres et les films présents. Cette base de données peut être parcouru sur le navigateur grâce à une interface web réalisée avec VueJS.
Le projet avait été fait il y a longtemps en PHP, mais le site était lent et pas très beau. Suite à une refactorisation du code, les technologies suivantes ont été retenues : VueJS, pour la réactivité et pour revoir du MVVM. FastAPI : Le framework fastAPI est ultra simple et compact pour faire de petit backend.

Les requêtes à la base de donnée sont faites sans ORM en SQL "pur" avec un binding Python mySQL.