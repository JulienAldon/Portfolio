---
permalink:      /biblio
layout:         article
title:          "Gestion de la bibliotèque"
date:           2021-04-11
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
        "description": "À la maison on à une grande bibliotèque et on se perd lorsqu'on cherche une référence en particulier. On a alors décidé de créer une base de donnée avec tous les livres présents, et un outil permettant de gérer cette base de donnée facilement."
    }
    </script>

---
## Outil de gestion de base de donnée de livres
### Pour enregistrer la bibliotèque de la maison
À la maison on à une grande bibliotèque et on se perd lorsqu'on cherche une référence en particulier. 
On a alors décidé de créer une base de donnée avec tous les livres présents, et un outil permettant de gérer cette base de donnée facilement.
<!--more-->
Le projet avait été fait il y a longtemps en PHP, mais le site était lent et pas très beau.
J'ai donc refait l'outil avec des technologies modernes :
- VueJS 
- FastAPI 

Les requêtes à la base de donnée sans ORM avec un binding Python mySQL.
