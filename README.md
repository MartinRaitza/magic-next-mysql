# Magic Next Mysql

This is a Next.js mysql project. It fetches fetch magic the gathering card information from https://scryfall.com/ and stores it into a local mysql database.
Also all data is accessible via browser.

## Configuration

### Step 1. Set up environment variables

For local development:

The default development values are in the file `env.local.example`.
Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set each variable on `.env.local`:

- `MYSQL_HOST` - Your MySQL host URL.
- `MYSQL_DATABASE` - The name of the MySQL database you want to use.
- `MYSQL_USERNAME` - The name of the MySQL user with access to database.
- `MYSQL_PASSWORD` - The passowrd of the MySQL user.

### Step 2. Run Next.js in development mode

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Run this on of the commands in your bash.
It installs all your node modules, sets up the local docker mysql container and starts the app.
I also added a debug config for vscode on port 9229, so it is easier do develop custom functionality.

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).
