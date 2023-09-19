var mastodon = "https://mastodon.social/@ratel";
var irc_tuto = "https://www.youtube.com/watch?v=-4ab5-F72nY";
var _wtf =        ["wtf", "                 Geez, what the f*ck is this trend?!"];
var _about =      ["about", "               Displays who I am"];
var _clear =      ["clear", "               Clears the terminal"];
var _email =      ["email", "               Don\'t even try"];
var _social =     ["social", "              My social networks (and there\'s plenty of them!)"];
var _mastodon =   ["mastodon", "            <a href='https://mastodon.social/@ratel' target='blank'>mastodon.social/@ratel</a>"];
var _facebook =   ["facebook", "            Never again"];
var _myspace =    ["myspace", "             huhu"];
var _irc =        ["irc", "                 Now this is getting interesting..."]
var _help = [_about, _clear, _email, _social, _wtf]; /* this '_help' variable is an array of arrays */
var help_ = []; /* this 'help_' variable is the array of strings displayed by the "help" command. */ 

var _social = [_facebook, _myspace, _mastodon, _irc];
var social_ = [];

function listing(_commandList) { /* use this function to generate strings */
  var commandList_= [];
  for (let i = 0; i < _commandList.length; i++) {
    let j = _commandList[i];
    commandList_+=`<span class="command">`+j[0]+`</span><span class="neutral">`+j[1]+`</span>`+'<br>'
  }
  return commandList_;
}



about = [
  "<br>",
  "<span class='neutral'>Hi, my name is John Berlingot, which is not my real name but we're supposed to have a name to communicate.</span>",
  "<br>",
];

social_ = listing(_social);
social = [
  "<br>",
  social_,
  "<br>",
];

irc = [
  "<br>",
  "<span class='neutral'>IRC (Internet Relay Chat) is by far my favorite social network in that it's not what most people would call a social network. It's the relic of a time when what one was thinking and saying mattered more than who their 'friends' were and how popular they looked.</span>",
  "<br>",
  "<span class='neutral'>There simply wasn't any profile to keep the record of this kind of things. You had to f***ing LISTEN to what they were saying!</span>",
  "<br>",
  "<span class='neutral'>And in this regard, I doubt 'modern' social networks are the best option.</span>",
  "<br>",
  "<span class='neutral'>In case you're interested, <a href='https://www.youtube.com/watch?v=-4ab5-F72nY' target='_blank'>here is a very short intro.</a></span>",
  "<br>",
];

fdp = [
  "<br>",
  "<span class='neutral'>C'est qui que tu traites de fils de pute, fils de pute ?</span>",
  "<br>",
];

couscous = [
  "<br>",
  "<span class='neutral'>Bouteldja.</span>",
  "<br>",
];

help_ = listing(_help);
help = [
  "<br>",
  help_,
  "<br>",
  "<span class='neutral'>But it won't help much because most commands are (loosely) kept secret. </span>",
  "<br>",
];

help_again = [
  "<br>",
  help_,
  "<br>",
];

help_again3 = [
  "<br>",
  "<span class='neutral'>Dude this is the third time you're asking me! </span>",
  help_,
  "<br>",
];

banner = [
  `<div class="pt-2"><span class="neutral">Just typed "git ass" instead of "git add". Whatever...Type <span class="command">help</span> to see the main available commands (if it's white, you can type it in).</span></div>`,
];

wtf = [
  `<iframe width="236" height="419" src="https://www.youtube.com/embed/rovd2NHWz_A" title="Pretty WOMAN  knows how to handle a knife🔪 #camping #survival #bushcraft #outdoors" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  `<span class='neutral'>I'm pretty sure this stupid trend has a name. I'm not talking about "survivalism". I'm talking about the other thing.</span>`,
]
 

