# Fetch Employees

## Présentation du projet

Cadre : Formation DWWM. Ce projet a été réalisé dans le cadre d'un apprentissage de React avec TypeScript.

L'objectif est de créer une petite application permettant d'afficher le profil d'un employé et de récupérer un nouveau profil à partir d'une API via un bouton.

## Objectifs pédagogiques

Ce projet permet de travailler les notions suivantes :

- utiliser `fetch` pour récupérer des données depuis une API;
- utiliser une fonction `async`;
- convertir une réponse en JSON avec `response.json()`;
- stocker des données dans un state avec `useState`;
- transmettre des données à un composant à l'aide des props;
- mettre à jour l'affichage après la récupération de nouvelles données.

## Fonctionnalités

L'application permet :

- d'afficher le profil d'un employé;
- d'afficher son prénom, son nom, sa photo et son adresse e-mail;
- de récupérer un nouveau profil à partir de l'API Random User;
- de mettre à jour le profil affiché;
- de charger un nouveau profil à l'aide d'un bouton.

## Technologies utilisées

- React
- TypeScript
- Vite
- CSS
- npm
- API Random User

## Problèmes ou difficultés rencontrés

- Compréhension de la différence entre les données initiales `sampleEmployee` et le state `employee`.
- Erreur lors de l'affichage : le composant `EmployeeCard` recevait toujours `sampleEmployee` au lieu de `employee`, donc le profil ne se mettait pas à jour après l'appel à l'API.
