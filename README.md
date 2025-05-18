# nextjs

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone git@github.com:MBackspace/nextjs.git
cd nextjs
yarn install
```

Then, run the development server:

```bash
yarn build
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to view the application.

## Running Docker

Build Docker containers:

```bash
yarn docker:build
```

Start Docker containers:

```bash
yarn docker:up
```

Stop Docker containers:

```bash
yarn docker:stop
```

Remove Docker containers:

```bash
yarn docker:rm
```

## Dependency Management

To update all dependencies to their latest versions:

```bash
yarn up *
```

To update specific dependencies:

```bash
yarn up next
```

For minor and patch updates only:

```bash
yarn up -R *
```

For interactive updates:

```bash
yarn upgrade-interactive
```

## Additional Notes

> **Important:** Before building Docker containers, make sure to run both `yarn install` and `yarn build`.  
> Also, during the build process, the `.env` file **must not** be included in the project.
