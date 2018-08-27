# Nested Slots Issue
Minimal reproducible example of the nested slot issue

This repository show an example of using nested slots in shadow roots.

There are 2 examples:
- A vanilla example that uses only native Shadow DOM and slots.
- A Polymer/Lit-Element example that attempts to reproduce an issue observed in another project.


```shell
# build
npm run build
# watch for file changes (in a separate terminal)
npm run watch
# run the demo serve
npm start
```

When the demo server browser page opens up, inspect the DOM tree using the devtools.
Verify that items have been slotted properly.