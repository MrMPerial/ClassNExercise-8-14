const http = require('http');
const emoji = require('node-emoji');

const server = http.createServer((req, res) => {
  res.write(myEmoji);
  res.end();
});

server.listen(8001);

let myEmoji = emoji.random().emoji;

let emojiArray = [];
function listEmojis() {
  for (let i = 0; i < 10; i++) {
    emojiArray.push(emoji.random().emoji);
  }

  for (let i = 0; i < emojiArray.length; i++) {
    console.log(emojiArray[i]);
  }
}

console.log(listEmojis());
