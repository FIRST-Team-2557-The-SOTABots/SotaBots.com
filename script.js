var Images = new Array;
var Comments = new Array;
// year month (0 - 11), day, hour, minute, second, millisecond
var CountTo = new Date(2014,1,18,19,45,0,0);
var CounterName = "Build Season End In";
// Display after the count down has finished.
var LineOne = "Build Season has ended";
var LineTwo = "Good Luck!";
//banner images
Images = [
"images/image13.jpg",
"images/image15.png",
"images/image12.jpg",
"images/image11.jpg",
"images/image6.jpg",
"images/image14.jpg"];
Comments = ["Presenting our Gracious Professionalism Award to team 3393",
"Ariel Asist Ball in our home field",
"Our robot for the Aburn Mountainview District competition",
"TRA is lit up for our Bag-N'-Tag event",
"Mason Middle School Field, taking a break for some fun",
"It's fun to stay at the YMCA",
"Our bot from 2013's game, Ultimate Ascent"];
///////////// You've gone too far, scroll back up. /////////////
var Btt = document.getElementById("btt");
var Current = 0;
var Pointers = new Array; 
var T;

var BTTCatch = 0;
var n = Images.length;
window.onscroll=scrollFunc;
function updateTimer() {
	current = new Date();
	totalsec = CountTo - current;
	totalsec = Math.floor(totalsec/1000);
	sec = Math.floor(totalsec)%60;
	min = Math.floor(totalsec / 60)%60;
	hour = Math.floor(totalsec / 60 / 60)%24;
	day = Math.floor(totalsec / 60 / 60 / 24);
	result = "<span id='countDownTitle'>"+CounterName+"</span><br/><span id='countDown'>";
	if(day<10) {
		result += "<font title='days'>0" + day+"</font>:";
	} else {
		result += "<font title='days'>"+day+"</font>:";
	}
	if(hour<10) {
		result += "<font title='hours'>0" + hour+"</font>:";
	} else {
		result += "<font title='hours'>"+hour+"</font>:";
	}
	if(min<10) {
		result += "<font title='minutes'>0" + min+"</font>:";
	} else {
		result += "<font title='minutes'>"+min+"</font>:";
	}
	if(sec<10) {
		result += "<font title='seconds'>0" + sec+"</font>";
	} else {
		result += "<font title='seconds'>"+sec+"</font>";
	}
	result += "</span>";
	if (totalsec > 0) {
	document.getElementById("counter").innerHTML= result;
	setTimeout("updateTimer()",1000);
	} else {
	document.getElementById("counter").innerHTML= "<span id='countDownTitle'>"+LineOne+"</span><br/><span id='countDown'>"+LineTwo+"</span>";
	}
}
function scrollFunc(e) {
    if ( typeof scrollFunc.x == 'undefined' ) {
        scrollFunc.x=window.pageXOffset;
        scrollFunc.y=window.pageYOffset;
    }
    var diffX=scrollFunc.x-window.pageXOffset;
    var diffY=scrollFunc.y-window.pageYOffset;

    if( diffY!=0) {
		if (BTTCatch==0) {backToTop()} else {setTimeout("backToTop()",100),BTTCatch=0};
    } else {
        //First Scroll Event
    }
	
	if (diffX!=0)
	{
		//X scrolling
	} else {
		//First Scroll Event
	}
    scrollFunc.x=window.pageXOffset;
    scrollFunc.y=window.pageYOffset;
	
}
function backToTop() {
	var y = window.pageYOffset;
	if (y>(window.innerHeight/2))
	{
		$("#btt").fadeIn("slow");
	} else {
		$("#btt").fadeOut("slow");
	}
	$("#btt").css("top", (y+window.innerHeight/2)-592-100)
}
function moveTo(target) {
	$("#btt").clearQueue();
	$('body').clearQueue();
	
	var y = document.getElementById(target).offsetTop;
	$('body').animate({scrollTop:y+'px'}, 1000);
	BTTCatch=1;
	if (target!="wrapper") {self.document.location.hash = target} else {self.document.location.hash = ""}
}
function init() {
	updateTimer();
	//Scrolling images.
	var content="<div id=\"scroll\"></div><div id=\"scroll2\"></div>";
	//Set up small boxes for quick image changes.
	for (var i=0;i<n;i++) {
		content+="<div id=\""+i+"\" class=\"gear\" onclick=\"fakeFlash("+i+")\"></div>";
	}
	content += "<div id=\"comment\">"+Comments[0]+"</div>";
	document.getElementById("object").innerHTML = content;
	//Adjust the width of the comment to the number of pointers.
	document.getElementById("comment").style.maxWidth = (900 - 45 * n) + "px";
	//Adjust the comment height to be within the image.
	var height = $('#comment').height();
	document.getElementById("comment").style.top = (506 - height - 25) + "px";
	//fade in the comment
	$("#comment").fadeOut(0);
	$("#btt").hide();
	//Fade in the small box "pointers"
	for (var i=0;i<n;i++) {
		Pointers[i] = document.getElementById(i);
		$("#"+i).fadeOut(0);
		$("#"+i).fadeIn(1000);
	}
	//document.getElementById("title").style.backgroundImage="url(images/banner"+Math.round(Math.random()*1)+".png)";
	
	//Scroll to the page you were last on if you bookmarked it.
	setTimeout("moveTo(\""+self.document.location.hash.substring(1)+"\")",500);
	setTimeout("backToTop()",500);
	fakeFlash(Current);
	////////////////////////////////////////////////////
	//PR
	
	$("#NPR").fadeTo(0,0.25);
	$("#NPR").mouseenter(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,1);
		});
	$("#NPR").mouseleave(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,0.25);
		});
	//BD
	$("#NBD").fadeTo(0,0.25);
	$("#NBD").mouseenter(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,1);
		});
	$("#NBD").mouseleave(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,0.25);
		});
	//PG
	$("#NPG").fadeTo(0,0.25);
	$("#NPG").mouseenter(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,1);
		});
	$("#NPG").mouseleave(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,0.25);
		});
	//MD
	$("#NMD").fadeTo(0,0.25);
	$("#NMD").mouseenter(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,1);
		});
	$("#NMD").mouseleave(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,0.25);
		});
	//SP
	$("#NSP").fadeTo(0,0.25);
	$("#NSP").mouseenter(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,1);
		});
	$("#NSP").mouseleave(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,0.25);
		});
	//CT
	$("#NCT").fadeTo(0,0.25);
	$("#NCT").mouseenter(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,1);
		});
	$("#NCT").mouseleave(function() {
		$(this).clearQueue();
		$(this).fadeTo(1000,0.25);
		});
}

