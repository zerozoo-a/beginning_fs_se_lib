import { f } from "../index";
const { log: l } = console;

let generator;
function getMethod(url) {
  // fetch(url).then((response) => generator.next(response));
  fetch(url)
    .then((response) => response.json())
    .then((result) => generator.next(result));
}

function* main() {
  const pictureJson = yield getMethod("https://www.reddit.com/r/pics/.json");
  const firstPictureData = yield fetch(
    pictureJson.data.children[0].data.url + ".json"
  ).then((response) => console.log(response));
}

generator = main();
generator.next();
