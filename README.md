# Formation "introduction react"
Exercices dédiés à la formation d'introduction à React.

> Note : clonez ce repository pour pouvoir participer aux ateliers

> :warning: Node 14+ requis.

## Préalable à l'atelier

- Installez le projet : `npm install`
- Lancez le server : `npm start`

## Atelier 6

Le but de cet exercice est de créer un store général à toute l'application permettant de stocker un utilisateur et les éléments mis en wishlist.

- Par défaut aucun utilisateur n'est connecté. Les boutons d'ajout à la wishlist sont désactivés.
- Un bouton est disponible dans le header pour connecter un utilisateur (stockez son nom en dur sans formulaire de login). 
- Une fois l'utilisateur connecté :
  - Le bouton du header se transforme en "se déconnecter"
  - Les boutons de wishlist sont activés et leur état doit être stocké dans le store global.
  - Le champ nom du formulaire d'ajout de commentaire passe en readonly et est pré-rempli avec le nom de l'utilisateur connecté.
