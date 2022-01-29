
var m_el = document.querySelector("#massa"),
n_el = document.querySelector("#mol"),
Jp_el = document.querySelector("#jpartikel"),
V_el = document.querySelector("#vgas"),
Ar_el = document.querySelector("#Ar"),
L_el = document.querySelector("#avogadro"),
vstp_el = document.querySelector("#vstp"),
input = document.querySelectorAll("input");
var input = document.querySelectorAll("input");
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("change",function(){
    var m = document.querySelector("#massa").value,
n = document.querySelector("#mol").value,
Jp = document.querySelector("#jpartikel").value,
vstp = document.querySelector("#vstp").value,
V = document.querySelector("#vgas").value,
Ar = document.querySelector("#Ar").value,
L = document.querySelector("#avogadro").value;

    console.log(this.value);
    if (m != "" && Ar != "") {
      n_el.value = m/Ar;
    } 
    if(Ar != "" && n != ""){
      m_el.value = n*Ar;
    } 
    if(m != "" && n != ""){
      Ar_el.value = m/n;
    } 
    if(n != "" && L != ""){
      Jp_el.value = n*L;
    } 
    if(Jp != "" && L != ""){
      n_el.value = Jp/L;
    } 
    if (n != "" && Jp != "") {
      L_el.value = Jp/n;
    }
    if(n != "" && vstp != ""){
      V_el.value = n*vstp;
    } 
    if(vstp != "" && V != ""){
      n_el.value = V/vstp;
    }
    if (V != "" && n != "") {
      vstp_el.value = V/n;
    }
  })
}


function clearAll(){
  for (var i = 0; i < input.length; i++) {
    input[i].value="";
  }
}
