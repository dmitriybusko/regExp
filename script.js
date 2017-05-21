window.addEventListener('load', init, false);

function init(){
	var color = document.querySelector('#color');
	var number = document.querySelector('#number');
	var time = document.querySelector('#time');
	var chess = document.querySelector('#chess');
	var phone = document.querySelector('#phone');
	var email = document.querySelector('#email');
	var passport = document.querySelector('#passport');
	color.addEventListener("keyup", handlerColor);
	number.addEventListener("keyup", handlerNumber);
	time.addEventListener("keyup", handlerTime);
	chess.addEventListener("keyup", handlerChess);
	phone.addEventListener("keyup", handlerPhone);
	email.addEventListener("keyup", handlerEmail);
	passport.addEventListener("keyup", handlerPassport);
}

function handlerColor(){
	var str = document.querySelector('#color'); //#asd123 || #12a
	if(str.value.search(/^#[a-f0-9]{6}$|^#[a-f0-9]{3}$/i) != -1){
		str.style.border = "2px solid green";
	}else{
		str.style.border = "2px solid red";
	}
}

function handlerNumber(){
	var str = document.querySelector('#number'); //12 || 123 || 12.1
	if(str.value.search(/^\d+$|^\d+.\d+$/) != -1){
		str.style.border = "2px solid green";
	}else{
		str.style.border = "2px solid red";
	}
}

function handlerTime(){
	var str = document.querySelector('#time'); //12:21 || 23-59
	if(str.value.search(/^[0-1][0-9][:-][0-5][0-9]$|^2[0-3][:-][0-5][0-9]$/) != -1){
		str.style.border = "2px solid green";
	}else{
		str.style.border = "2px solid red";
	}
}

function handlerChess(){
	var str = document.querySelector('#chess'); //a0 || h8
	if(str.value.search(/^[a-h][0-8]$/i) != -1){
		str.style.border = "2px solid green";
	}else{
		str.style.border = "2px solid red";
	}
}

function handlerPhone(){
	var str = document.querySelector('#phone'); //+7(234)-123-23-23
	if(str.value.search(/^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/) != -1){
		str.style.border = "2px solid green";
	}else{
		str.style.border = "2px solid red";
	}
}

function handlerEmail(){
	var str = document.querySelector('#email'); //mail@mail.com
	if(str.value.search(/^[\w\.\-]{1,64}@[\w\.\-]{1,64}\.\w{1,16}$/) != -1){
		str.style.border = "2px solid green";
	}else{
		str.style.border = "2px solid red";
	}
}

function handlerPassport(){
	var str = document.querySelector('#passport');  //HB2927163
	if(str.value.search(/^(AB|BM|HB|KH|MP|MC|KB|PP)\d{7}$/) != -1){
		str.style.border = "2px solid green";
	}else{
		str.style.border = "2px solid red";
	}
}

