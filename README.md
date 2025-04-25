<p align="center">
  <img src="assets/PreviewMeteo.gif" alt="Schéma de l'infrastructure" width="700">
</p>

## Collecte de données météorologiques – Mairie de Bordeaux

Ce projet consiste à mettre en place une **infrastructure réseau complète**, un **serveur web**, un **site internet** et une **base de données** pour la collecte et la visualisation de données météorologiques **en temps réel**, au service de la **Mairie de Bordeaux**.

## Contexte du projet

Ce projet a été réalisé dans le cadre d’une étude d’infrastructure numérique, avec les objectifs suivants :

* Déployer un réseau de sondes météo (Andernos-les-Bains)
* Mettre en place un **serveur LAMP** sécurisé dans une **DMZ**
* Mettre en place un **Routeur** 
* Créer un **site web de visualisation des données**
* Assurer la communication via un serveur **DHCP/DNS**
* Transmettre les données météo à la **Mairie de Bordeaux** en temps réel

## Composants Clés

* **Routeur**
* **Serveur web LAMP** (Apache + PHP + MySQL)
* **Serveur DD** (DHCP / DNS)
* **Client** (Mairie de Bordeaux)

## Site web & base de données

* Site responsive développé en HTML/CSS/JavaScript
* Données stockées en base **MariaDB**
* Affichage en temps réel via requêtes API (OpenWeather)
* Créer un **site web de visualisation des données**
* Transimission des données API du Frontend à **Node.js** 
* Interface simple pour consultation par les agents de la mairie

## Technologies Utilisés

* HTML / CSS / JavaScript
* MySQL / MariaDB
* Debian 12
* iptables / DMZ / DNS / DHCP
* DHCIP
* VM Ware
* Node.js
* JSON

## Sécurité

* Isolation des services en DMZ
* Pare-feu configuré (iptables)
* Accès restreint par IP et mot de passe pour la base de données
* Données méteorologiques protégés par Node.js
* Logs d’accès journalisés

---

> GitHub (https://github.com/Gaudry33)
> Portfolio (https://v0-portfolio-gaudry.vercel.app/)

