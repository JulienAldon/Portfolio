---
permalink:      /clikodrome
layout:         project
title:          "Le clikodrome"
date:           2022-01-12
description:    "Clikodrome est un outil faisant le lien entre une source de donnée (l'intranet epitech) et l'API d'edusign. Le processus d'émargement Epitech MSC (Bac +5 Alternance) dépend de cet outil pour envoyer les mails de signature aux apprenants une fois leur carte scannée. L'idée étant de simplifier la vie de la pédagogie en automatisant le plus de tâches possibles."

images:
    - img: "/assets/images/ressources/Clikodrome/demo_responsive.webp"
      alt: "Affichage en vue tablette."
    - img: "/assets/images/ressources/Clikodrome/demo_sessions.webp"
      alt: "Liste de toutes les sessions, depuis cette vue, les sessions du jour peuvent être ajoutés."    
    - img: "/assets/images/ressources/Clikodrome/demo_session.webp"
      alt: "Information concernant une session."
    - img: "/assets/images/ressources/Clikodrome/demo_remote.webp"
      alt: "Vue permettant d'ajouter des apprenant en distenciel."

technos:
    - tech: "Python"
      url: "https://www.python.org/"
    - tech: "FastAPI"
      url: "https://fastapi.tiangolo.com/"
    - tech: "Javascript"
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    - tech: "React"
      url: "https://react.dev/"

made-by: "Réalisé par <a rel='author' target='_blank' href='https://github.com/JulienAldon'>Julien Aldon</a>"

homepages:
    - url: "https://github.com/JulienAldon/Clikodrome"
      alt: "Lien vers le github"
      icon: "fab fa-github"

excerpt_separator: <!--more-->

google-seo-data-markup: |
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Le clikodrome",
        "image": "https://julien.aldon.fr/assets/images/ressources/Clikodrome/demo_sessions.webp",
        "author": {
            "@type": "Person",
            "name": "Julien Aldon",
            "url": "https://julien.aldon.fr"
        },
        "description": "Ce projet concentre tout le processus d'émargement Epitech MSC (Bac +5 Alternance). L'idée étant de simplifier la vie de la pédagogie en automatisant le plus de tâches et en introduisant des éléments d'UX importants."
    }
    </script>
color: dark-chocolate
---
# Client facilitant l'usage d'edusign
## Pour la pédagogie Epitech MSC
Clikodrome est un outil faisant le lien entre une source de donnée (l'intranet Epitech) et l'API d'Edusign.
<!--more-->
Le processus d'émargement Epitech MSC (Bac +5 Alternance) dépend de cet outil pour envoyer les mails de signature aux apprenants une fois leur carte scannée. L'idée étant de simplifier la vie de la pédagogie en automatisant le plus de tâches possibles.
Au sein de l'école Epitech Lyon, nous avons mis en place il y a quelques années un émargement avec la carte étudiante. La feuille de présence est une session sur une activité dans un module sur l'intranet Epitech, la création de la session se fait grâce à, <a rel="external" target="_blank" href="https://julien.aldon.fr/epitecheventplanner">EEplanner</a>. On utilise Etoken (application mobile) pour scanner les cartes lors des sessions d'émargement physique tous les matins et soirs. Nous avions mis en place une règle powerautomate pour générer un Excel avec les données des sessions de présence du jour et nous n'avions plus qu'à envoyer les mails de présence depuis l'interface Edusign. Cette tâche bien qu'"automatisée manuellement" nous prenait encore beaucoup de temps et de clics dans l'interface Edusign.

Clikodrome est une petite application web qui lie les sessions sur l'intranet et les session Edusign. Elle nous permet d'envoyer tous les mails en un clic, changer le statut de présence s'il y a eu un souci, et ajouter un statut de retard si besoin (la fonctionnalité est configurable). Toutes ces manipulations doivent être validées par le responsable avant de pouvoir envoyer les mails.

Le projet a été écrit avec FastAPI pour le backend et React pour le front. FastAPI, me permettait d'être opérationnel très rapidement pour le développement de l'outil, et React est toujours aussi efficace pour faire des interfaces réactives et fluides. J'ai essayé de garder les interfaces internes (models) les plus modulaires possibles pour me permettre d'implémenter rapidement des changements (comme l'intégration d'une nouvelle API).

Dans le futur, j'aimerais faire évoluer Clikodrome pour qu'il s'occupe de l'intégralité du processus d'émargement, c'est-à-dire : Scanner les cartes des apprenants, ,sauvegarder leurs statuts dans une base de données, permettre l'envoi de mails aux apprenants présent sur une session et générer des rapports de suivi pour un apprenant.