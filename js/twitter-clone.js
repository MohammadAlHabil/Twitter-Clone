/*global console, document, alert, prompt*/

var tweet = document.getElementById("write");
var username = document.getElementById("name");
var tweeted = document.getElementById("written");
var retweett = document.getElementById("retweet");
var lists = document.getElementById("show");
var showsmall = document.getElementById("showsmall");


let tweets = [];

function createTweet() {
	"use strict";
	lists.style.display = "flex";
	tweeted.innerHTML = tweet.value;



	const elm = document.createElement('li');
	elm.setAttribute('class', "test");
	//lists.childNodes[0].replaceWith(elm);
	lists.insertBefore(elm, document.getElementsByClassName('test')[0]);

	const person = document.createElement('img');
	person.setAttribute('src', "../images/person.jpg");
	elm.appendChild(person);

	const div1 = document.createElement('div');
	div1.setAttribute('class', "info");
	elm.appendChild(div1);

	const strong = document.createElement('strong');
	strong.textContent = username.value;
	div1.appendChild(strong);


	const p = document.createElement('p');
	p.textContent = tweet.value;
	div1.appendChild(p);


	const div2 = document.createElement('div');
	div2.setAttribute('class', "actions");
	div1.appendChild(div2);


	const a = document.createElement('a');
	div2.appendChild(a);


	const a1 = document.createElement('a');
	div2.appendChild(a1);

	const a2 = document.createElement('a');
	a2.setAttribute('onclick', "retweet(this)");
	a2.setAttribute('title', "retweet");
	div2.appendChild(a2);

	const object = document.createElement('i');
	object.setAttribute('class', "material-icons");
	object.textContent = "thumb_up";
	a.appendChild(object);


	const object1 = document.createElement('i');
	object1.setAttribute('class', "material-icons");
	object1.textContent = "comment";
	a1.appendChild(object1);


	const object2 = document.createElement('i');
	object2.setAttribute('class', "fa fa-retweet");
	a2.appendChild(object2);

	
	
	let post = {
		user: username.value,
		tweet: tweet.value
	}

	tweets.unshift(post);

	console.log(tweets.length);
	console.log(JSON.stringify(tweets, null));

	console.log(lists.children);

}


function retweet(elem) {
	"use strict";
	var clone = elem.parentElement.parentElement.parentElement.cloneNode(true);
	lists.insertBefore(clone, document.getElementsByClassName('test')[0]);
}


function printTime() {

	var d = new Date();
	var hours = d.getHours();
	if (hours <= 24 && hours >= 1) {
		hours -= 12;
	}
	if (hours == 00) {
		hours = 12
	}
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	if (hours < 10) {
		hours = "0" + hours;
	}

	if (mins < 10) {
		mins = "0" + mins;
	}

	if (secs < 10) {
		secs = "0" + secs;
	}

	document.getElementById("time").innerHTML = hours + ":" + mins + ":" + secs;
}
//setTimeout(printTime, 1000);
setInterval(printTime, 1000);

