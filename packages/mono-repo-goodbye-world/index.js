var helloWorld = require('mono-repo-hello-world');

function goodbyeWorld() {
  helloWorld();
  console.log('A message from the amazing [goodbye-world] module');
}

module.exports = goodbyeWorld;
