
/* the main part */

var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var mastodon = "https://mastodon.social/@ratel";

var help_times = 0;


var git = 0;
var pw = false;
var commands = [];

setTimeout(function () {
  loopLines(welcome, "", 80);
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
      ls2(command.innerHTML, 80);
      command.innerHTML = ""; // these 2 lines clear it all after the display
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

function ls2(text, time) {

  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML+='<br>';
switch(text.toLowerCase()) {
/*   case "help":
      for (let i=0; i< helpList.length;i++){
          next.innerHTML+='<span class="command">'+helpList[i].label+'</span>'+helpList[i].spaced+helpList[i].description+'<br>';
      }
      break;  */

  case "clear":
      setTimeout(function () {
          terminal.innerHTML =
            '<a id="before"><div><span class="neutral"></span></div></a>';
           before = document.getElementById("before");
        }, 1);
        break;

  case "mastodon":
    addLine("Opening mastodon in a new tab...", "highlighted", 80);
    newTab(mastodon);
    break;
        
  case "quit":
  case "exit":
  window.close();
  break;

  case "history":
    if (commands.length>0) {
      for (let i=0;i<commands.length;i++){
    next.innerHTML+=commands[i]+'<br>';
    }
    }
    break;

  default:
    var isDir=false;
    var isLabel=false;
    var isReaction=false;

  for (let i=0; i< requestList.length;i++){
    
      if (text==requestList[i].directory) {
          isDir=true;
          next.innerHTML+='<span class="command">'+requestList[i].label+'</span>'+requestList[i].spaced+requestList[i].description+'<br>';
      }
  }
  if (!isDir) {

      for (let i=0; i< requestList.length;i++) {
          if (text==requestList[i].label) {
              isLabel=true;

              next.innerHTML+=requestList[i].content+`<br>`;
          }
      }
  }
  if (!isDir && !isLabel) {
    for (let i=0; i< reactionList.length;i++) {
        for (let j=0; j< reactionList[i].caller.length;j++) {
          if (text==reactionList[i].caller[j]) {
            isReaction=true;
             next.innerHTML+=reactionList[i].content+`<br>`;
             reactionList[i].func();
            break; 
          }
        }
    }  
  }
  if (!isDir && !isLabel &&!isReaction) {
    next.innerHTML+=`No such command, sorry! Type <span class="command">help</span> to see the main available commands.</span><br>`
  }
  break;

}
next.innerHTML+='<br>';
  before.parentNode.insertBefore(next, before);

  window.scrollTo(0, document.body.offsetHeight);
  }, time);
}