# Homelabeur blog

Personal blog website running on Gatsby, React, and Node.js forked from calvin.me.

## Features

- Posts and pages in Markdown
- Tags and categories
- Night mode
- DOS mode (404)
- Code theme (starring [New Moon](https://taniarascia.github.io/new-moon))
- Sass (starring [Primitive](https://taniarascia.github.io/primitive))

## Development

### Setup
```console
git clone https://github.com/ramuskay/blog-beerus
cd blog-beerus
nvm install "$(cat .nvmrc)"
nvm use
npm install -g yarn
yarn install --frozen-lockfile
yarn gatsby telemetry --disable
```

### Developing
```console
yarn dev
```

### Upgrading

```console
yarn upgrade-interactive --latest
```

## Deployment

Currently deployed using GatsbyCloud

## Contributing

Si vous voulez participer/corriger des article vous pouvez à tout moment éditer un post et automatiquement submit un PR

## License

This project is open source and available under the [MIT License](LICENSE).
