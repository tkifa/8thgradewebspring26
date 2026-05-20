function shake() {
    ask_question()
    reveal_fortune()
}

function ask_question() {

}

function reveal_fortune () {
    const fortunes = get_fortunes();
    const fortune = select_fortune (fortunes);
   document.getElementById("fortune").textContent = fortune;
   
}

function pick_random(list) {
  const i = Math.floor(Math.random() * list.length);
  return list[i];
}

function flip_coin() {
  return pick_random(["Heads", "Tails"]);
}

function roll_die() {
  return pick_random([1, 2, 3, 4, 5, 6]);
}

    
function select_fortune(fortunes) {
    const i = Math.floor(Math.random() * fortunes.length);
return fortunes[i];
}

function get_fortunes() {
    return [
        "Definitely",
        "For sure",
        "Perhaps",
        "I think not",
        "YES!!!",
        "DEFINETLY...not",
        "Duh",
        "That's a good one...come back later.",
        "Nope!",
        "Nah",
        "Yup",
        "Most likely",
        "Ask again later",
        "Signs point to yes",
        "Signs point to no",
        "Probably",
        "The odds are in your favor",
        "The odds are NOT in your favor",
        "Likely not",
        "uhhh idk ask later"
    ];
}

 function animate_shake() {
    const ball = document.getElementById("ball");
    ball.classList.remove("shaking");
    void ball.offsetWidth;  // restart the CSS animation
    ball.classList.add("shaking");
  }
