/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(`#excuse`).innerHTML = generateExcuse(); //write your code here
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let who = [`The dog`, `My grandma`, `His turtle`, `My bird`];
  let action = [`ate`, `peed`, `crushed`, `broke`];
  let what = [`my homework`, `the keys`, `the car`];
  let when = [
    `before the class`,
    `right on time`,
    `when I finished`,
    `during my lunch`,
    `while I was praying`
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    ` ` +
    action[actionIndex] +
    ` ` +
    what[whatIndex] +
    ` ` +
    when[whenIndex]
  );
};
const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