function imageSize(element) {
	$("#activeImage").fadeOut(250, function() {
		document.getElementById("activeImage").style.width = "58px";
		completeSize(element);
	});
	if(document.getElementById("activeImage") == null) {
		completeSize(element);
	}
}
function completeSize(element) {
	$("#activeImage").fadeIn(500);
	var last = document.getElementById("activeImage");
	element.id = "activeImage";
	if (last != null) {
		last.id = "";
	}
	$("#activeImage").fadeOut(250, function() {
		document.getElementById("activeImage").style.width = "900px";
		$("#activeImage").fadeIn(500);
	});
}

function fakeFlash(Next) {
	clearTimeout(T)
	var Object = document.getElementById("object")
	var Scroll = document.getElementById("scroll")
	var Scroll2 = document.getElementById("scroll2")
	var Comment = document.getElementById("comment");
	$("#scroll").clearQueue();
	$("#scroll2").clearQueue();
	//navigation gears
	if (Pointers[Current]) {Pointers[Current].style.backgroundColor="#E5E5E5"};
	if (Pointers[Next]) {Pointers[Next].style.backgroundColor = "#FFFD00"};
	if (Current==0) {Pointers[n-1].style.backgroundColor="#E5E5E5"};
	//Object
	Scroll.style.backgroundImage="url("+Images[Next]+")";
	Scroll.style.left = Object.offsetLeft+950;
	Scroll.style.width = 0;
	$("#comment").fadeOut();
	if (Next!=0) {
		Scroll2.style.backgroundImage="url("+Images[Current]+")";
	} else {
		Scroll2.style.backgroundImage="url("+Images[n-1]+")";
	}
	Scroll2.style.width = 950;
	Object.style.backgroundImage="url()";
	$("#scroll2").animate({width:0+"px"},1000,function() {});
	$("#scroll").animate({width:950+'px',left:Object.offsetLeft},1000, function() {
		Object.style.backgroundImage="url("+Images[Next]+")";
		if (Next!=-1) {
			Comment.innerHTML = Comments[Next];
		} else {
			Comment.innerHTML = Comments[n-1];
		}
		var height = $('#comment').height();
		Comment.style.top = (506 - height - 25) + "px";
		$("#comment").fadeIn();
	});
	Scroll.style.left = Object.offsetLeft+950;
	Scroll.style.width = 0;
	//Cycle
	Current = Next;
	if (Current+1>=n) {Next = -1;}
	T=setTimeout("fakeFlash("+(Next+1)+")",5000);
}
