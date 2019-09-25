# nielssegers.com
Personal website made on Next.js, React, Redux, etc.

## Run
```bash
npm install
cp .env.example .env
npm run dev
```

## Docker
Make sure you export `BASE_URL` and `API_BASE_URL` with the correct value to your environment before building, if you wish to overwrite the default `.env` config.

```bash
npm run build:docker
npm run start:docker
```

## General

Install these plugins;

- https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules
- https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin

And add this to your workspace settings;

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true,
  },
}
```
