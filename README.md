# Cabinet de Neuropsychologie - Laetitia Knoerr

Site web professionnel pour le cabinet de neuropsychologie de Laetitia Knoerr, situé à Colmar.

## Technologies utilisées

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Firebase
- Decap CMS
- React Router
- React Helmet Async
- Framer Motion

## Fonctionnalités

- Site web responsive et moderne
- Blog avec système de gestion de contenu
- Formulaire de contact avec Firebase
- SEO optimisé
- Interface d'administration pour la gestion du contenu
- Carte interactive pour localiser le cabinet
- Système de réservation de rendez-vous

## Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/laetitia-knoerr-website.git

# Installer les dépendances
cd laetitia-knoerr-website
npm install

# Créer le fichier .env
cp .env.example .env
# Remplir les variables d'environnement

# Lancer le serveur de développement
npm run dev
```

## Structure du projet

```
├── public/
│   ├── admin/
│   │   ├── config.yml
│   │   └── index.html
│   └── uploads/
├── src/
│   ├── components/
│   ├── pages/
│   ├── content/
│   ├── lib/
│   ├── types/
│   └── styles/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── README.md
└── tsconfig.json
```

## Déploiement

Le site est configuré pour être déployé sur Netlify. Le déploiement se fait automatiquement à chaque push sur la branche main.

## Gestion du contenu

Le contenu du site peut être géré via l'interface d'administration Decap CMS, accessible à l'adresse `/admin`.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.