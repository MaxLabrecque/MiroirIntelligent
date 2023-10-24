# Projet Mirroir API

Document d'installation et démarrage de l'API du miroir intelligent

## Prérequis
Vous devez avoir docker d'installer sur votre machine.

https://docs.docker.com/engine/install/

## Setup projet

1) Changer le nom du fichier <u>.env.example</u> se trouvant
  dans le répertoire /miroirApi/ pour <u>.env.docker</u>

2) À l'intérieur du fichier <u>.env.docker</u>,
il sera nécéssaire de bien définir les variables d'environnements :
  - DB_HOST : nom du conteneur mysql
    - Par défaut : mysql
  - DB_NAME : nom de la base de données
    - Par défaut : miroirDb
  - DB_USER : nom d'utilisateur de la base de données
    - Par défaut : root
  - DB_PASS : mot de passe de la base de données
    - Par défaut : root
  - APP_PORT : port de l'API
    - Par défaut : 8080

<u>Si vous ne modifiez pas le docker-compose,
  vous pouvez utiliser les valeurs par défaut</u>



## Lancer le projet

Pour lancer le projet, entrer la commande:

```docker-compose up -d --build```


**Cette commande va créer un conteneur basé sur
une image mysql et un autre conteneur basé sur le Dockerfile.**


## Documentation API
Le projet est documenté avec Swagger, vous pouvez accéder à la documentation lorsque votre projet est démarré à l'adresse suivante:
http://localhost:8080/swagger-ui/index.html

## Documentation WebSocket
### Subscribe

Update sur les configurations :
``/config/public``

Objet Reçu :
JSON
<div style="border-style:solid; padding: 2px;">

"configName": Le nom de la config,

"configValue": La valeur de la config
</div>


### Send
Envoyer les nouvelles configs :
``/app/send``

Objet à envoyer : JSON
<div style="border-style:solid; padding: 2px;">

  "configName": Le nom de la config,

  "configValue": La valeur de la config
</div>


## Schema du projet

![Schema projet mirroir](./schema_projet.png)
