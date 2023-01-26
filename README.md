# Formation "introduction react"
Exercices dédiés à la formation d'introduction à React.

> Note : clonez ce repository pour pouvoir participer aux ateliers

> :warning: Node 14+ requis.

## Préalable à l'atelier

- Installez le projet : `npm install`
- Lancez le server : `npm start`

## Atelier 3

Le but de cet exercice est d'interroger une API de bibliothèque, d'afficher la liste des livres avec la possibilité de les ordonner. Les livres devront pouvoir être ajoutés à une wishlist qui sera réutilisable dans d'autres pages.

Pour ce faire :
 
- modifier le composant de List pour requêter l'API
- modifier la gestion de l'ordonnancement en utilisant une boîte de selection
- rendre la liste ordonnable par isbn, titre, auteur ou date de publication en requêtant l'API ([voir la documentation][documentation])
- ajouter un bouton à chaque Card, permettant d'ajouter/retirer un livre à une wishlist qui doit être globale à tout le site

> Note : pour demander la liste des livres à l'API, vous pouvez adresser une requête GET à [cette adresse](https://demo.api-platform.com/books.jsonld)

[documentation]: https://demo.api-platform.com/docs
