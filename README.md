
# Prerequisites #
1. 'main' branch is production branch for Heroku.
2. If you want to use components in Salesforce Cloud:
- you can't use css preprocessors,
- you can use TypeScript only as type annotations
3. 'lightning-base-components' are imported to use standard lwc components.
4. 'import @lwc/synthetic-shadow' is mandatory for lightning-base-components.
5. import 'salesforce-lightning-design-system.min.css' to style lightning-base-components.