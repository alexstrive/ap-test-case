# AudioPrivet Test Case

The server requires Node version `v18+` (see `.nvmrc`). Versions below cause errors at loading modules (especially
loading JSON format) at server. By the default server starts at `:3000` port.

## To run an app

```
npm run server                            # to start serve provided data
npm run build                             # to create build bundle
npx serve --port 5000 --single dist       # to serve static content      
```

## A little demo

![Showcase](./showcase.gif)