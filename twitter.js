// versão 0.01

var submit = document.querySelector("input[type=submit]");
  // console.log(submit);
 var textArea = document.querySelector("textarea");
submit.onclick = function(event) {
  var container = document.getElementsByClassName("bottomMainContent")[0];
  var newDiv = document.createElement("div");
	newDiv.textContent = textArea.value;
	container.appendChild(newDiv);
	newDiv.className = "newDiv";
  event.preventDefault();
  textArea.value = "";
  retroCounter();
}	
function desableButton(){
 var textAreaLenght = document.querySelector("textarea");  
	console.log(textAreaLenght)
  if (textAreaLenght.value === '' || textAreaLenght.value.length > 140 || !textAreaLenght.value.trim()){
    document.getElementById("tweetSubmit").disabled = true;
	} else {
		document.getElementById("tweetSubmit").disabled = false;
	}
}
var counter = document.getElementById("counter");
var máximo = 140;
counter.innerHTML = máximo;
function retroCounter(){
  var count = máximo - textArea.value.length;
  counter.innerHTML = count;
}

