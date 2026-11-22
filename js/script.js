let starter = document.getElementById("starter");
let heading = document.getElementById("heading");
let ascii = document.getElementById("ascii");
let code = document.getElementById("code");
let infos = document.getElementById("infos");


let keyCode = document.getElementById("keyCode");
let key = document.getElementById("key");
let locationElem = document.getElementById("location");
let which = document.getElementById("which");
let codeElem = document.getElementById("code");


document.body.addEventListener("keydown",function(event){
	event.preventDefault();
	starter.style.display ="none";
	heading.style.display ="flex";
	ascii.style.display ="flex";
	infos.style.display ="flex";

let eventkeycode = event.keyCode;
let eventkey = event.key;
let eventloction = event.location;
let eventwhich = event.which;
let eventcode = event.code;


  
keyCode.innerHTML =eventkeycode;
key.innerHTML = eventkey;
locationElem.innerHTML=eventloction;
which.innerHTML =eventwhich;
code.innerHTML = eventcode;


	
})