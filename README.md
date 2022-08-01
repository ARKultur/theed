# Theed

_theed_ is a simple front-end for our back-office, powered by [Mithril](http://mithril-js.org), and [Tailwind](http://tailwindcss.com).

## Install and run

### Local installation

If you use [ASDF](https://asdf-vm.com/), you can just pull the correct `yarn` and `node` versions from `.tool-versions`.
Otherwise, please make sure your versions match the ones specified in `.tool-versions`

After that, it's just a matter of running:
```bash
yarn install
yarn build  # or `yarn watch`
```

### Using Docker

```bash
# build using
docker build . -t theed
    ...

# Run the app
docker run -p "3000:3000" theed

# Go to localhost:3000 on your browser
```
