import getData from "./lib/service.js";

(async () => {
    const data = await getData(7);
    console.log("user:", data.user);
    console.log("posts:", data.posts);
})();