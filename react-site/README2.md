# Therapist Joy React Site

This folder contains a separate React + Vite version of the site for testing and development.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Safe deployment plan

- Keep the current published static site intact in the repository root.
- Build and test the React app in this folder first.
- Only replace the published site after the React build is verified.
- If anything breaks, revert to the last known working static files from Git.
