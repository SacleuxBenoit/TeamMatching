# TeamMatching <a id="FR"></a>

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e87d3b1bf7545c18d92bc33e4cda6f0)](https://www.codacy.com/manual/benoitsacleux/TeamMatching?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=SacleuxBenoit/TeamMatching&amp;utm_campaign=Badge_Grade)

Avant toutes choses, qu'est-ce que __TeamMatching__ ? C'est bien simple, __TeamMatching__ est un projet (qui ne sera pas porté à terme) de fin de formation, qui a pour but de nous *apprendre à travailler en équipe* ainsi que *développer, dans une plus grande autonomie, nos compétences techniques*.

## Sommaire

1. [L'idée principale du projet](#idée)
2. [La mise en place](#mise)
3. [Les besoins du client](#besoins)
4. [Organisation du travail d'équipe](#Orga)
5. [Les Technos](#Technos)
6. [English Part](#EN)


## L'idée principale du projet <a id="idée"></a>

Au tout début de cette aventure, il faut que vous sachiez qu'il était question de développer un système pouvant mettre en __relation des joueurs et des guildes__ d'un seul jeu à la fois sur une *plateforme web* puis une *application mobile* à terme.
Cependant cette idée ayant était bien implémenter dans le jeu lui-même, nous avons donc décidé d'englober plusieurs jeux dans notre projet et de ne pas développer l'application mobile.

## La mise en place <a id="mise"></a>

Afin de développer un tel projet, il était indispensable de définir un [cahier des charges](https://github.com/SacleuxBenoit/TeamMatching/blob/master/Informations/CahierDesCharges/CahierDesCharges.md) exhaustif, nous permettant par la suite :
    
    - De connaître les besoins à satisfaire du client
    - D'organiser la charge de travail entre les membres de l'équipe
    - De choisir les technos pouvant être utilisées.
    
## Les besoins du client <a id="besoins"></a>

Le client a besoin d'un site qui permet au chef de guilde de pouvoir poster une annonce pour qu'il puisse trouver des joueurs en fonction de ce qu'il recherche, le site devra donc permettre une mise en relation entre les joueurs et les chefs de guildes (postulation / message privée etc) 
Les joueurs auront la possibilité sur la page d'accueil de choisir entre 5 jeux (League of Legends, Trackmania2, Overwatch, Albion et Guild Wars2).
Il sera redirigé en fonction du jeu qu'il a choisi vers la page du jeu en question, une fois sur cette page, le client souhaite que le joueur puisse directement voir les offres qui ont étaient ajoutés.
 
## Organisation du travail d'équipe <a id="Orga"></a>

Voici les 2 membres de l'équipe : 

-   [Sacleux Benoit](https://github.com/SacleuxBenoit) -> *Product Owner* et *Chef de Projet*
-   [Spysschaert Steven](https://github.com/Steven-Spysschaert) -> *Tech Lead* et *Chef de Projet*

Et pour finir comment nous nous sommes organisé (en résumé) sur la conception de cette plateforme :

    - La distribution des trois rôles (Product Owner, Chef de Projet, Tech Lead)
    - La conception du cahier des charges, de notre UML Use Case ainsi que notre UML de Classe
    - Le choix des Technos
    - Le diagramme de notre base de données
    - La conception de l'api, et de la base de données
    - La conception du Front, ainsi que sa liaison avec notre Back

Nous détaillerons chaque tâche dans le README de chaque partie correspondante.

## Les Technos <a id="Technos"></a>

-   [Git](https://git-scm.com) - Pour le versionning.
-   [NodeJS](https://nodejs.org/en/) -  Node.js JavaScript runtime.
-   [Express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for node.
-   [Sequelize](https://sequelize.org) - An easy-to-use multi SQL dialect ORM for Node.js.
-   [Postgresql](https://www.postgresql.org) - Open source object-relational database system.
-   [Bcrypt](https://www.bcrypt.fr) - Encoding Password.
-   [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) - Permet de donner une signature numérique.
-   [Mocha](https://mochajs.org) - Javascript test framework for node.js & the browser.
-   [NuxtJs](https://fr.nuxtjs.org) - framework progressif Vue.js
-   [Vuetify](https://vuetifyjs.com/en/) - Material Component Framework for Vue.

# English part : <a id="EN"></a>

# Teammatching

First of all, what is __TeamMatching__? it's very simple, __TeamMatching__ is an end of training project (which will not be carried at term) which aims to *learn how to work as a team* as well as *develop, with greater autonomy our technical skills*.

## Summary

1. [L'idée principale du projet](#idea)
2. [La mise en place](#establishment)
3. [Les besoins du client](#needs)
4. [Organisation du travail d'équipe](#Orga)
5. [Les Technos](#Technos)
6. [French Part](#FR)

## The main idea of the project <a id="idea"></a>

At the very beginning of this adventure you should know that it was a question of developing a system that can connect player and guilds for a single game on a *web plateform* then a *mobile application* .
However, this idea having been implemented in game itself, so we decided to included several games in our project and not to develop the mobile application.

## The establishment <a id="establishment"></a>

in order to develop a such project it was essential to define a [specifications](https://github.com/SacleuxBenoit/TeamMatching/blob/master/Informations/CahierDesCharges/CahierDesCharges.md) allowing us to do :

    - Know the needs to satisfy the client 
    - Organize the worload between the members of the team
    - choose the technos that can be used

## The client's needs <a id="needs"></a>

The client needs a site that allows the guild leader to post an annonce so that he can find players according to what he is looking for, the site must therefore allow a connection between players and guild leaders (postulation / private message etc), The players will be abled to choose on the main page between 5 game (League of Legends, Trackmania2, Overwatch, Albion, and GuildWars2). He will be redirect depends on the game he choose, once on this page, the client want that the player can directly access to the offers who as been added.

## Organization of the teamwork <a id="Orga"></a>

Here are the 2 team members : 

-   [Sacleux Benoit](https://github.com/SacleuxBenoit) -> *Product Owner* and *Project Manager*
-   [Spysschaert Steven](https://github.com/Steven-Spysschaert) -> *Tech Lead* and *Project Manager*

And finally how we organize ourselves (in summary) on the design of this plateform :

    - The distribution of the three roles (Product Owner, Project Manager, Tech Lead).
    - The design of the specifications of our UML use case and our Class UML.
    - The choice of the technos.
    - The diagram of our database.
    - The design of our API, and the database.
    - The design of the front, as well as its connection with our back.

We will detail each task in the README of each corresponding part.

## The technos <a id="Technos"></a>

-   [Git](https://git-scm.com) - for versioning.
-   [NodeJS](https://nodejs.org/en/) -  Node.js JavaScript runtime.
-   [Express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for node.
-   [Sequelize](https://sequelize.org) - An easy-to-use multi SQL dialect ORM for Node.js.
-   [Postgresql](https://www.postgresql.org) - Open source object-relational database system.
-   [Bcrypt](https://www.bcrypt.fr) - Encoding Password.
-   [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) - Allows you to give a digital signature.
-   [Mocha](https://mochajs.org) - Javascript test framework for node.js & the browser.
-   [NuxtJs](https://fr.nuxtjs.org) - framework progressive Vue.js
-   [Vuetify](https://vuetifyjs.com/en/) - Material Component Framework for Vue.
