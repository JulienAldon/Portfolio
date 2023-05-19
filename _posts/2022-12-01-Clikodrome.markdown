---
permalink:      /clikodrome
layout:         article
title:          "Le clikodrome"
date:           2022-01-12
images:         [
    "/assets/images/ressources/Clikodrome/demo_sessions.png",
    "/assets/images/ressources/Clikodrome/demo_session.png",
    "/assets/images/ressources/Clikodrome/demo_remote.png",
]
images-title:   [
    "Liste de toutes les sessions, depuis cette vue, les sessions du jour peuvent être ajoutés.",
    "Information concernant une session.",
    "Vue permettant d'ajouter des apprenant en distenciel.",
]
icons:          ["fab fa-python", "fa-brands fa-react"]
icons-title:    ["Fait avec Python FastAPI", "ReactJS pour le front"]
made-by:        "Réalisé par <a href='https://github.com/JulienAldon'>Julien Aldon</a>"
homepages:      [
    "https://github.com/JulienAldon/Clikodrome",
]
homepages-title: [
    'Lien vers le github',
]
homepages-icons: [
    'fab fa-github',
]
excerpt_separator: <!--more-->
---
## Client facilitant l'usage d'edusign
### Pour la pédagogie Epitech MSC
Ce projet concentre tout le processus d'emargement Epitech MSC (Bac +5 Alternance). L'idée étant de simplifier la vie de la pédagogie
en automatisant le plus de tâches et en introduisant des éléments d'UX importants.
<!--more-->
Le projet à été fait avec Fast API et React pour le front. Il accomplit 2 tâches au seins du processus d'émargement:
- Les sessions : Récupération des listes de présences depuis l'intranet Epitech. Permet de visualiser les élèves présents et absents. Le pédago peut mettre en retard ou présent un élève en cochant son statut. Il peut valider la session puis envoyer les mails de présence à tous les élèves qu'il gere.
- Les remotes : Certain élèves avaient un distenciel autorisé exceptionnel (pour raisons médicales par exemple). Cette vue permet d'ajouter des élève en distenciel pour une periode donnée, ils recoivent automatiquement leur mail de présence.

Dans le futur, j'aimerai faire évoluer Clikodrome pour qu'il s'occupe de l'intégralité du processus d'émargement c'est à dire : 
- Scanner les cartes des apprenant.
- Sauvegarder leurs statut dans une base de donnée.
- Permettre l'envoi de mails aux apprenant présent sur une session.
- Générer des rapports de suivis pour un apprenant.