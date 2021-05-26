async function getTeddys(){
  try {
    let rep = await fetch('http://localhost:3000/api/teddies');
    let reponse = await rep.json();
    console.log(reponse);
    return reponse;
  } catch (error) {
    console.error(error);
  }
}

getTeddys();