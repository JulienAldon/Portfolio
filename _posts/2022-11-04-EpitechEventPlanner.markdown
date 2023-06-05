---
permalink:      /epitecheventplanner
layout:         article
title:          "Epitech Event Planner"
date:           2022-01-12
description:    "Outil de planification de session pour l'intranet Epitech. L'outil créé des sessions d'une activité donnée et enregistre les apprenants liés à la promotion sélectionnée. EEplanner sert à simplifier la planifification des événements en masse pour les activités d'émmargement. L'outil s'inscrit dans le processus d'émmargement d'epitech MSC."
images:         [
    "/assets/images/ressources/EventPlanner/EventPlannerVue.webp",
    "/assets/images/ressources/EventPlanner/EventPlannerEnCour.webp",
    "/assets/images/ressources/EventPlanner/EventPlannerError.webp",
    "/assets/images/ressources/EventPlanner/EventPlannerFinished.webp"
]
images-title:   [
    "Vue principale du logiciel avec GTK.",
    "Une barre de chargement se remplit au fur et à mesure de la réalisation des tâches.",
    "Certaines erreurs peuvent survenir durant l'utilisation de l'outil.",
    "Une fois le travail termniné, l'application."
]
icons:          ["fab fa-python", "fa fa-television"]
icons-title:    ["Made with Python", "GUI made with PyGTK"]
made-by:        "<b>Interface</b> & <b>CLI</b> (Command Line Interface) réalisé par <a href='https://github.com/JulienAldon'>Julien Aldon</a>"
homepages:      [
    "https://github.com/JulienAldon/EpitechEventPlanner",
]
homepages-title: [
    'Lien vers le github',
]
homepages-icons: [
    'fab fa-github',
]
excerpt_separator: <!--more-->
google-seo-data-markup: |
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Epitech Event Planner",
        "image": "https://julien.aldon.fr/assets/images/ressources/EventPlanner/EventPlannerVue.webp",
        "author": {
            "@type": "Person",
            "name": "Julien Aldon",
            "url": "https://julien.aldon.fr"
        },
        "description": "Outil de planification de session pour l'intranet Epitech. L'outil créé des sessions d'une activité donnée et enregistre les apprenants liés à la promotion sélectionnée. EEplanner sert à simplifier la planifification des événements en masse pour les activités d'émmargement. L'outil s'inscrit dans le processus d'émmargement d'epitech MSC."
    }
    </script>
---
## Outil de planification d'événements
### Pour l'intranet EPITECH
Outil de planification d'événements pour l'intranet Epitech. L'outil créé des sessions d'une activité donnée et enregistre les apprenants liés à la promotion sélectionnée. EEplanner sert à simplifier la planification des événements en masse pour les activités d'émargement. L'outil s'inscrit dans le processus d'émargement d'epitech MSC.
<!--more-->
EEplanner fait partie des 3 outils servant au suivi des présences MSC : 
- EEplanner : automatise l'instanciation et l'inscription des promotions aux activités d'émargement.
- Etoken & L'intranet Epitech : sert à scanner les cartes apprenant et stocker le statut de présence des apprenants.
- Clikodrome : récupère le statut de présence des apprenants depuis l'intranet et demande à l'API edusign d'envoyer les mails de présence.

Le projet est réalisé avec GTK en python, c'est la première fois que je manipule Glade pour la création de l'interface. L'interface, le CLI et le modèle sont trois parties distinctes de l'application, et ne sont pas interdépendantes.

L'outil contient un wrapper sur l'intranet EPITECH **(interface)** permettant à d'autres membres de l'équipe pédagogique
de developper des outils autour de ce dernier. Ce Wrapper est disponible sur Pypi : <a href="https://pypi.org/project/yawaei/0.0.8/">Yawaei</a>. L'outil également est fourni avec un **GUI (Graphical User Interface)** et un **CLI (Command Line Interface)**.
Tout le nécessaire pour installer le programme est fournit dans le dépôt. Le dépôt à un Makefile permettant d'installer l'application avec pip, sinon, il est possible de build pour ubuntu & debian (.deb) ainsi que pour Archlinux (PKGBUILD).