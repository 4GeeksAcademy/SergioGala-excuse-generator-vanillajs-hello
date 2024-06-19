import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "George Washington",
    "Abraham Lincoln",
    "Franklin D. Roosevelt",
    "Winston Churchill",
    "Margaret Thatcher",
    "Napoleón Bonaparte",
    "Mahatma Gandhi",
    "Nelson Mandela",
    "Julius Caesar",
    "Cleopatra",
    "Otto von Bismarck",
    "Simón Bolívar",
    "Winston Churchill",
    "Fidel Castro",
    "Adolf Hitler",
    "Benito Mussolini",
    "Golda Meir"
  ];
  let action = [
    "corrupted",
    "discriminated",
    "committed Violence",
    "oppressed",
    "terrorized",
    "exploited",
    "censored",
    "committed Genocide",
    "trafficked Humans",
    "bribed",
    "embezzled",
    "extorted",
    "polluted",
    "defrauded",
    "evaded Taxes",
    "committed War Crimes",
    "committed Cybercrime"
  ];
  let what = [
    "my carrer",
    "my fayth",
    "my hope",
    "my empire",
    "my legacy",
    "my reputation",
    "my principles",
    "my values",
    "my integrity",
    "my responsibility",
    "my duty",
    "my authority",
    "my influence",
    "my commitment",
    "my leadership",
    "my vision",
    "my future"
  ];
  let when = [
    " in my wedding",
    " in my prime",
    "in my decadence",
    " in my free day",
    "in my solitude",
    "in my triumph",
    "in my defeat",
    "in my solitude",
    "in my happiness",
    "in my sorrow",
    "in my journey",
    "in my struggle",
    "in my ambition"
  ];

  const generateExcuse = () => {
    let randomdecimal = Math.random();
    let indicewho = Math.floor(randomdecimal * who.length);
    let indiceaction = Math.floor(randomdecimal * action.length);
    let indicewhat = Math.floor(randomdecimal * what.length);
    let indicewhen = Math.floor(randomdecimal * when.length);

    let wordwho = who[indicewho];
    let wordaction = action[indiceaction];
    let wordwhat = what[indicewhat];
    let wordwhen = when[indicewhen];

    let sentence = wordwho + " " + wordaction + " " + wordwhat + " " + wordwhen;

    return sentence;
  };

  document.querySelector("#excuse").innerHTML = generateExcuse();

  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  document.body.style.backgroundColor = getRandomColor();
};
