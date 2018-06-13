document.getElementsByTagName("div")[0].style.color = "green";
document.getElementById("div2").style.color = "red";
document.getElementsByTagName("div")[1].style.color = "black";

function bouger() {
  var elem = document.getElementById("div2");
  var pos = 20;
  var id = setInterval(frame, 20);
  function frame() {
    if (pos ==50) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';

    }
  }
}

function inverser() {
  var tampon1 = document.getElementById('div3').innerHTML;
  var tampon2 = document.getElementById('div4').innerHTML;

 document.getElementById('div4').innerHTML= tampon1;
 document.getElementById('div3').innerHTML = tampon2;
  }

function ecarter() {
document.getElementById("div5").style.float = "left";
document.getElementById("div6").style.textAlign= "right";
  }
