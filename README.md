# option-zero-website

# Developing

## Prerequesites

-   Node
-   [nvm](https://github.com/nvm-sh/nvm) - recommended to install and manage node versions. See .nvmrc for current node version.
-   [pnpm](https://pnpm.io/installation) - node package manager

```bash
nvm use
```

### Install dependencies

```bash
pnpm install
```

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Linting

This package includes .vscode directives for installing extentions that will apply linting rules automatically.
Alternately, you can run them manually:

```bash
pnpm eslint . --fix
pnpm prettier . --write
```
