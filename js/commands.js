/* COMMANDS */

class Command {
  constructor(directory, label, description, content) {
    this.directory=directory;
    this.label=label;
    this.description=description;
    this.content=content;
/*     this.spaced="\xa0".repeat(20-this.label.length) */
this.spaced=".".repeat(20-this.label.length)
  };
}

var bip = new Audio('./style/bip.mp3'); 



var social = new Command("help", "social", "my social networks (and there's plenty of them!)")
var wtf = new Command ("help", "wtf", "I'm too ol for dis shit")
var clear = new Command ("help", "clear", "clears the terminal")
var email = new Command ("help", "email", "nope", "<img width=50% src='https://64.media.tumblr.com/12a4bf3150a4ac9eac5f5dfa6c81d668/68d4c3bba5a2f218-1d/s540x810/e79baa0ba1348fed46826d8b12a14a7a97a8ef2c.gif'>")
var about = new Command("help", "about", "the about section", "Hi, my name is John Berlingot, which is not my real name but we're supposed to have a name to communicate.", "<br>",)
var history_ = new Command("help", "history", "shows all the commands that you already typed");

/*Commands, so to speak*/

var twitter = new Command("social","twitter",'oh, scuse me, I meant "X"', "<span class='neutral'>And, no.</span>",
"<br>",)
var irc = new Command("social","irc",'Now that is interesting...', '<span class=`neutral`>IRC (Internet Relay Chat) is by far my favorite social network in that it\'s not what most people would call a social network. It\'s the relic of a time when what one was thinking and saying mattered more than who their "friends" were and how popular they looked. There simply wasn\'t any profile to keep the record of this kind of things. You had to f***ing LISTEN to what they were saying! And in this regard, I doubt "modern" social networks are the best option. In case you\'re interested, <a href="https://www.youtube.com/watch?v=-4ab5-F72nY" target="_blank">here is a very short intro.</a></span>',
"<br>",)
var blusky = new Command("social","blusky","not interested", "no","<br>",)
var facebook = new Command("social","facebook","you must be kidding", "<span class='neutral'>I told you.</a></span>",
"<br>",)
var icq = new Command("social","icq","like in the ol' days", "<span class='neutral'>Good old days, but no.</a></span>",
"<br>",)
var mastodon = new Command("social","mastodon","<a href='https://mastodon.social/@ratel' target='blank'>mastodon.social/@ratel</a>", "",
"<br>",) 

var requestList = [twitter, icq, blusky, facebook, irc, mastodon, about, social, clear, email, history_]



/* REACTIONS */

const couscous = {caller:["couscous", "prout", "bouteldja", "hop"],content:"<img src='https://www.tribunejuive.info/wp-content/uploads/2021/01/ERffUt9X0AAecIl-604x1024.jpg' width=30%>", func: function(){bip.play();},}
const fdp = {caller:["fdp", "fils de pute"],content:"<span class='neutral'>Fils de pute toi-même</span>", func: function(){console.log('OK');},}
var reactionList = [fdp, couscous]

welcome = [`<div class="pt-2"><span class="neutral">Type <span class="command">help</span> to see the main available commands.</span></div>`,
];