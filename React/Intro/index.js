console.log("Hello Node");

// const slugify = require("slugify");
import slugify from "slugify";
import Topla, {cikar, footballPlayers, hello, txt, user, } from "./my-module.js";

const title = slugify("Some String Lorem Ipsum");
console.log(title);

const title2 = slugify("Some String Lorem Ipsum", "*");
console.log(title2);

console.log(Topla(2, 4));
console.log(cikar(10, 5));
hello("Ali");
console.log(txt);
console.log(user);
console.log(footballPlayers);