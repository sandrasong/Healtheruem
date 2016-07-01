module.exports = {
  build: {
    "index2.html": "index2.html",
    "app2.js": [
      "javascripts/app2.js"
    ],
    "app2.css": [
      "stylesheets/app.scss"

    ],
    "images/": "images/"
  },
  deploy: [
    "ConvertLib",
    "Insurance"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
