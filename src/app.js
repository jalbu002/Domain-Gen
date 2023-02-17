/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function newDom(p, a, n) {
  let result = [];
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < a.length; j++) {
      for (let k = 0; k < n.length; k++) {
        result.push(`${p[i]}${a[j]}${n[k]}.com`);
      }
    }
  }
  return result;
}

function newerDom(r) {
  for (let i = 0; i < r.length; i++) {
    document.querySelector("#domains").innerHTML += `${r[i]}\n`;
  }
}
newerDom(newDom(pronoun, adj, noun));
//document.querySelector("#domains").innerHTML = newDom(pronoun, adj, noun);
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
