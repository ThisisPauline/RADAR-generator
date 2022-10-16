/*What do we want? We want :
1- if user is cliking on 'Click here' to dislay prompts that adjusts to the answers
and add the answers to the arraw among which the categories are taken from;
2- else use the categories from the arraw that are predefined. 
*/

let themes = [
  "quality time",
  "sex",
  "grief",
  "health",
  "other partners",
  "fights and/or arguments",
  "money",
  "work or projects",
  "travel",
  "family",
  "household",
];
let talkingPoint = "";
let yourThemes = [];

function addToScreen() {
  const topicsToTackle = document.querySelector(".topic");
  topicsToTackle.innerHTML = `Let's talk about ${talkingPoint}`;
}
function noMoreTopic() {
  const topicsToTackle = document.querySelector(".topic");
  topicsToTackle.innerHTML = `Done! Anything else you wanted to tackle?`;
  click.innerHTML = "No more topic";
}
/* either the user clicks on 'click here'*/
var userName = undefined;

document.getElementById("click").addEventListener("click", function () {
  if (userName === undefined) {
    userName = prompt("Hi there! What is your name?");
  }
  let yourCategories;

  if (userName !== null) {
    yourCategories = prompt(`What do you want to talk about ${userName}?`);
  } else {
    yourCategories = prompt("What do you want to talk about?");
  }
  yourThemes = themes.unshift(yourCategories);
  console.log(themes);
});

const click = document.querySelector(".the-button");

click.addEventListener("click", function () {
  if (document.getElementById("click").clicked == true) {
    if (yourThemes.length !== 0) {
      let randomIndex = Math.floor(Math.random() * themes.length);
      const yourTheme = yourThemes[randomIndex];

      yourThemes.splice(randomIndex, 1);

      talkingPoint = yourTheme;

      addToScreen();
    } else {
      noMoreTopic();
    }
  } else {
    if (themes.length !== 0) {
      let randomIndex = Math.floor(Math.random() * themes.length);
      const theme = themes[randomIndex];
      console.log(randomIndex);
      themes.splice(randomIndex, 1);
      console.log(themes);
      talkingPoint = theme;

      addToScreen();
    } else {
      noMoreTopic();
    }
  }
});
