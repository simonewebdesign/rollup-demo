# Rollup demo integration with React.js

Demo repository for showing how Rollup can be used with React.js in the browser.

### How to build the project

```
rollup --input source/main.js\
       --format cjs\
       --external react\
       --output build/app.js
```

Then pass the output to Browserify or jspm. Note you need to have the dependencies available before the final build.
