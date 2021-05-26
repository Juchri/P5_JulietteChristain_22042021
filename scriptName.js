/*
TODO
[] Remplir une div avec tous les éléments de MOCK_REP[0]
[] appeler maxime

*/

let MOCK_REP = [{"colors":["Tan","Chocolate","Black","White"],"_id":"5be9c8541c9d440000665243","name":"Norbert","price":2900,"imageUrl":"http://localhost:3000/images/teddy_1.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Pale brown","Dark brown","White"],"_id":"5beaa8bf1c9d440000a57d94","name":"Arnold","price":3900,"imageUrl":"http://localhost:3000/images/teddy_2.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Brown"],"_id":"5beaaa8f1c9d440000a57d95","name":"Lenny and Carl","price":5900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/teddy_3.jpg"},{"colors":["Brown","Blue","Pink"],"_id":"5beaabe91c9d440000a57d96","name":"Gustav","price":4500,"imageUrl":"http://localhost:3000/images/teddy_4.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Beige","Tan","Chocolate"],"_id":"5beaacd41c9d440000a57d97","name":"Garfunkel","price":5500,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/teddy_5.jpg"}];


window.onload = function(e) { 
  console.log("document.onload"); 

  let myDivName = document.getElementById('teddyName');
  let myDivPrice = document.getElementById('teddyPrice');
  let myDivColors = document.getElementById('teddyColors');
  let myDivId = document.getElementById('id');
  let myDivImage = document.getElementById('image0');

  if(!myDivName) {
    console.log('erreur')
  } else {
    const firstElement = MOCK_REP[0];
    const colors = firstElement.colors;
    const name = firstElement.name;
    const price = firstElement.price;
    const id = firstElement._id;
    const image = firstElement.imageUrl;
    myDivColors.innerHTML = colors;
    myDivName.innerHTML = name;
    myDivPrice.innerHTML = price;
    myDivId.innerHTML = id;
    myDivImage.src = image;
  }
  

}


async function getTeddys(){
  try {
    let rep = await fetch('http://localhost:3000/api/teddies');
    let reponse = await rep.json();
    console.log(reponse);
    console.log('first element', reponse[0])
    return reponse;
  } catch (error) {
    console.error(error);
  }
}

//getTeddys();


