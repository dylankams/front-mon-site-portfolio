# Guide de démarrage de l'application

Pour installer les dépendances nécessaires exécuter la commande suivante :

## `npm install`

Ensuite exécuter cette commande (si elle est proposée) pour faire un audit et une corrections des dépendances :

## `npm audit fix --force`

Cette commande permet d'installer les modules de NodeJs.

### `npm start`

Cette commande permet d'exécuter l'application en mode développement.\
Ouvrir le lien [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

La page se rechargera lorsque vous apporterez des modifications.\
Vous pouvez également voir des erreurs dans la console.


### Url de connexion à l'epace d'administration :
[http://localhost:3000/login](http://localhost:3000/login)
email : loic.kameni@estiam.com
password : dylan

Note : 
- La base de donnée est fournie. 
- Dans la liste des articles, pour voir le contenu de l'article vous devez cliquer sur le titre de l'article.

### `npm test`

Cette commande lance le testeur en mode montre interactive.\
Voir la rubrique sur [running tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'infos.

### `npm run build`

Cette commande génère l'application pour la production dans le dossier `build`.\
Il regroupe correctement React en mode production et optimise la construction pour les meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.\
Votre application est prête à être déployée !

Voir la rubrique sur [deployment](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'infos.
