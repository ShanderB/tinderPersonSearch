var button = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-pink):a");

var teste = setInterval(
function(){
var x = document.getElementsByClassName("Fz($xl) Fw($bold)");
 if(x[0].innerText.toLowerCase().includes("luiza") || x[0].innerText.toLowerCase().includes("luisa")){
     console.log("ACHO")
     alert("ACHO")
     clearInterval(teste)
 } else {
    button[0].click()
 }
}, 600);