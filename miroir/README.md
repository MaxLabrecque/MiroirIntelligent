# Projet Mirroir

Document d'installation et démarrage du projet mirroir intelligent.

## Prérequis
Assurez-vous d'avoir NodeJS d'intallé avant tout.
Ouvrez une invite de commande et vérifier si NodeJS est intallé avec la comande:

```node -v```

## Setup projet

Installer les packages node_module avec la commande:

```npm install```

Ouvrez le fichier `defaultLink.js` et modifier le code avec le code ci-dessous en remplacent localhost par votre adresse IPv4.

```javascript
export const defaultLink = {
  "api" : "http://localhost:8080/"
}
```

Si vous ne connaissez pas votre adresse IP. Vous pouvez la trouver en entrant la commande `ipconfig` dans le terminal sur Windows ou `ifconfig | grep "inet " | grep -v 127.0.0.1` dans un terminal sur MacOS.

## Lancer le projet

Pour lancer le projet, entrer la commande:

```npm start```

## Build le projet

Pour build le projet, entrer la commande:

```npm run make```

**Cette commande va build le projet selon votre système d'exploitation**

Si vous désirez build pour une plateforme spécifique, entre la commande:

```npm run make -- --platform=<PLATFORM_NAME>```

* Options:
    1. linux (Pour un build linux)
    2. darwin (Pour un build MacOS)
    3. win32 (Pour un build Windows)


## Schema du projet

![Schema projet mirroir](./assets/schema_projet.png)
