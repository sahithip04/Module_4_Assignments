const boxen = require("boxen");

const message = "I am using my first external module!";
const title = "Hurray!!!";
const thirdMessage = "unicorns love rainbows";

console.log(
  boxen(message, {
    title: title,
    padding: 1
  })
);

console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "singleDouble"
  })
);

console.log(
  boxen(thirdMessage, {
    title: title,
    padding: 1,
    borderStyle: "round",
    borderColor: "red",
    backgroundColor: "yellow"
  })
);
