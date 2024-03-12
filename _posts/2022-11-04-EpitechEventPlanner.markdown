---
permalink: /epitecheventplanner
layout: project
title: "Epitech Event Planner"
date: 2022-01-12
description: "Outil de planification de session pour l'intranet Epitech. L'outil crée des sessions d'une activité donnée et enregistre les apprenants liés à la promotion sélectionnée. EEplanner sert à simplifier la planification des événements en masse pour les activités d'émargement. L'outil s'inscrit dans le processus d'émargement d'Epitech MSC."

images:
  - img: "/assets/images/ressources/EventPlanner/EventPlannerLight.webp"
    alt: "Vue principale du logiciel avec GTK."
  - img: "/assets/images/ressources/EventPlanner/EventPlannerEnCour.webp"
    alt: "Une barre de chargement se remplit au fur et à mesure de la réalisation des tâches."
  - img: "/assets/images/ressources/EventPlanner/EventPlannerError.webp"
    alt: "Certaines erreurs peuvent survenir durant l'utilisation de l'outil."
  - img: "/assets/images/ressources/EventPlanner/EventPlannerFinished.webp"
    alt: "Une fois le travail termniné, l'application."

technos:
  - tech: "Python"
    url: "https://www.python.org/"
  - tech: "PyGTK"
    url: "https://wiki.python.org/moin/PyGtk"

homepages:
  - url: "https://github.com/JulienAldon/EpitechEventPlanner"
    alt: "Lien vers le github"
    icon: "fab fa-github"

made-by: "Réalisé par <a rel='author' target='_blank' href='https://github.com/JulienAldon'>Julien Aldon</a>"

excerpt_separator: <!--more-->
google-seo-data-markup: |
  <script type="application/ld+json">
  {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "Name": "Epitech Event Planner",
      "image": "https://julien.aldon.fr/assets/images/ressources/EventPlanner/EventPlannerVue.webp",
      "author": {
          "@type": "Person",
          "name": "Julien Aldon",
          "url": "https://julien.aldon.fr"
      },
      "availableOnDevice": "Linux",
      "applicationCategory": "Desktop Application",
      "downloadUrl": "https://github.com/JulienAldon/EpitechEventPlanner",
      "description": "Outil de planification de session pour l'intranet Epitech. L'outil crée des sessions d'une activité donnée et enregistre les apprenants liés à la promotion sélectionnée. EEplanner sert à simplifier la planification des événements en masse pour les activités d'émargement. L'outil s'inscrit dans le processus d'émargement d'Epitech MSC."
  }
  </script>
color: dark-chocolate
---

## Outil de planification d'événements
### Intranet EPITECH

Outil de planification d'événements pour l'intranet Epitech. L'outil crée des sessions d'une activité donnée et enregistre les apprenants liés à la promotion sélectionnée.

<!--more-->

EEplanner sert à simplifier la planification des événements en masse pour les activités d'émargement. L'outil s'inscrit dans le processus d'émargement d'Epitech MSC.
EEplanner fait partie des 3 outils servant au suivi des présences MSC, il automatise l'instanciation et l'inscription des promotions aux activités d'émargement. Etoken & L'intranet Epitech : sert à scanner les cartes apprenant et stocker le statut de présence des apprenants. Clikodrome : récupère le statut de présence des apprenants depuis l'intranet et demande à l'API Edusign d'envoyer les mails de présence.

Le projet est réalisé avec GTK en python, c'est la première fois que je manipule Glade pour la création de l'interface. L'interface, le CLI et le modèle sont trois parties distinctes de l'application, et ne sont pas interdépendants.

L'outil contient un wrapper sur l'intranet EPITECH **(interface)** permettant à d'autres membres de l'équipe pédagogique
de développer des outils autour de ce dernier. Ce Wrapper est disponible sur Pypi : <a href="https://pypi.org/project/yawaei/0.0.8/">Yawaei</a>. L'outil également est fourni avec un **GUI (Graphical User Interface)** et un **CLI (Command Line Interface)**.
Tout le nécessaire pour installer le programme est fourni dans le dépôt. Le dépôt à un Makefile permettant d'installer l'application avec pip, sinon, il est possible de build pour ubuntu & debian (.deb) ainsi que pour Archlinux (PKGBUILD).
