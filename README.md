
# Prerequisites #
- `main` branch is the production branch for Heroku.
- If you want to share components in Salesforce Cloud in the future:
- you can't use css preprocessors,
- you can use TypeScript only as type annotations

# Serve #
To serve localhost server write in the command line:
> npm run serve

This will host webpage under localhost:3000 and refresh it automatically.

# Build #
To build your production bundle run
> npm run build

# Lightning Base Components #

- `lightning-base-components` are imported to use standard lwc components.
- `import @lwc/synthetic-shadow` is mandatory for lightning-base-components.
- import `salesforce-lightning-design-system.min.css` to style lightning-base-components.

## Known issues ##
lightning-base-components (alpha) will merge all icons to bundle `even if part of them aren't used`. To see it use `BundleAnaliserPlugin`. This will increase bundle size by an additional 3MB!

It is possible to remove all lightning-base-components icons. To bypass/hack this use `NormalModuleReplacementPlugin`
> const { `NormalModuleReplacementPlugin` } = require(`'webpack'`);

and use it in the plugins section like this:

> new `NormalModuleReplacementPlugin`(

>> new RegExp(`'.*iconSvgTemplates.*'`),
>> path.resolve(__dirname, `'node_modules/lightning-base-components/src/lightning/iconSvgTemplatesUtility/buildTemplates/utility/up.html'`)

>)

This will replace all icon imports with only one 'up' icon.

Please keep in mind that this will erase all icons from lightning-base-components and you have to add them manually. Usage of `lightning-icon` will be impossible.

You can use svg icons with @salesforce-ux/design-system and import them manually from
>node_modules/@salesforce-ux/design-system/assets/icons/utility/{icon_name}.svg

Check the example in the app component

# Urls #
### LWC Webpack Plugin Github ###
https://github.com/salesforce/lwc-webpack-plugin

### NPM for lightning-base-components ###
https://www.npmjs.com/package/lightning-base-components

### Presentation for LWC compiler ###
https://pm.dartus.fr/content/slides/2019-Build_Lightning_Web_Components_that_Run_Anywhere.pdf

### LWC Open Source documentation for ES modules ###
https://lwc.dev/guide/es_modules

### Lightning Web Components Module Resolution ###
https://developer.salesforce.com/blogs/2020/09/lightning-web-components-module-resolution



