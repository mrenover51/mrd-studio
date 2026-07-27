# MRD Studio

Site de production de MRD Studio, construit avec Next.js App Router, TypeScript et Tailwind CSS.

## Développement

```bash
npm install
npm run dev
```

## Contrôles de production

```bash
npm run check
```

Cette commande exécute successivement ESLint, TypeScript et le build Next.js de production.

## Variables d’environnement

Copier `.env.example` vers `.env.local` en développement. Sur Vercel, configurer :

- `RESEND_API_KEY` : clé privée Resend ;
- `RESEND_FROM` : expéditeur appartenant à un domaine vérifié dans Resend.

Le formulaire retourne volontairement une indisponibilité si l’une de ces variables manque.

## Déploiement Vercel

Le projet est configuré par `vercel.json`. Le build attendu est `npm run build`.

Avant la mise en ligne :

1. connecter le domaine `mrd-studio.fr` ;
2. ajouter les deux variables Resend aux environnements Production et Preview appropriés ;
3. vérifier le domaine d’envoi dans Resend ;
4. lancer un audit Lighthouse sur l’URL Vercel finale ;
5. tester une demande de contact réelle.
