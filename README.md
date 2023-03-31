# Angular Internationalization Example

This project can be built 3 languages: en, de, fr.
No runtime lang switch, but you need to reload the app via reload (see config)[https://angular.io/guide/i18n-common-deploy].
Locale files are extracted in JSON format (simpler than XML).

# Preparation / Understand

- check `i18n` attributes in [src/app/app.component.html]
- check file structure in [src/locale/] folder
- check npm scripts in package.json
- check angular.json i18n setup (cf. Angular docs)[https://angular.io/guide/i18n-common-merge]

# Translation Workflow

1. change code and texts / image URLs
2. `npm run extract-i18n` to re-generate [src/locale/messages.json]
3. add/update/change same IDs in localized files, for e.g. in FR [src/locale/messages.fr.json]

# Serve App

- `npm run serve` to serve default locale (configured in angular.json)
- `npm run serve-de` to serve DE locale
- `npm run serve-fr` to serve FR locale

# Build App

1. `npm run build` to generate builds in all language versions
2. then serve DE version from [dist/angular-internationalization-example/de/], /fr for french
