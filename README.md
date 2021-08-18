# FlipkartClone

#How to install bootstrap and jquery ?
- npm install bootstrap 
  npm install jquery

In angular.json :

"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
Under projects -> architect -> build -> styles add node_modules/bootstrap/dist/css/bootstrap.min.css:

"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],