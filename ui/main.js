console.log('Loaded!');


var img= document.getElementById('dan');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft + 1;
    img.style.marginLeft= marginLeft + 'px';
}

img.onclick = function(){
    var interval=setInterval(moveRight,50);
};

var button= document.getElementById('counter');
var counter=0;

button.onclick=function(){
  counter =counter +1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};