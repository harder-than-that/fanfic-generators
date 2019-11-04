$(document).ready(function(){
  /*** GLOBALS ***/
  
  let acts = ['kiss', 'blowjob', 'kiss ear', '10 spankings', 'strip', 'handjob', 'suck nipples']
  let names = ['Kim Namjoon', 'Kim Seokjin', 'Min Yoongi', 'Jung Hoseok', 'Park Jimin', 'Kim Taehyung', 'Jeon Jungkook']
  let nicknames = ['Namjoon', 'Jin', 'Yoongi', 'Hobi', 'Jimin', 'Tae', 'Jungkook']
  let aus = ["College", "Highschool", "Vampire", "Victorian/Steampunk", "Western", "Joseon Period", "Younger version of member travels to the present", "Coffee Shop", "Sugar Daddy", "Gender swap", "Cabin in the woods/Horror", "Harry Potter", "Superpowers/Marvel", "Hunger Games", "Assassins/Spies", "Mafia/Crime", "Space", "Dystopia/Apocolypse", "Angels and Demons", "Magic/Wizard", "Hybrid", "ABO", "Royalty", "Werwolves", "Stalker/Serial Killer", "Hanahaki disease", "Soulmates", "Greek Gods/Percy Jackson", "Mundane jobs/Blue Village", "Tattoo Shop", "Canon Compliant", "Cursed by a witch", "Flower Boys/Bullied", "Hotel/Resort/Vacation"];
  // getRand -> num should be rand(max - min + 1)) + min; so if min is 0, and max is len - 1, num is len
  let getRand = function(num) {
    return Math.floor(num * Math.random()) 
  }
  // shuffle from https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
  let shuffle = function(arr) {
    for (i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr;
  }
  
  /*** EVENTS ***/
  $("#spin1").click(function(){
    let act = acts[getRand(acts.length)]
    $("#spin1result").text(act);
  });
  
  $("#spin2").click(function(){
    let boy = names[getRand(names.length)]
    $("#spin2result").text(boy);
  });
  
  $("#spin3").click(function(){
    let boy = nicknames[getRand(nicknames.length)]
    let which = ['Truth', 'Dare']
    let result = boy + " chose " + which[getRand(2)]
    $("#spin3result").text(result);
  });
  
  $("#spin4").click(function(){
    let boy1 = nicknames[getRand(nicknames.length)]
    let boy2 = nicknames[getRand(nicknames.length)]
    while (boy2 == boy1) { boy2 = nicknames[getRand(nicknames.length)] }
    let result = boy1 + " X " + boy2
    $("#spin4result").text(result);
  });
  
  $("#spin5").click(function(){
    let boys = shuffle(nicknames)
    let result = "Mafia: " + boys[0] + "\nMafia: " + boys[1] + "\nDoctor: " + boys[2] + "\nCitizen: " + boys[3] + "\nCitizen: " + boys[4] + "\nCitizen: " + boys[5] + "\nCitizen: " + boys[6];
    $("#spin5result").text(result);
  });
  
  $("#spin6").click(function(){
    let au = aus[getRand(aus.length)]
    let result = au + " AU"
    $("#spin6result").text(result);
  });
  
});