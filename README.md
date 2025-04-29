<p align="center">
  <img src="assets/PreviewMeteo.gif" alt="Schéma de l'infrastructure" width="700">
</p>

## Collecte de données météorologiques 

Ce projet consiste à mettre en place une **infrastructure réseau complète** avec un réseau **LAN** et **DMZ** ,un **routeur**, un **serveur web**, un serveur **DD**, un **Client**,un **site internet** et une **base de données** pour la collecte et la visualisation de données météorologiques **en temps réel**, au service de la **Mairie de Bordeaux**. [C'EST UN PROJET FICTIF]

## Contexte du projet

La ville d'Andernos-les-Bains, située dans le bassin d'Arcachon, fait face régulièrement à diverses intempéries météorologiques (tempêtes, fortes pluies, vents violents, etc.).
Actuellement, les informations météo disponibles via les journaux télévisés ne sont pas assez fréquentes pour permettre une réaction rapide des services de secours. Trop souvent, les informations climatiques parviennent aux services compétents de Bordeaux Métropole après que les dégâts aient déjà été causés.

Face à cette problématique, la mairie de Bordeaux souhaite se doter d'une solution technologique permettant de recevoir en temps réel les données climatiques locales.
Un appel d'offres a été lancé pour concevoir et développer un système de suivi météorologique performant et instantané, avec les objectifs suivants :

* Mettre en place un **serveur LAMP** sécurisé dans une **DMZ**
* Mettre en place un **Routeur** 
* Créer un **site web de visualisation des données**
* Créer une base de données pour recolter les données météorologiques à chaque rafraichissement du site internet.
* Assurer la communication via un serveur **DHCP/DNS** sécurisé dans un **LAN**
* Transmettre les données météo à la **Mairie de Bordeaux** (Client) en temps réel

## Composants Clés

* **Routeur**
* **Serveur web LAMP** (Apache + PHP + MySQL)
* **Serveur DD** (DHCP / DNS)
* **Client** (Mairie de Bordeaux)

## Site web & base de données

* Site web développé en HTML/CSS/JavaScript
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

