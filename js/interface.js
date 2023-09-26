/* let's stay focused! */
/* As long as your mouse points to mother, everything's fine, you can type in whatever you want, it will be listened to!*/

const app = document.querySelector("#mother");
app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

/* the caret.js part */

function $(elid) {
    return document.getElementById(elid);
  }
  
  var cursor;
  window.onload = init;
  
  function init() {
    cursor = $("cursor");
    cursor.style.left = "0px";
  }
  
  function nl2br(txt) {
    return txt.replace(/\n/g, "");
  }
  
  function typeIt(from, e) {
    e = e || window.event;
    var w = $("typer");
    var tw = from.value;
    if (!pw) {
      w.innerHTML = nl2br(tw);
    }
  }
  
  function moveIt(count, e) {
    e = e || window.event;
    var keycode = e.keyCode || e.which;
    if (keycode == 37 && parseInt(cursor.style.left) >= 0 - (count - 1) * 10) {
      cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } else if (keycode == 39 && parseInt(cursor.style.left) + 10 <= 0) {
      cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
  }
  
  function alert(txt) {
    console.log(txt);
  }


  function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs

        alert("Enter was pressed was presses");
    }
}