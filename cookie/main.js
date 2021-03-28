//console stuff
var discord = "Jased#0001";
var discordserver = "https://discord.gg/tMR9JZQCeU";
var error = "No errors are present. If there are, contact me on discord:\nJased#0001";
//real code
var clicks = 0;
var cookVal = 1;
var timer = 1000; //1 second (until user buys the upgrade)
var balCost = 10
var valCost = 10;
var ltimeCost = 500;
var autoBal = 0;
var timesval = 1.3;
function plusbal1() {
  clicks += cookVal;
  document.getElementById('clickss').innerHTML =
  "You have " + clicks + " cookies. The value of your cookies is " + cookVal + ". You have " + autoBal + " autoclickers. The timer (in ms) is " + timer;
  document.getElementById('title').innerHTML =
  clicks + " clicks. - CookClick";
}
function startBal1() {
  if (autoBal == 0) {
    if (clicks > balCost-1) {
        clicks -= balCost;
        balCost *= timesval;
        autoBal += 1;
        plusautobal1();
        // dont untag until bug fixed
        // document.getElementById('autoCookies').innerHTML = 
        // "+1 Auto Cookies - "+balCost+" Cookies";
        document.getElementById('autoCookies').classList.remove('button');
        document.getElementById('autoCookies').classList.add('buttonDisabled');
        document.getElementById('autoCookies').innerHTML =
        "This button has been disabled due a bug.";
      }
    } else {
      console.log("no more auto cookies")
  }
}
function getVal() {
  if (clicks > valCost-1) {
    clicks -= valCost;
    valCost *= timesval;
    plusval1();
  }
}
function lesstime() {
  if (clicks > ltimeCost-1) {
    clicks -= ltimeCost;
    ltimeCost *= timesval;
      timer -= 0.25;
      document.getElementById('clickss').innerHTML =
      "You have " + clicks + " cookies. The value of your cookies is " + cookVal + ". You have " + autoBal + " autoclickers. The timer (in ms) is " + timer;
      document.getElementById('ltime').innerHTML = 
      "-0.25 Auto Cookie Timer - "+ltimeCost+" Cookies";
  }
}
function plusval1() {
  cookVal += 1;
  document.getElementById('clickss').innerHTML =
  "You have " + clicks + " cookies. The value of your cookies is " + cookVal + ". You have " + autoBal + " autoclickers. The timer (in ms) is " + timer;
  document.getElementById('title').innerHTML =
  clicks + " clicks. - CookClick";
  document.getElementById('valButton').innerHTML = 
  "+1 Cookie Value - "+valCost+" Cookies";
}
function plusautobal1() {
  clicks += cookVal;
  document.getElementById('clickss').innerHTML =
  "You have " + clicks + " cookies. The value of your cookies is " + cookVal + ". You have " + autoBal + " autoclickers. The timer (in ms) is " + timer;
  document.getElementById('title').innerHTML =
  clicks + " clicks. - CookClick";
  var t = setTimeout(plusautobal1, timer);
}
function check() {
  clicks = Math.round(clicks)
  cookVal = Math.round(cookVal)
  balCost = Math.round(balCost)
  valCost = Math.round(valCost)
  ltimeCost = Math.round(ltimeCost)
  autoBal = Math.round(autoBal)
  document.getElementById('title').innerHTML = clicks + " clicks. - CookClick";
  document.getElementById('ltime').innerHTML = "-0.25 Auto Cookie Timer - "+ltimeCost+" Cookies";
  document.getElementById('valButton').innerHTML = "+1 Cookie Value - "+valCost+" Cookies";
  // DONT UNTAG TILL BUG FIXED
  // document.getElementById('autoCookies').innerHTML = "+1 Auto Cookies - "+balCost+" Cookies";
  if (timer < 0) {
    timer = .25
  }
  var t = setTimeout(check, 250); //.25 seconds
}
function save() {
  document.cookie = "clicks=" + clicks + "; expires=Mon, 1 Jan 2022 12:00:00 UTC; path=/";
  document.cookie = "value=" + cookVal + "; expires=Mon, 1 Jan 2022 12:00:00 UTC; path=/";
  document.cookie = "timer=" + timer + "; expires=Mon, 1 Jan 2022 12:00:00 UTC; path=/";
  document.cookie = "valCost=" + valCost + "; expires=Mon, 1 Jan 2022 12:00:00 UTC; path=/";
  document.cookie = "ltimeCost=" + ltimeCost + "; expires=Mon, 1 Jan 2022 12:00:00 UTC; path=/";
}
function load() {
  check();
  console.log("<-- Welcome to the console! -->\nIf there is an error, try running the 'error' command!\nFor contact info, run the 'discord' command!\nTo join my discord, do the 'discordserver' command!");
}
function loadsave() {
  clicks = getCookie("clicks");
  cookVal = getCookie("value");
  timer = getCookie("timer");
  valCost = getCookie("valCost");
  ltimeCost = getCookie("ltimeCost");
  document.getElementById('title').innerHTML = clicks + " clicks. - CookClick";
  document.getElementById('ltime').innerHTML = "-0.25 Auto Cookie Timer - "+ltimeCost+" Cookies";
  document.getElementById('valButton').innerHTML = "+1 Cookie Value - "+valCost+" Cookies";
  document.getElementById('autoCookies').innerHTML = "+1 Auto Cookies - "+balCost+" Cookies";
}
function getCookie(c_name) {
  var i,x,y,ARRcookies=document.cookie.split(";");

  for (i=0;i<ARRcookies.length;i++) {
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if (x==c_name) {
      return unescape(y);
    }
  }
}
function download() {
    alert("This button does not feature offline ability.");
    window.location.href='www.example.com'
}