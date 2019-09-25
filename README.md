# nielssegers.com

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
