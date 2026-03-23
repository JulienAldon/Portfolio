---
permalink:      /amapcontract
layout:         project
title:          "Plateforme de gestion des contrats de producteurs pour l'amap croix luizet"
date:           "2026-03-01"
description:    "Plateforme de gestion des produits, producteurs et formulaires de contrat."

images:
    - img: "/assets/images/ressources/AmapContract/Home.webp"
      alt: "La page d'accueil pour les utilisateurs non référents."
    - img: "/assets/images/ressources/AmapContract/Homedoc.webp"
      alt: "La page d'accueil pour les référents."
    - img: "/assets/images/ressources/AmapContract/Products.webp"
      alt: "Un des formulaires pour créer les resources."
    - img: "/assets/images/ressources/AmapContract/Form.webp"
      alt: "Formulaire de contrat."


technos: 
    - tech: "Python"
      url: "https://python.org"
    - tech: "React"
      url: "https://fr.react.dev/"

homepages:
    - url: "https://gitea.aldon.fr/Mop/amap"
      alt: "Lien vers le gitea"
      icon: "fab fa-github"
    - url: "https://amap.aldon.fr"
      alt: "Lien vers la plateforme"
      icon: "fa-solid fa-globe"
      
made-by: "Réalisé par <a rel='author' target='_blank' href='https://github.com/JulienAldon'>Julien Aldon</a>"

excerpt_separator: <!--more-->
google-seo-data-markup: |
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "headline": "Plateforme de gestion des contrats de producteurs pour l'amap croix luizet",
        "image": "https://julien.aldon.fr/assets/images/ressources/AmapContract/Home.webp",
        "author": {
            "@type": "Person",
            "name": "Julien Aldon",
            "url": "https://julien.aldon.fr"
        },
        "description": "Plateforme de gestion des produits, producteurs et formulaires de contrat."
    }
    </script>
color: dark-chocolate
---
## Plateforme de gestion des contrats de producteurs pour l'amap croix luizet
Au sein de l'association pour le maintien de l'agriculuture paysanne (AMAP). Les contrats étaient toujours remplis à la main.
<!--more-->
En plus de proposer une uniformisation des modèles de contrats, la plateforme permet de gerer les saisons plus facilement en proposant, aux référents des producteurs, de créer des formulaires en ligne facilement à travers un tableau de bord interactif.

Cette plateforme à été développée en Python (fastAPI) et react (frontend) en quelques jours, afin de pouvoir être opperationnelle pour les contrat du printemps 2026.
