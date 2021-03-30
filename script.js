fetch('https://webacademy.se/fakestore/')
  .then(res => res.json())
  .then(json => generateHtml(json))

  var produkterivarukorg = new Array()



  const generateHtml = (res) => {

      var varuDiv = document.getElementById("varukorg")
    
   for(i = 0; i < res.length; i++){

        varuDiv.innerHTML +=

        `
      <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
        <div class="card-header">${res[i].title} $${res[i].price}</div>
        <div class="card-body">
    
          <img src = ${res[i].image} width="250">
          
          <p class="card-text">${res[i].description}</p>
   <button id="buttonklick" value="${res[i].id}" type="button" onclick="addToCart(this.value)" class="btn btn-primary">Lägg till i varukorg</button>

        </div>
      </div>
       `

       


   }

      
    }


var antal = document.getElementById("antalknapp");
window.onload = showVarukorg;


function showVarukorg(){
  
   antal.innerHTML = `
   ${aktuellvarukorg.length} produkter i varukorgen
   `
   
   
   //produkterivarukorg.length + " produkter i varukorgen";
}


document.getElementById("varukorgknapp").onclick=function(){
  localStorage.setItem('array1', JSON.stringify(aktuellvarukorg))
  window.location.href='varukorg.html'
}


document.getElementById("indexknapp").onclick=function(){
  localStorage.setItem('array1', JSON.stringify(aktuellvarukorg))
  window.location.href='index.html'
}


var sessionString = localStorage.getItem('array1')
var page2array = JSON.parse(sessionString)



var aktuellvarukorg = new Array

if(!page2array.length == 0 ){
  aktuellvarukorg = page2array


}else{
aktuellvarukorg = produkterivarukorg
}






  var buttonkör = document.getElementById("buttonklick");

  var gömknapp = document.getElementById("notis");


  function addToCart(clicked_value){
    
    aktuellvarukorg.push(clicked_value)
    antal.innerHTML= aktuellvarukorg.length + " produkter i varukorgen"
    gömknapp.innerHTML ="Produkt tillagd i varukorg!"
    setTimeout(() => {
      gömknapp.innerHTML=""
    }, 2000);
  };
