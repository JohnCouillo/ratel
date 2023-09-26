

/* the main part */

var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var help_times = 0;

let bip = new Audio('./style/bip.mp3');


var git = 0;
var pw = false;
var commands = [];

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);


//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  } 
   
 
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(
        "john@berlingot:~$ " + command.innerHTML,
        "no-animation",
        0
      );
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }


function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      if (help_times == 2) {
        loopLines(help_again3, "highlighted margin", 80);
        help_times=3;
        break;
      }
      if (help_times == 1 || help_times > 2) {
        loopLines(help_again, "highlighted margin", 80);
        help_times++
        break;
      }
      else {
      loopLines(help, "highlighted margin", 80);
      help_times++
      break;}
    case "about":
      loopLines(about, "highlighted margin", 80);
      break;
      case "irc":
      loopLines(irc, "highlighted margin", 80);
      break;
    case "social":
      loopLines(social, "highlighted margin", 80);
      break;
      case "wtf":
      loopLines(wtf, "highlighted margin", 80);
      break;
    case "fdp":
    case "filsdepute":
    case "fils de pute":
      loopLines(fdp, "highlighted margin", 80);
      break;
    case "couscous":
      bip.play();
      loopLines(couscous, "highlighted margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "highlighted", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
      case "mastodon":
      addLine("Opening mastodon in a new tab...", "highlighted", 80);
      newTab(mastodon);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = 
          '<a id="before"><div><span class="neutral">Type <span class="command">help</span> for a list of supported commands.</span></div></a>';
         before = document.getElementById("before");
        
      }, 1);
      break;
      
    case "banner":
      loopLines(banner, "", 80);
      break;
      
    default:
      addLine(
        '<span class="error">There\'s no such command.</span><br>',
        "error",
        120
      );
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}