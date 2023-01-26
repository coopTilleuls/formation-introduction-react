# Formation "introduction react"
Exercices dédiés à la formation d'introduction à React.

> Note : clonez ce repository pour pouvoir participer aux ateliers

> :warning: Node 14+ requis.

## Préalable à l'atelier

- Installez le projet : `npm install`
- Lancez le server : `npm start`

## Atelier 4

Le but de cet exercice est de pouvoir accéder à une page dédiée à la vue complète d'un livre, de pouvoir l'ajouter/retirer à la wishlist et de pouvoir y poster un commentaire.

Pour ce faire :

- créer un composant dédié à la vue détaillée d'un livre (elle doit contenir titre, isbn, description, bouton pour ajouter/retirer à la wishlist)
- configurer le router pour :
  - accéder à la liste de livres à travers une route "/livres" 
  - accéder à la vue détaillée du livre en passant son identifiant en paramètre de l'URL ("/livres/123asqsd91238)
  - rediriger la page d'accueil vers la liste de livres
- créer une page 404 au cas où le livre ne serait pas trouvé
- modifier les Card pour mener à la vue détaillée au click
- dans la vue détaillée, créer un système d'onglet pour : 
  - afficher la liste des commentaires liés au livre
  - poster un nouveau commentaire ([voir la documentation][documentation]) grâce à un formulaire

> Note : pour demander les commentaires associés à un livre, vous pouvez adresser une requête GET à [cette adresse](https://demo.api-platform.com//books/{bookId}/reviews.jsonld)

[documentation]: https://demo.api-platform.com/docs
