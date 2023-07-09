This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## in Next.js 13 every component is a server side component by default
change component to client component
add "use client" on the top of the component file

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# install dependencies
npx create-next-app@latest

npm i @heroicons/react
tailwindcss with next:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// control text showing line
npm i @tailwindcss/line-clamp
// using specitic style for text
npm i -D @tailwindcss/typography

# install planetscale and prisma
brew install planetscale/tap/pscale  (https://github.com/planetscale/cli)

npx prisma init
Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run npx prisma db pull to turn your database schema into a Prisma schema.
4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started

## PlanetScale cert
# adding '&&sslcert=/etc/ssl/cert.pem' to the end of the 'DATABASE_URL' string when connecting from local server.
# adding '&&sslcert=/etc/pki/tls/certs/ca-bundle.crt' to the end of the 'DATABASE_URL' string when connecting from online server or platform (RedHat / Fedora / CentOS / Mageia / Vercel / Netlify).


# install Tiptap text editor
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit

# install OpenAI
npm install openai
error && need to add payment in OpenAI: You've reached your usage limit. See your usage dashboard and billing settings for more details. If you have further questions, please contact us through our help center at help.openai.com.

# resolving npm no access error
sudo chown -R $(whoami) ~/.npm

# Errors resolving
1. Cannot find module 'next/image' or its corresponding type declarations.ts(2307)
npm install next@latest react@latest react-dom@latest

2. JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.ts(7026)
npm i --dev @types/react

3. An error occurred while running the seed command:
Error: Command failed with ENOENT: ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts
spawn ts-node ENOENT

npm i ts-node@latest -D

# npx prisma studio
to create alternative view on browser.

# api floder is acutally the backend logic

## deploying on Vercel
npm install --save-dev eslint
npm install eslint-config-next

solving prisma client error:
npx prisma generate && next build