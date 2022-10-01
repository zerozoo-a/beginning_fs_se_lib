import { objectAssign } from "../objectAssign";
import { partial } from "../partial";
import { f } from "../index";
const { log: l } = console;

const getTopTenSubRedditPosts = async (type) => {
  let response;
  try {
    response = await fetch(
      "https://www.reddit.com/r/subreddits/" + type + ".json?limit=10"
    )
      .then((r) => r.json())
      .then((data) => data);

    return f.Either.Some.of(response);
  } catch (e) {
    return f.Either.Nothing.of({
      message: "Something went wrong ",
      errorCode: e["statusCode"],
    });
  }
};

const getTopTenSubRedditDataEither = async (type) => {
  let response = await getTopTenSubRedditPosts(type);
  console.log("res", response);
  return response
    .map((arr) => arr["data"])
    .map((arr) => arr["children"])
    .map((arr) =>
      f.map((x) => {
        return {
          title: x["data"].title,
          url: x["data"].url,
        };
      }, arr)
    );
};

console.log(await getTopTenSubRedditDataEither("ew"));
