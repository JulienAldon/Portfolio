---
permalink:      /biblio
layout:         article
title:          "Gestion de la bibliothèque"
date:           2021-04-11
description:    "La bibliothèque de la maison est si grande que l'on est incapable de dire avec certitude si on possède tel ou tel livre ou film. On a alors décidé de créer une base de données regroupant tous les livres et les films présents. Cette base de données peut être parcouru sur le navigateur grâce à une interface web réalisée avec VueJS."
images:         [
    "/assets/images/ressources/HomeBiblio/Books.webp",
    "/assets/images/ressources/HomeBiblio/Films.webp",
    "/assets/images/ressources/HomeBiblio/Home.webp",
    "/assets/images/ressources/HomeBiblio/About.webp"
]
images-title:   [
    "Vue des livres elle permet de filtrer, chercher et editer des entrées de livres dans la base de donnée.",
    "Vue des filmes elle permet de filtrer, chercher et editer des entrées de films dans la base de donnée.",
    "Page d'accueil du site.",
    "Page à propos du site."
]
icons:          ["fab fa-python", "fa-brands fa-vuejs"]
icons-title:    ["Fait avec Python FastAPI", "VueJS pour le front"]
made-by:        "Réalisé par <a href='https://github.com/JulienAldon'>Julien Aldon</a>"
homepages:      [
    "https://github.com/JulienAldon/FamilleAldonBiblio",
    "https://home.aldon.fr",
]
homepages-title: [
    'Lien vers le github',
    'Lien vers le site'
]
homepages-icons: [
    'fab fa-github',
    'fa fa-globe'
]
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
## Outil de gestion de base de donnée de livres
### Pour enregistrer la bibliothèque de la maison
La bibliothèque de la maison est si grande que l'on est incapable de dire avec certitude si on possède tel ou tel livre ou film. On a alors décidé de créer une base de données regroupant tous les livres et les films présents. Cette base de données peut être parcouru sur le navigateur grâce à une interface web réalisée avec VueJS.
<!--more-->
Le projet avait été fait il y a longtemps en PHP, mais le site était lent et pas très beau. Suite à une refactorisation du code, les technologies suivantes ont été retenues : 
- VueJS : Pour la réactivité et pour revoir du MVVM.
- FastAPI : Le framework fastAPI est ultra simple et compact pour faire de petit backend.

Les requêtes à la base de donnée sont faites sans ORM en SQL "pur" avec un binding Python mySQL.