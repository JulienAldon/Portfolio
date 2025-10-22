---
permalink:      /amap-contract-generation
layout:         project
title:          "Génération de contrats pour l'AMAP de Croix Luizet"
date:           2025-10-22
description:    "Outil de génération de modèles de contrat, formulaires et contrats pour une AMAP."

images:
    - img: "/assets/images/ressources/AmapContractGeneration/ContratMembres.webp"
      alt: "Contrat généré pour les membres de l'association."
    - img: "/assets/images/ressources/AmapContractGeneration/ContratReferent.webp"
      alt: "Contrat à destination des référents de l'association."
    - img: "/assets/images/ressources/AmapContractGeneration/WorkflowContrat.webp"
      alt: "Workflow de génération de contrats."
    - img: "/assets/images/ressources/AmapContractGeneration/WorkflowFormulaire.webp"
      alt: "Workflow de génération de modèles et de formulaires."

technos: 
    - tech: "Python"
      url: "https://python.org"
    - tech: "Nextcloud"
      url: "https://nextcloud.com"
    - tech: "Windmill"
      url: "https://www.windmill.dev"

made-by: "Réalisé par <a rel='author' target='_blank' href='https://github.com/JulienAldon'>Julien Aldon</a>"

homepages:
    - url: "https://github.com/JulienAldon/AmapContractGeneration"
      alt: "Page du projet sur github"
      icon: "fab fa-github"

excerpt_separator: <!--more-->
google-seo-data-markup: |
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "",
        "headline": "Génération de contrats pour l'AMAP de Croix Luizet",
        "image": "https://julien.aldon.fr/assets/images/ressources/AmapContractGeneration/ContratMembres.webp",
        "author": {
            "@type": "Person",
            "name": "Julien Aldon",
            "url": "https://julien.aldon.fr"
        },
        "description": "Outil de génération de modèles de contrat, formulaires et contrats pour une AMAP."
    }
    </script>
color: dark-chocolate
---
## Génération de contrats pour l'AMAP de Croix Luizet
Je suis référent pour l'amap de croix luizet (Association au maintient de l'agriculture paysanne). Les contrats au sein de cette amap étaient tous encore sur papier / PDF envoyés par email par les membres aux référent avant chaque saison de livraison.
<!--more-->
Le besoin de générer ces contrats et de faciliter la rédaction de ces contrats pour les membres se faisait ressentir. J'ai donc développé une solution permettant de générer des modèles et des formulaire de contrats à destination des membres à l'aide d'un formulaire nextcloud forms. 

La solution comporte 2 formulaires : Un formulaire à destination des référents pour générer un modèle et un formulaire, et un formulaire à destination des membres pour générer un contrat au format odt et pdf.

Je souhaitais que la solution soit le plus simple possible pour les référents non techniques. Pour cela un formulaire semblait tout choisi ! Le formulaire à destination des référent demande quelques informations, sur le producteur, le référent, les produits et les dates de livraisons. Puis une fois rendu, génère un modele de contrat et un formulaire lié à ce modèle.
J'utilise les fonctionnalités de nextcloud forms et l'integration windmill au sein de nextcloud (moteur de workflow). Le workflow windmill se charge de récupérer les réponses des formulaires, et de générer les modèles et les formulaires nextcloud forms.

Le second formulaire à destination des membres, une fois généré, propose les produits, par livraison ou non en fonction de ce que le référent à renseigné dans son propre formualaire. Une fois envoyé, les scripts génèrent un contrat en pdf et l'envoi par mail aux membres.

Les contrats sont ensuite disponibles dans l'espace partagé aux référents. Ils peuvent ensuite les transmettres au producteurs comme d'habitude.

Tous les scripts sont écrits en Python au sein du moteur de workflow Windmill.