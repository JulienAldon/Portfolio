---
permalink:      /escapethevolcano
layout:         project
title:          "Escape The Volcano"
date:           2020-07-28
description:    "Escape The Volcano est un jeu vidéo en 2D, sur le thème cyberpunk. Un campement de robots se retrouve sans matériel pour maintenir les réparations, le plus courageux d'entre eux décide de monter une équipe pour sauter dans le mystérieux volcan et aller chercher le trésor : des composants mécaniques. Durant la partie, vous, contrôlez une équipe de robots, votre but est de surmonter les obstacles se présentant à vous, trouver le chemin vers le trésor, puis sortir du volcan. Le tout en essuyant le moins de pertes possibles évidemment !"
images:
    - img: "/assets/images/ressources/ETV/Menu.webp"
      alt: "Menu du jeu Escape the volcano."
    - img: "/assets/images/ressources/ETV/Climber.webp"
      alt: "Pouvoir de la classe Climber."
    - img: "/assets/images/ressources/ETV/InGameBlob.webp"
      alt: "Ennemi Blob et Pouvoir de la classe tracker."
    - img: "La salle du trésor est recouverte de lave !"
      alt: "/assets/images/ressources/ETV/InGameLava.webp"

technos:
    - tech: "Python"
      url: "https://python.org"
    - tech: "Unity"
      url: "https://unity.com/"

homepages:
    - url: "https://github.com/JulienAldon/EscapeTheVolcano"
      alt: "Lien vers le github"
      icon: "fab fa-github"

made-by: "Réalisé par <a rel='author' target='_blank' href='https://github.com/JulienAldon'>Julien Aldon</a>"

excerpt_separator: <!--more-->
google-seo-data-markup: |
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Game",
        "name": "Escape The Volcano",
        "image": "https://julien.aldon.fr/assets/images/ressources/ETV/Menu.webp",
        "author": {
            "@type": "Person",
            "name": "Julien Aldon",
            "url": "https://julien.aldon.fr"
        },
        "description": "Escape The Volcano est un jeu vidéo en 2D, sur le thème cyberpunk. Un campement de robots se retrouve sans matériel pour maintenir les réparations, le plus courageux d'entre eux décide de monter une équipe pour sauter dans le mystérieux volcan et aller chercher le trésor : des composants mécaniques. Durant la partie, vous, contrôlez une équipe de robots, votre but est de surmonter les obstacles se présentant à vous, trouver le chemin vers le trésor, puis sortir du volcan. Le tout en essuyant le moins de pertes possibles évidemment !"
    }
    </script>
color: dark-chocolate

---
## Jeu vidéo
### Réalisé avec Unity
Escape The Volcano est un jeu vidéo en 2D, sur le thème cyberpunk. <!--more-->
Un campement de robots se retrouve sans matériel pour maintenir les réparations, le plus courageux d'entre eux décide de monter une équipe pour sauter dans le mystérieux volcan et aller chercher le trésor : des composants mécaniques. Durant la partie, vous, contrôlez une équipe de robots, votre but est de surmonter les obstacles se présentant à vous, trouver le chemin vers le trésor, puis sortir du volcan. Le tout en essuyant le moins de pertes possibles évidemment !

En quatrième année, en Russie, j'ai eu l'occasion de suivre des cours de game design à l'université SPB SUT.
Nous avions à définir les mécaniques, l'histoire, le thème d'un jeu à l'aide de mots aléatoirement choisis.
Pour ma part, j'ai tiré au sort les mots suivants :
- Volcano : le jeu comporte un volcan.
- Cyberpunk : les personnages et les graphismes sont inspirés du genre cyberpunk.
- Cross-platform : le jeu doit être adapté pour au moins deux plateformes (Android / PC).
- RPG : composants de RPG : personnages, statistiques, archétypes...
            
#### Le but du jeu
- Créer son équipe de robots.
- Entrer dans le volcan.
- Récupérer le trésor.
- S'échapper avant que la lave ne nous rattrape !

Le thème cyberpunk se retrouve dans les graphismes du jeu. L'aspect RPG est évoqué par les statistiques des personnages robots que nous recrutons. Les robots que nous recrutons peuvent être gardés sur plusieurs parties ce qui instaure une continuité entre les parties.

Le jeu se veut "simple" dans ses contrôles pour laisser une possibilité de cross-platform entre PC et mobile. Le jeu est également disponible sur linux, mac et windows. Une fois que les mécaniques du jeu ont été imaginées, j'ai décidé de réaliser un prototype en python puis avec le moteur unity.