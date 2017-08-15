let emoji = require('node-emoji');

function listEmojis() {
  for (let i = 0; i < 10; i++) {
    console.log(emoji.random().emoji);
  }
}

console.log(listEmojis());
